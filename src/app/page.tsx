'use client';
import { RootState } from '@/store';
import { decrease, increase } from '@/store/features/test/counter';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center  p-8 pb-20 gap-16">
      <button style={{ fontSize: '40px' }} onClick={() => dispatch(increase())}>
        +
      </button>
      <p style={{ fontSize: '40px' }}>{count}</p>
      <button style={{ fontSize: '40px' }} onClick={() => dispatch(decrease())}>
        -
      </button>
    </div>
  );
}
