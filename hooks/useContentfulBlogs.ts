'use client';

import { useState, useEffect } from 'react';
import client from '@/lib/contentful';
import type { BlogPost } from '@/lib/blog-data';
import { blogPosts as fallbackBlogs } from '@/lib/blog-data';

export function useContentfulBlogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await client.getEntries({
          content_type: 'blog',
        });

        // If Contentful returns entries, transform them
        if (response.items && response.items.length > 0) {
          const transformedBlogs: BlogPost[] = response.items.map((item: any) => ({
            id: item.sys.id,
            title: item.fields.title || 'Untitled',
            description: item.fields.description || item.fields.excerpt || '',
            excerpt: item.fields.description || item.fields.excerpt || '',
            author: item.fields.author || 'Anonymous',
            category: item.fields.category || 'Blog',
            content: item.fields.content || item.fields.description || '',
            date: item.fields.publishedDate || new Date().toLocaleDateString(),
            publishedDate: item.fields.publishedDate || new Date().toISOString(),
            readTime: item.fields.readTime || '5 min read',
            featuredImage:
              item.fields.featuredImage?.fields?.file?.url ||
              'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
          }));

          setBlogs(transformedBlogs);
          setError(null);
        } else {
          // If no entries in Contentful, use fallback blog data
          console.log('[v0] No blog entries in Contentful, using fallback data');
          setBlogs(fallbackBlogs);
          setError(null);
        }
      } catch (err) {
        console.error('[v0] Contentful fetch error:', err);
        // On error, fall back to hardcoded blog data
        console.log('[v0] Falling back to hardcoded blog data');
        setBlogs(fallbackBlogs);
        setError(null); // Don't show error since we have fallback data
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return { blogs, loading, error };
}
