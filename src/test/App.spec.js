import App from '../components/App';
import { shallow } from 'enzyme';

describe('Stream', () => {

  it('displays "Welcome to Simple React Redux Starter."', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.text()).to.equal("Welcome to Simple React Redux Starter.");
  });

});
