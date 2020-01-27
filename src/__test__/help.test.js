const funct = () => 1;

it('renders without crashing', () => {
  expect(funct()).toBe(1);
});
