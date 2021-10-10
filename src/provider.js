import WalletConnectProvider from '@walletconnect/web3-provider';
import provider from 'eth-provider';

const wcProvider = new WalletConnectProvider({
  /**
   *  @const WalletConnectProvider
   *  Create WalletConnect Provider
   */
  rpc: {
    1: 'https://api.staging.sushirelay.com/v1',
  },
});

const fallbackProvider = provider(['https://api.staging.sushirelay.com/v1']);

fallbackProvider.enable = () => {
  window.ethereum = wcProvider;
  /**
   *  @const wcProvider
   *  Enable session (triggers QR Code modal)
   */
  return wcProvider.enable();
};

window.ethereum = fallbackProvider;
// window.ethereum =
