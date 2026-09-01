import { BlogPost } from '@/lib/blog-data';

interface BlogPostCardProps {
  post: BlogPost;
  onClick: (post: BlogPost) => void;
}

export function BlogPostCard({ post, onClick }: BlogPostCardProps) {
  return (
    <button
      onClick={() => onClick(post)}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-background transition-all hover:shadow-lg"
    >
      {/* Featured Image */}
      <div className="relative h-48 w-full overflow-hidden bg-white">
        <img
          src={post.featuredImage}
          alt={post.title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-semibold text-primary">{post.category}</span>
          <span className="text-xs text-foreground/60">{post.date}</span>
        </div>

        <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary">
          {post.title}
        </h3>

        <p className="line-clamp-2 flex-1 text-sm text-foreground/60">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between border-t border-border pt-3">
          <span className="text-xs text-foreground/50">{post.readTime}</span>
          <span className="text-xs font-semibold text-primary transition-transform group-hover:translate-x-1">
            Read More →
          </span>
        </div>
      </div>
    </button>
  );
}
