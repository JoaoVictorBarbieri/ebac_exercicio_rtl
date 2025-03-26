import { render, screen, fireEvent } from "@testing-library/react";
import PostComments from "./index";

describe("PostComments Component", () => {
  test("deve permitir a inserção de dois comentários", () => {
    render(<PostComments />);

    const input = screen.getByTestId("comment-input");
    const button = screen.getByTestId("submit-button");

    // Simular a inserção do primeiro comentário
    fireEvent.change(input, { target: { value: "Primeiro comentário" } });
    fireEvent.click(button);

    // Simular a inserção do segundo comentário
    fireEvent.change(input, { target: { value: "Segundo comentário" } });
    fireEvent.click(button);

    // Verificar se os comentários foram adicionados à tela
    expect(screen.getByText("Primeiro comentário")).toBeInTheDocument();
    expect(screen.getByText("Segundo comentário")).toBeInTheDocument();
  });
});
