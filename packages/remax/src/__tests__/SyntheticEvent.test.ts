import { createCallbackProxy } from '../SyntheticEvent';

describe('synthetic event', () => {
  describe('stop propagation', () => {
    it('only accept onClick', () => {
      const ontap = () => {};
      const newOntap = createCallbackProxy('onClick', ontap);

      expect(ontap).not.toBe(newOntap);

      const catchTap = () => {};
      const newCatchTap = createCallbackProxy('catchClick', catchTap);

      expect(catchTap).toBe(newCatchTap);
    });

    it('works correctly', () => {
      const foo = jest.fn(e => {
        e.stopPropagation();
      });
      const fooProxy = createCallbackProxy('onClick', foo);
      const bar = jest.fn();
      const barProxy = createCallbackProxy('onClick', bar);

      fooProxy({
        target: {
          dataset: {
            rid: 10,
          },
        },
        currentTarget: {
          dataset: {
            rid: 10,
          },
        },
      });
      barProxy({
        target: {
          dataset: {
            rid: 10,
          },
        },
        currentTarget: {
          dataset: {
            rid: 11,
          },
        },
      });

      fooProxy({
        target: {
          dataset: {
            rid: 10,
          },
        },
        currentTarget: {
          dataset: {
            rid: 10,
          },
        },
      });
      barProxy({
        target: {
          dataset: {
            rid: 10,
          },
        },
        currentTarget: {
          dataset: {
            rid: 11,
          },
        },
      });

      expect(foo).toBeCalledTimes(2);
      expect(bar).not.toBeCalled();

      fooProxy({
        target: {
          dataset: {
            rid: 8,
          },
        },
        currentTarget: {
          dataset: {
            rid: 8,
          },
        },
      });
      barProxy({
        target: {
          dataset: {
            rid: 8,
          },
        },
        currentTarget: {
          dataset: {
            rid: 9,
          },
        },
      });

      expect(foo).toBeCalledTimes(3);
      expect(bar).not.toBeCalled();

      barProxy({
        target: {
          dataset: {
            rid: 6,
          },
        },
        currentTarget: {
          dataset: {
            rid: 6,
          },
        },
      });

      expect(bar).toBeCalledTimes(1);

      fooProxy({
        target: {
          dataset: {
            rid: 13,
          },
        },
        currentTarget: {
          dataset: {
            rid: 11,
          },
        },
      });

      barProxy({
        target: {
          dataset: {
            rid: 14,
          },
        },
        currentTarget: {
          dataset: {
            rid: 15,
          },
        },
      });

      expect(bar).toBeCalledTimes(2);
    });

    it('do not stop propagation when unexpected event happens', () => {
      const foo = jest.fn(e => {
        e.stopPropagation();
      });
      const fooProxy = createCallbackProxy('onClick', foo);
      const bar = jest.fn();
      const barProxy = createCallbackProxy('onClick', bar);

      fooProxy({
        target: {
          dataset: {
            rid: 999,
          },
        },
        currentTarget: {
          dataset: {
            rid: 1,
          },
        },
      });
      barProxy({
        target: {
          dataset: {
            rid: 999,
          },
        },
        currentTarget: {
          dataset: {
            rid: 2,
          },
        },
      });

      expect(foo).toBeCalledTimes(1);
      expect(bar).toBeCalledTimes(1);
    });

    it('do not support on the native component without event target', () => {
      const foo = jest.fn(e => {
        expect(e.stopPropagation).toBeUndefined();
      });
      const fooProxy = createCallbackProxy('onClick', foo);
      const bar = jest.fn(e => {
        expect(e.stopPropagation).toBeUndefined();
      });
      const barProxy = createCallbackProxy('onClick', bar);

      fooProxy({
        currentTarget: {
          dataset: {
            rid: 1,
          },
        },
      });
      barProxy({
        currentTarget: {
          dataset: {
            rid: 2,
          },
        },
      });
      expect(foo).toBeCalledTimes(1);
      expect(bar).toBeCalledTimes(1);
    });

    it('works correctly on alipay', () => {
      const foo = jest.fn(e => {
        e.stopPropagation();
      });
      const fooProxy = createCallbackProxy('onClick', foo);
      const bar = jest.fn();
      const barProxy = createCallbackProxy('onClick', bar);

      fooProxy({
        target: {
          dataset: {
            rid: 1,
          },
          targetDataset: {
            rid: 1,
          },
        },
      });
      barProxy({
        target: {
          dataset: {
            rid: 2,
          },
          targetDataset: {
            rid: 1,
          },
        },
      });

      fooProxy({
        target: {
          dataset: {
            rid: 1,
          },
          targetDataset: {
            rid: 1,
          },
        },
      });
      barProxy({
        target: {
          dataset: {
            rid: 2,
          },
          targetDataset: {
            rid: 1,
          },
        },
      });

      expect(foo).toBeCalledTimes(2);
      expect(bar).not.toBeCalled();

      fooProxy({
        target: {
          dataset: {
            rid: 1,
          },
          targetDataset: {
            rid: 1,
          },
        },
      });
      barProxy({
        target: {
          dataset: {
            rid: 2,
          },
          targetDataset: {
            rid: 1,
          },
        },
      });

      expect(foo).toBeCalledTimes(3);
      expect(bar).not.toBeCalled();

      barProxy({
        target: {
          dataset: {
            rid: 2,
          },
          targetDataset: {
            rid: 2,
          },
        },
      });

      expect(bar).toBeCalledTimes(1);

      fooProxy({
        target: {
          dataset: {
            rid: 5,
          },
          targetDataset: {
            rid: 6,
          },
        },
      });

      barProxy({
        target: {
          dataset: {
            rid: 8,
          },
          targetDataset: {
            rid: 7,
          },
        },
      });

      expect(bar).toBeCalledTimes(2);
    });
  });
});
