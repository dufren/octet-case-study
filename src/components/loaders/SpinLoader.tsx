import { TailSpin } from 'react-loader-spinner';

function SpinLoader() {
  return (
    <div>
      <TailSpin
        visible={true}
        height="40"
        width="40"
        color="#3b82f6"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
        wrapperClass=""
      />
    </div>
  );
}

export default SpinLoader;
