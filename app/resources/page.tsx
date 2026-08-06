'use client';

import { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { BlogPostCard } from '@/components/blog/BlogPostCard';
import { BlogPostModal } from '@/components/blog/BlogPostModal';
import { BlogPost } from '@/lib/blog-data';
import { useContentfulBlogs } from '@/hooks/useContentfulBlogs';

export default function ResourcesComponent() {
  const { blogs, loading, error } = useContentfulBlogs();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allBlogPosts, setAllBlogPosts] = useState<BlogPost[]>(blogs);

  // Update allBlogPosts when blogs are fetched
  useEffect(() => {
    if (blogs.length > 0) {
      setAllBlogPosts(blogs);
    }
  }, [blogs]);

  const handleOpenPost = (post: BlogPost) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPost(null), 300);
  };

  const handleSavePost = (updatedPost: BlogPost) => {
    setAllBlogPosts(
      allBlogPosts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
    handleCloseModal();
  };

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
      description: 'Real-world examples of how we&apos;ve helped businesses transform',
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

  return (
    <Layout>
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
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

      {/* Resource Categories Grid */}
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
                    <a
                      key={itemIdx}
                      href="#"
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <span>→</span>
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Latest Blog Posts</h2>
            <p className="text-foreground/60">Stay updated with industry trends and insights</p>
          </div>
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="text-center">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                <p className="mt-4 text-foreground/60">Loading blog posts...</p>
              </div>
            </div>
          ) : error ? (
            <div className="rounded-lg border border-destructive/20 bg-destructive/10 p-6 text-center">
              <p className="text-destructive">{error}</p>
              <p className="mt-2 text-sm text-foreground/60">Please try refreshing the page</p>
            </div>
          ) : allBlogPosts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {allBlogPosts.map((post) => (
                <BlogPostCard
                  key={post.id}
                  post={post}
                  onClick={handleOpenPost}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-foreground/60">No blog posts available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Blog Post Modal */}
      <BlogPostModal
        post={selectedPost}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSavePost}
      />

      {/* Quick Links */}
      {/* <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-3xl font-bold text-foreground">Quick Access</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <a
              href="#"
              className="rounded-lg border border-border bg-card p-6 text-center hover:shadow-lg transition-shadow group"
            >
              <p className="text-2xl mb-2">📖</p>
              <h3 className="font-semibold text-foreground group-hover:text-primary">Documentation</h3>
            </a>
            <a
              href="#"
              className="rounded-lg border border-border bg-card p-6 text-center hover:shadow-lg transition-shadow group"
            >
              <p className="text-2xl mb-2">📞</p>
              <h3 className="font-semibold text-foreground group-hover:text-primary">Contact Support</h3>
            </a>
            <a
              href="#"
              className="rounded-lg border border-border bg-card p-6 text-center hover:shadow-lg transition-shadow group"
            >
              <p className="text-2xl mb-2">🎥</p>
              <h3 className="font-semibold text-foreground group-hover:text-primary">Video Tutorials</h3>
            </a>
            <a
              href="#"
              className="rounded-lg border border-border bg-card p-6 text-center hover:shadow-lg transition-shadow group"
            >
              <p className="text-2xl mb-2">💬</p>
              <h3 className="font-semibold text-foreground group-hover:text-primary">Community Forum</h3>
            </a>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
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
    </Layout>
  );
}
