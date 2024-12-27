import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Reply } from 'lucide-react';
import type { PlayerComment } from '../../types';
import { ReactionBar } from '../ReactionBar';

interface CommentProps {
  comment: PlayerComment;
  onReply: (parentId: string) => void;
}

function Comment({ comment, onReply }: CommentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white p-4 rounded-lg shadow-sm"
    >
      <div className="flex justify-between mb-2">
        <p className="font-medium">{comment.userName}</p>
        <p className="text-sm text-gray-600">
          {new Date(comment.timestamp).toLocaleDateString()}
        </p>
      </div>
      <p className="text-gray-800 mb-3">{comment.content}</p>
      <div className="flex justify-between items-center">
        <ReactionBar />
        <button
          onClick={() => onReply(comment.id)}
          className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700"
        >
          <Reply className="w-4 h-4" />
          Reply
        </button>
      </div>
      {comment.replies && (
        <div className="ml-8 mt-4 space-y-4">
          {comment.replies.map(reply => (
            <Comment key={reply.id} comment={reply} onReply={onReply} />
          ))}
        </div>
      )}
    </motion.div>
  );
}

interface PlayerCommentsProps {
  comments: PlayerComment[];
}

export function PlayerComments({ comments }: PlayerCommentsProps) {
  const handleReply = (parentId: string) => {
    console.log('Reply to comment:', parentId);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <MessageSquare className="w-5 h-5 text-blue-600" />
        <h3 className="text-xl font-bold">Fan Discussion</h3>
      </div>
      <div className="space-y-4">
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} onReply={handleReply} />
        ))}
      </div>
    </div>
  );
}