import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Playlist from './index';

describe('Playlist', () => {
  test('제일 첫 input에 focus가 가야한다', () => {
    render(<Playlist />);
    expect(screen.getAllByRole('textbox')[0]).toHaveFocus();
  });
  test('처음엔 5개만 있어야 한다', () => {
    render(<Playlist />);
    const inputs = screen.getAllByPlaceholderText('가수 이름');

    expect(inputs).toHaveLength(5);
  });
  test('추가하기를 누르면 추가된다', async () => {
    render(<Playlist />);
    const btn = screen.getByText(/추가하기/);
    userEvent.click(btn);

    await waitFor(() => {
      expect(screen.getAllByPlaceholderText(/가수 이름/)).toHaveLength(6);
    });
  });
  test('아무것도 작성하지 않고 submit 하면 에러메세지가 뜬다.', async () => {
    render(<Playlist />);

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();

    userEvent.click(screen.getByText('create'));
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
});
