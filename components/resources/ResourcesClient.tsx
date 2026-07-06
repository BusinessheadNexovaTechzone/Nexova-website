'use client';

import { useEffect, useState } from 'react';
import { BlogPost } from '@/lib/blog-data';
import { BlogPostCard } from '@/components/blog/BlogPostCard';
import { BlogPostModal } from '@/components/blog/BlogPostModal';

const BLOG_API_URL =
  process.env.NEXT_PUBLIC_BLOG_API_URL ??
  'https://blogifier-d3dfhnhsfugnfbaq.centralindia-01.azurewebsites.net/api/post/items/All/Post';

const resources = [
  {
    title: 'Knowledge Center',
    description: 'Comprehensive guides and documentation for all our products and services',
    icon: '📚',
    items: ['Getting Started Guides', 'API Documentation', 'Integration Tutorials', 'Best Practices'],
  },
  {
    title: 'Blog & Insights',
    description: 'Latest updates, industry trends, and thought leadership articles',
    icon: '📖',
    items: ['AI Trends & Updates', 'Tech Insights', 'Industry Updates', 'Expert Opinions'],
  },
  {
    title: 'Case Studies',
    description: 'Real-world examples of how we\'ve helped businesses transform',
    icon: '📊',
    items: ['Software Projects', 'FoodZo Case Studies', 'AI Implementations', 'Restaurant Automation'],
  },
  {
    title: 'Downloads',
    description: 'Essential documents and resources for business decisions',
    icon: '⬇️',
    items: ['Company Brochure', 'Product Decks', 'FoodZo Demo Guide', 'Pricing Documents'],
  },
  {
    title: 'Support',
    description: 'Help and support resources for customers and partners',
    icon: '🤝',
    items: ['Help Center', 'Technical Support', 'Installation Support', 'Contact Sales'],
  },
  {
    title: 'FAQs',
    description: 'Answers to frequently asked questions about our services',
    icon: '❓',
    items: ['Product FAQs', 'Service FAQs', 'Pricing Questions', 'Implementation'],
  },
];

export function ResourcesClient() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const blogApiOrigin = new URL(BLOG_API_URL).origin;
  const resolveCoverUrl = (cover: string | null | undefined) => {
    if (!cover) {
      return 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop';
    }
    if (cover.startsWith('http')) {
      return cover;
    }
    return `${blogApiOrigin}${cover.startsWith('/') ? '' : '/'}${cover}`;
  };

  const fetchPostBySlug = async (slug: string): Promise<BlogPost> => {
    const response = await fetch(`${blogApiOrigin}/api/post/byslug/${encodeURIComponent(slug)}`, {
      headers: {
        Accept: 'application/json',
      },
      
    });

    if (!response.ok) {
      throw new Error(`Failed to load blog post by slug: ${response.status}`);
    }

    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      const body = await response.text();
      throw new Error(`Expected JSON from slug endpoint, got HTML or invalid response. Response preview: ${body.slice(0, 300)}`);
    }

    const data = await response.json();

    return {
      id: String(data.id),
      title: data.title || 'Untitled',
      slug: data.slug || slug,
      category: 'Blog & Insights',
      date: data.publishedAt
        ? new Date(data.publishedAt).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        : 'Unknown date',
      excerpt: data.excerpt || data.description || '',
      author: data.user?.nickName || data.user?.email || 'Nexova Team',
      readTime: '5 min read',
      featuredImage: resolveCoverUrl(data.cover),
      content: data.content || data.description || '',
      categories: Array.isArray(data.categories) ? data.categories : [],
    };
  };

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await fetch(BLOG_API_URL, {
          headers: {
            Accept: 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to load blog posts: ${response.status}`);
        }

        const contentType = response.headers.get('content-type') || '';
        if (!contentType.includes('application/json')) {
          throw new Error(
            `Blog API responded with unsupported content type: ${contentType || 'unknown'}.`
          );
        }

        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error('Invalid response format for blog posts');
        }

        setPosts(
          data.map((item: any) => ({
            id: String(item.id),
            title: item.title || 'Untitled',
            slug: item.slug || item.title?.toLowerCase().replace(/\s+/g, '-') || undefined,
            category: 'Blog & Insights',
            date: item.publishedAt
              ? new Date(item.publishedAt).toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })
              : 'Unknown date',
            excerpt: item.excerpt || item.description || '',
            author: item.user?.nickName || item.user?.email || 'Nexova Team',
            readTime: '5 min read',
            featuredImage: resolveCoverUrl(item.cover),
            content: item.content || item.description || '',
          }))
        );
      } catch (error) {
        setFetchError((error as Error).message || 'Unable to load blog posts from the API.');
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  const handleOpenPost = async (post: BlogPost) => {
    setSelectedPost(post);
    setIsModalOpen(true);

    if (post.slug) {
      try {
        const fullPost = await fetchPostBySlug(post.slug);
        setSelectedPost(fullPost);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPost(null), 300);
  };

  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Resources & <span className="text-primary">Knowledge Base</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-foreground/70">
              Everything you need to succeed with Nexova TechZone. Access guides, documentation, and insights.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, idx) => (
              <div key={idx} className="rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4 text-4xl">{resource.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-foreground">{resource.title}</h3>
                <p className="mb-6 text-sm text-foreground/60">{resource.description}</p>
                <div className="space-y-2 border-t border-border pt-4">
                  {resource.items.map((item, itemIdx) => (
                    <p
                      key={itemIdx}
                    
                      className="flex items-center gap-2 text-sm  transition-colors"
                    >
                      <span>→</span>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Latest Blog Posts</h2>
            <p className="text-foreground/60">Stay updated with industry trends and insights</p>
          </div>

          {fetchError ? (
            <div className="rounded-lg border border-destructive/20 bg-destructive/10 p-6 text-center mb-8">
              <p className="text-destructive">{fetchError}</p>
              <p className="mt-2 text-sm text-foreground/60">Please verify the API and try again.</p>
            </div>
          ) : null}

          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-foreground/60">Loading blog posts...</p>
            </div>
          ) : posts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogPostCard key={post.id} post={post} onClick={handleOpenPost} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-foreground/60">No blog posts available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      <BlogPostModal post={selectedPost} isOpen={isModalOpen} onClose={handleCloseModal} onSave={() => {}} />

      <section className="bg-gradient-to-r from-primary/10 to-primary/5 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-foreground">Didn&apos;t find what you&apos;re looking for?</h2>
          <p className="mb-8 text-lg text-foreground/70">
            Our support team is ready to help you with any questions or concerns.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-lg font-semibold text-primary-foreground shadow-lg hover:-translate-y-1 transition-all"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
