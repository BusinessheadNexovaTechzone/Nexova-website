'use client';

import { useEffect, useState } from 'react';
import type { BlogPost } from '@/lib/blog-data';
import { blogPosts as fallbackBlogs } from '@/lib/blog-data';

export function useBlogifierBlogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const response = await fetch('/api/blogs');
        if (!response.ok) throw new Error('Blogifier is unavailable right now.');

        const posts = (await response.json()) as BlogPost[];
        setBlogs(posts.length > 0 ? posts : fallbackBlogs);
      } catch (loadError) {
        console.error('Blogifier fetch error:', loadError);
        setBlogs(fallbackBlogs);
        setError(null);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  return { blogs, loading, error };
}