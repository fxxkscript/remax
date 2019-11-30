import * as React from 'react';
import './helpers/setupGlobals';
import { render, View } from '../../../src/adapters/alipay';
import { reset as resetInstanceId } from '../../instanceId';
import { reset as resetActionId } from '../../actionId';
import Container from '../../Container';

const p = {
  // eslint-disable-next-line
  setData() {},
  // eslint-disable-next-line
  $spliceData() {},
};

describe('alipay', () => {
  describe('remax render', () => {
    afterEach(() => {
      resetActionId();
      resetInstanceId();
    });

    it('render correctly', () => {
      const Page = () => <View className="foo">hello</View>;
      const container = new Container(p);
      render(<Page />, container);
      expect(container.root).toMatchSnapshot();
    });

    it('insert new element', () => {
      class Page extends React.Component {
        state = {
          list: [1, 3],
        };

        update() {
          this.setState({
            list: [1, 2, 3],
          });
        }

        render() {
          const { list } = this.state;
          return (
            <View>
              {list.map(i => (
                <View key={i}>{i}</View>
              ))}
            </View>
          );
        }
      }

      const container = new Container(p);
      const page = React.createRef<any>();
      render(<Page ref={page} />, container);
      expect(container.root).toMatchSnapshot();
      page.current.update();
      expect(container.root).toMatchSnapshot();
    });

    it('umount component', () => {
      class Page extends React.Component {
        state = {
          show: true,
        };

        hide() {
          this.setState({ show: false });
        }

        render() {
          return <View>{this.state.show && <View>foo</View>}</View>;
        }
      }
      const container = new Container(p);
      const page = React.createRef<any>();
      render(<Page ref={page} />, container);
      expect(container.root).toMatchSnapshot();
      page.current.hide();
      expect(container.root).toMatchSnapshot();
    });

    it('renders style', () => {
      const Page = () => (
        <View style={{ width: '100px', height: '100px' }}>hello</View>
      );
      const container = new Container(p);
      render(<Page />, container);
      expect(container.root).toMatchSnapshot();
    });

    it('renders vendor prefix style', () => {
      const Page = () => (
        <View style={{ WebkitLineClamp: 2, height: '100px' }}>hello</View>
      );
      const container = new Container(p);
      render(<Page />, container);
      expect(container.root).toMatchSnapshot();
    });

    it('renders empty style', () => {
      const Page = () => <View style={undefined}>hello</View>;
      const container = new Container(p);
      render(<Page />, container);
      expect(container.root).toMatchSnapshot();
    });

    it('renders conditional fragment correctly', () => {
      class Page extends React.Component {
        state = {
          show: false,
        };

        show() {
          this.setState({ show: true });
        }

        render() {
          if (this.state.show) {
            return <View>foo</View>;
          }

          return (
            <>
              <View>one</View>
              <View>two</View>
            </>
          );
        }
      }
      const container = new Container(p);
      const page = React.createRef<any>();
      render(<Page ref={page} />, container);
      expect(container.root).toMatchSnapshot();
      page.current.show();
      expect(container.root).toMatchSnapshot();
    });

    it('render native component correctly', () => {
      const NativeComponent = ({ fooBar, onClick, className }: any) =>
        React.createElement('native-component', {
          fooBar,
          className,
          onClick,
        });
      const actions: any = [];
      const p = {
        setData: ({ action }: any) => actions.push(action),
        $spliceData: ({ action }: any) => actions.push(action),
      };

      const container = new Container(p);
      render(
        <NativeComponent
          fooBar="fooBar"
          onClick={() => {}}
          className="class"
        />,
        container
      );

      expect(actions).toMatchSnapshot();
    });
  });

  it('create proxy for onClick callback', () => {
    const view = React.createRef<any>();
    const handleClick = () => {};
    const handleAnimationStart = () => {};
    class Page extends React.Component {
      render() {
        return (
          <View
            ref={view}
            onClick={handleClick}
            onAnimationStart={handleAnimationStart}
          />
        );
      }
    }
    const container = new Container(p);
    render(<Page />, container);

    function findFn(name: string) {
      const fnKeys = Object.keys(view.current.container.context);
      const fnKey = fnKeys.find(key => key.indexOf(name) !== -1) || '';
      return view.current.container.context[fnKey];
    }

    const newHandleClick = findFn('onTap');
    const newHandleAnimationStart = findFn('onAnimationStart');

    expect(newHandleClick).not.toBe(handleClick);
    expect(newHandleAnimationStart).toBe(handleAnimationStart);
  });

  fit('useEffect works', () => {
    const cb = jest.fn();
    const Page = () => {
      React.useEffect(cb);

      return <View>app</View>;
    };
    const container = new Container(p);
    render(<Page />, container);
  });
});
