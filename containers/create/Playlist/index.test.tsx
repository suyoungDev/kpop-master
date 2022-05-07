import { logRoles } from '@testing-library/react';
import { cleanup, render, screen } from 'test-utils';
import Playlist from './index';

afterEach(() => cleanup());

describe('Playlist', () => {
  test('제일 첫 input에 focus가 가야한다', async () => {
    render(<Playlist />);
    expect(screen.getAllByRole('textbox')[0]).toHaveFocus();
  });
  test('처음엔 5 개의 track set이 있어야 한다', () => {
    render(<Playlist />);
    const inputs = screen.getAllByPlaceholderText('가수 이름');
    expect(inputs).toHaveLength(5);
  });
  test('추가하기를 누르면 총 6개 track set이 된다', async () => {
    const { user } = render(<Playlist />);

    const btn = screen.getByText(/추가하기/);
    await user.click(btn);

    const items = await screen.findAllByPlaceholderText('가수 이름');
    expect(items).toHaveLength(6);
  });
  test('작성 잘 된다', async () => {
    const { user } = render(<Playlist />);
    const input = screen.getAllByLabelText('가수 이름')[0];
    await user.type(input, 'hi');
    const text = await screen.findByDisplayValue('hi');

    expect(text).toBeInTheDocument();
  });
  test('2글자 미만을 작성하면 에러메세지가 뜬다', async () => {
    const { user } = render(<Playlist />);
    const inputs = screen.getAllByRole('textbox');
    await user.type(inputs[0], 'h');
    expect(inputs[0]).toHaveValue('h');
    await user.tab();
    expect(inputs[1]).toHaveFocus();
    const alert = await screen.findByRole('alert');
    expect(alert).toBeInTheDocument();
  });
  test('2글자 이상을 작성하면 에러메세지가 뜨지않는다.', async () => {
    const { user } = render(<Playlist />);
    const inputs = screen.getAllByRole('textbox');
    await user.type(inputs[0], 'ha');
    const alert = screen.queryByRole('alert');
    expect(alert).not.toBeInTheDocument();
  });
  test('에러메시지 떴다 사라지기', async () => {
    const { user } = render(<Playlist />);
    const inputs = screen.getAllByRole('textbox');
    await user.type(inputs[0], 'h');
    await user.tab();
    const alert = await screen.findByRole('alert');
    expect(alert).toBeInTheDocument();
    await user.click(inputs[0]);
    await user.type(inputs[0], 'haha');
    expect(alert).not.toBeInTheDocument();
  });

  // NOTE: form submitted despite required input
  // https://github.com/jsdom/jsdom/issues/2898
  test('아무것도 작성하지 않고 submit 하면 에러메세지가 뜬다.', async () => {
    const { user } = render(<Playlist />);

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();

    const inputs = screen.getAllByRole('textbox');
    await user.type(inputs[0], 'ha');
    await user.tab();

    // const btn = screen.getByText(/create/, { selector: 'button' });
    // await user.click(btn);

    // logRoles(inputs[0]);

    // const invalid = await screen.findByRole('alert');
    // expect(invalid).toBeInTheDocument();
  });
  test('reset 버튼이 잘 작동한다', async () => {
    const { user } = render(<Playlist />);
    const inputs = screen.getAllByRole('textbox');
    await user.type(inputs[0], 'ha');
    expect(inputs[0]).toHaveValue('ha');

    await user.click(screen.getByRole('button', { name: 'reset' }));

    expect(inputs[0]).toHaveValue('');
    expect(screen.queryByDisplayValue('ha')).not.toBeInTheDocument();
  });
});
