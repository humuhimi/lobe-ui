import { useResponsive } from 'antd-style';
import { LevaPanel } from 'leva';
import { memo } from 'react';

import { DivProps } from '@/types';

import DraggablePanel from '../DraggablePanel';
import { useStyles } from './style';

export interface StoryBookProps extends DivProps {
  /**
   * @description The Leva store instance to be used by the component
   * @type levaStore
   */
  levaStore: any;
  /**
   * @description If use padding around component
   */
  noPadding?: boolean;
}

export const StoryBook = memo<StoryBookProps>(
  ({ levaStore, noPadding, className, children, ...rest }) => {
    const { mobile } = useResponsive();
    const { styles, cx } = useStyles(Boolean(noPadding));

    return (
      <div className={cx(styles.editor, className)} {...rest}>
        <div className={styles.left}>{children}</div>
        <DraggablePanel
          className={styles.right}
          minWidth={280}
          placement={mobile ? 'bottom' : 'right'}
        >
          <div className={styles.leva}>
            <LevaPanel fill flat store={levaStore} titleBar={false} />{' '}
          </div>
        </DraggablePanel>
      </div>
    );
  },
);

export default StoryBook;

export { useControls, useCreateStore } from 'leva';
