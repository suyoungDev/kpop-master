import { logRoles } from '@testing-library/react';
import React from 'react';
import { cleanup, render, screen } from 'test-utils';
import TagInputs from './index';

afterEach(() => cleanup());

describe('tag inputs', () => {
  test('처음에 input에 포커스가 간다', () => {
    render(<TagInputs />);
    expect(screen.getByRole('textbox')).toHaveFocus();
  });
  test('enter를 치면 태그가 만들어진다', async () => {
    const { user } = render(<TagInputs />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'haha');

    expect(input).toHaveDisplayValue('haha');

    await user.type(input, '{enter}');
    expect(await screen.findByRole('note')).toHaveTextContent('haha');
    expect(input).toHaveValue('');
  });
  test(', 를 쓰면 태그가 만들어진다', async () => {
    const { user } = render(<TagInputs />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'haha[Comma]');

    expect(await screen.findByRole('note')).toHaveTextContent('haha');
    expect(input).toHaveValue('');
  });
  test('안녕,하세요,웰컴,웁스, 라고 작성시 태그가 4개가 만들어진다.', async () => {
    const { user } = render(<TagInputs />);
    const input = screen.getByRole('textbox');
    await user.type(input, '안녕[Comma]하세요[Comma]웰컴[Comma]웁스[Comma]');
    const tags = await screen.findAllByRole('note');

    expect(tags).toHaveLength(4);
    expect(tags[0]).toHaveAccessibleName('안녕');
    expect(tags[0]).toMatchSnapshot();
    expect(tags[3]).toHaveAccessibleName('웁스');
  });
  test('arrow up을 하면 이전에 작성한 태그가 input에 렌더링이 된다.', async () => {
    const { user } = render(<TagInputs />);
    const input = screen.getByRole('textbox');
    await user.type(input, '안녕[Comma]하세요[Comma]웰컴[Comma]웁스[Comma]');

    expect(input).toHaveValue('');

    await user.type(input, '[ArrowUp]');
    expect(input).toHaveValue('웁스');
  });
  test('안녕,안녕,안녕, 을 작성하면 태그가 1개만 만들어진다', async () => {
    const { user } = render(<TagInputs />);
    const input = screen.getByRole('textbox');
    await user.type(input, '안녕[Comma]안녕[Comma]안녕[Comma]');
    const note = screen.getByRole('note');
    expect(note).toBeInTheDocument();
    expect(note).toHaveTextContent('안녕');
    expect(note).not.toHaveTextContent(',');
  });
  test('arrow up을 많이해도 제일 처음 작성한 것까지만 올라가진다', async () => {
    const { user } = render(<TagInputs />);
    const input = screen.getByRole('textbox');
    await user.type(input, '안녕[Comma]하세요[Comma]웰컴[Comma]웁스[Comma]');

    expect(input).toHaveValue('');
    await user.type(input, '{ArrowUp>10/}');
    expect(input).toHaveValue('안녕');
  });
  test('arrow Down을 많이해도 제일 마지막에 작성한 것까지만 올라가진다', async () => {
    const { user } = render(<TagInputs />);
    const input = screen.getByRole('textbox');
    await user.type(input, '안녕[Comma]하세요[Comma]웰컴[Comma]웁스[Comma]');

    expect(input).toHaveValue('');
    await user.type(input, '{ArrowUp>10/}');
    expect(input).toHaveValue('안녕');
    await user.type(input, '{ArrowDown/}');
    expect(input).toHaveValue('하세요');
    await user.type(input, '{ArrowDown>20/}');
    expect(input).toHaveValue('웁스');
  });
  test('삭제하면 갯수가 줄어들고, 방향키도 원하는대로 움직인다.', async () => {
    const { user } = render(<TagInputs />);
    const input = screen.getByRole('textbox');
    await user.type(input, '안녕[Comma]하세요[Comma]웰컴[Comma]웁스[Comma]');

    const tags = await screen.findAllByRole('note');
    expect(tags).toHaveLength(4);
    const buttons = await screen.findAllByRole('button');
    await user.click(buttons[3]);

    const nowTags = await screen.findAllByRole('note');
    expect(nowTags).toHaveLength(3);

    await user.type(input, '[ArrowUp]');
    expect(input).toHaveValue('웰컴');
    await user.type(input, '[ArrowUp]');
    expect(input).toHaveValue('하세요');
    await user.type(input, '[ArrowDown]');
    expect(input).toHaveValue('웰컴');
  });
});
