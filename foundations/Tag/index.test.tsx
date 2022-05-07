import { cleanup, render, screen } from 'test-utils';
import Tag from './index';

afterEach(() => cleanup());

describe('Tag', () => {
  test('label on screen', async () => {
    const deleteTag = jest.fn();
    const { user } = render(<Tag label="label" deleteTag={deleteTag} />);

    expect(screen.getByText('label')).toBeInTheDocument();
    await user.click(screen.getByRole('button'));
    expect(deleteTag).toHaveBeenCalledTimes(1);
  });
});
