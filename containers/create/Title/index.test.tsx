import { cleanup, render, screen } from 'test-utils';
import Title from './index';

afterEach(() => cleanup());

describe('playlist title', () => {
  test('처음에는 제목이 뜨고 input이 보이지 않는다. ', () => {
    render(<Title />);
    expect(screen.getByText(/플레이리스트/)).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
  });
  test('수정버튼을 클릭하면 제목이 없어지고 인풋이 보인다.', async () => {
    const { user } = render(<Title />);
    await user.click(screen.getByRole('button', { name: '수정' }));
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
    expect(await screen.findByRole('textbox')).toBeInTheDocument();
  });
  test('인풋에 글자를 적고 취소버튼을 누르면 인풋이 없어지고 기존의 헤딩 텍스트로 나타난다.', async () => {
    const { user } = render(<Title />);
    const editButton = screen.getByRole('button', { name: '수정' });
    await user.click(editButton);
    expect(editButton).not.toBeInTheDocument();
    const input = await screen.findByRole('textbox');
    await user.type(input, '안녕하세요');
    expect(await screen.findByRole('textbox')).toHaveValue('안녕하세요');
    await user.click(screen.getByRole('button', { name: '취소' }));
    expect(input).not.toBeInTheDocument();
    const heading = await screen.findByRole('heading');
    expect(heading).toHaveTextContent('플레이리스트 제목을 정해주세요.');
  });
  test('인풋에 글자를 적고 취소버튼을 누른 뒤 다시 수정버튼을 누르면 방금 작성한 글자가 담긴 인풋이 나타난다.', async () => {
    const { user } = render(<Title />);
    const editButton = screen.getByRole('button', { name: '수정' });
    await user.click(editButton);
    const input = await screen.findByRole('textbox');
    const cancelBtn = await screen.findByRole('button', { name: '취소' });
    await user.type(input, '안녕하세요');
    await user.click(cancelBtn);
    expect(input).not.toBeInTheDocument();
    await user.click(editButton);
    expect(input).toHaveValue('안녕하세요');
  });
  test('인풋에 글자를 적고 완료버튼을 누르면 인풋이 사라지고 헤딩에 작성한 텍스트로 렌더링된다.', async () => {
    const { user } = render(<Title />);
    const editButton = screen.getByRole('button', { name: '수정' });
    await user.click(editButton);
    const input = await screen.findByRole('textbox');
    await user.type(input, '안녕하세요');
    await user.click(screen.getByRole('button', { name: '완료' }));

    const heading = await screen.findByRole('heading');
    expect(heading).toHaveTextContent('안녕하세요');
  });
});
