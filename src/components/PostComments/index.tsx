import React, { useState } from "react";

const PostComments = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState("");

  const handleAddComment = () => {
    if (comment) {
      setComments((prevComments) => [...prevComments, comment]);
      setComment(""); // Limpa o campo de input após adicionar o comentário
    }
  };

  return (
    <div>
      {/* Adicionando data-testid no input para facilitar a seleção no teste */}
      <textarea
        data-testid="comment-input"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Adicione um comentário"
      />
      {/* Adicionando data-testid no botão de envio */}
      <button
        data-testid="submit-button"
        onClick={handleAddComment}
      >
        Enviar
      </button>

      {/* Lista de comentários */}
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostComments;
