"use client";

import { useState, useEffect } from 'react';
import { BlogPost } from '@/lib/blog-data';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface BlogPostModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
  onSave?: (post: BlogPost) => void;
}

export function BlogPostModal({ post, isOpen, onClose, onSave }: BlogPostModalProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedPost, setEditedPost] = useState<BlogPost | null>(post);

  // Update editedPost when post changes
  useEffect(() => {
    setEditedPost(post);
  }, [post]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedPost(post);
  };

  const handleSave = () => {
    if (editedPost && onSave) {
      onSave(editedPost);
      setIsEditing(false);
    }
  };

  const handleInputChange = (field: keyof BlogPost, value: string) => {
    if (editedPost) {
      setEditedPost({ ...editedPost, [field]: value });
    }
  };

  if (!post || !editedPost) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] w-full max-w-4xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {isEditing ? 'Edit Blog Post' : 'View Blog Post'}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Featured Image */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Featured Image</label>
            {isEditing ? (
              <Input
                value={editedPost.featuredImage}
                onChange={(e) => handleInputChange('featuredImage', e.target.value)}
                placeholder="Enter image URL"
                className="text-sm"
              />
            ) : (
              <img
                src={editedPost.featuredImage}
                alt={editedPost.title}
                className="h-96 w-full rounded-lg object-cover"
              />
            )}
          </div>

          {/* Title */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Title</label>
            {isEditing ? (
              <Input
                value={editedPost.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="text-lg font-bold"
              />
            ) : (
              <h2 className="text-2xl font-bold text-foreground">{editedPost.title}</h2>
            )}
          </div>

          {/* Meta Information */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-foreground/60">Category</label>
              {isEditing ? (
                <Input
                  value={editedPost.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  size="sm"
                  className="text-sm"
                />
              ) : (
                <p className="text-sm font-medium text-primary">{editedPost.category}</p>
              )}
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-foreground/60">Date</label>
              {isEditing ? (
                <Input
                  value={editedPost.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  size="sm"
                  className="text-sm"
                />
              ) : (
                <p className="text-sm text-foreground/60">{editedPost.date}</p>
              )}
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-foreground/60">Author</label>
              {isEditing ? (
                <Input
                  value={editedPost.author}
                  onChange={(e) => handleInputChange('author', e.target.value)}
                  size="sm"
                  className="text-sm"
                />
              ) : (
                <p className="text-sm text-foreground/60">{editedPost.author}</p>
              )}
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-foreground/60">Read Time</label>
              {isEditing ? (
                <Input
                  value={editedPost.readTime}
                  onChange={(e) => handleInputChange('readTime', e.target.value)}
                  size="sm"
                  className="text-sm"
                />
              ) : (
                <p className="text-sm text-foreground/60">{editedPost.readTime}</p>
              )}
            </div>
          </div>

          {/* Excerpt */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Excerpt</label>
            {isEditing ? (
              <Textarea
                value={editedPost.excerpt}
                onChange={(e) => handleInputChange('excerpt', e.target.value)}
                className="min-h-20 text-sm"
                placeholder="Brief summary of the blog post"
              />
            ) : (
              <p className="text-sm text-foreground/70">{editedPost.excerpt}</p>
            )}
          </div>

          {/* Content */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Content</label>
            {isEditing ? (
              <Textarea
                value={editedPost.content}
                onChange={(e) => handleInputChange('content', e.target.value)}
                className="min-h-64 text-sm"
                placeholder="Full blog post content"
              />
            ) : (
              <div className="prose prose-sm max-w-none space-y-4 text-foreground/80">
                {editedPost.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-sm leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 border-t border-border pt-4">
            {!isEditing ? (
              <>
                <Button variant="outline" onClick={onClose}>
                  Close
                </Button>
                <Button onClick={handleEdit}>
                  Edit Post
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button onClick={handleSave}>
                  Save Changes
                </Button>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
