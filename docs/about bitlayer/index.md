# Bitlayer

## Technical Architecture

![analog](img/bitlayer roadmap.png)

Bitlayer's solution synthesizes the technical characteristics of BitVM, DLC|BitVM, and various XVMs (such as EVM, MoveVM), addressing three major challenges: Layer 1 verification, asset bridging, and enriching state transition expressions.

From an architectural standpoint, Bitlayer is a fairly typical example of a Rollup-equivalent model. To adapt to Bitcoin's unique programming model, BitVM has been introduced as a component for state challenges. Additionally, DLC|BitVM has been incorporated as a cross-chain component for messaging/assets, and the sequencer component's XVM, in theory, can support any Turing-complete programming language.

The security of bridge assets has always been a key for Layer 2 solutions, with the core issue being the method of asset control. The most common industry approach is for Layer 2 platform operators to set up multi-signature accounts based on MPC-TSS (Multi-Party Computation - Threshold Signature Scheme) or Schnorr technology, into which users transfer their assets. 

This traditional approach results in users completely losing control of their assets, while the platform's multi-signature management capabilities can impact the security of those assets. In the wake of certain extreme cases, users have become dissatisfied with these types of multi-signature solutions. Models like DLC|BitVM that encompass two-party game scenarios may be a better direction. Leveraging DLC|BitVM technology, users could retain partial control over their assets and potentially achieve a secure escape with their assets.

The verification of Layer 2 state transitions operates on a principle comparable to proving one's innocence—an inherently secure process. Theoretically, the choice of network used for state verification determines the security level of the Layer 2 network. As one of the most secure networks available, using Bitcoin's base layer for verification enables Bitlayer to inherit Bitcoin's robust security measures, achieving an equivalent level of security to Bitcoin itself. The introduction of the BitVM paradigm challenges the conventional view that complex computations cannot be performed on Bitcoin, offering a new pathway for executing Layer 2 state verifications on the Bitcoin network.

In terms of Layer 1 verification, autonomous asset escape, secure asset bridging, and EVM compatibility, Bitlayer exhibits superior performance compared to existing Bitcoin Layer 2 solutions such as Lightning Network and Stacks.

## Roadmap
The vision of Bitlayer will be realized through the rollout of a mainnet in multiple stages, with each phase designed to enhance the user experience and bolster security through cryptographic proof of Bitcoin consensus and onchain activity.

### First Stage: Bitlayer Mainnet-V1
In this initial phase, Bitlayer will support the cross-chain movement of BTC/BRC-20 assets between the Bitcoin mainnet and Bitlayer, and other mainstream assets, thereby enriching the overall value of the Bitlayer ecosystem.

During this stage, we will prioritize offering a 100% EVM-compatible development kit and ecosystem support, enabling developers to quickly build, test, and deploy applications on Bitlayer. Solidity applications can be seamlessly migrated, providing early users with the benefits of low gas fees and an extensible Bitcoin framework.

### Second Stage: Bitlayer Mainnet-V2

In this phase, we plan to introduce a Sequencer+DA model, which, based on the DLC|BitVM technical protocol, secures user asset deposits and withdrawals. Additionally, utilizing multisig oracles for challenges and DLC-Attestors controlled by multisig for asset escape will be implemented.

By leveraging the vast network and security of Bitcoin, Bitlayer will continuously lead with the highest security standards, offering users enhanced flexibility and an improved onchain experience through network upgrades.

### Third Stage: Bitlayer Mainnet V3
In this phase, our aim is to implement OP challenges based on BitVM, along with decentralized DLC-Attestors for asset escape.
Upon the completion of this third stage, Bitlayer’s final mainnet will be fully deployed, achieving the network's original goals—Bitcoin-equivalent security combined with Turing completeness. 

This version is set to elevate the security standards of Bitcoin Layer 2 to an unprecedented level.

## Use Case Ideas
- Decentralized Bitcoin interest (convert staking rewards of other tokens to Bitcoin)
- Zap money (fast, micro-transfers)
- Account abstraction for BTC wallets
- Advanced BTC NFTs with secure swaps
- Bridge
  - Bridging assets to Bitcoin as BRC20s or
  - Bridging BRC20 from Bitcoin to other ecosystems
- Ordinals marketplace
- Bitlayer-scriptions
- AI & Bitcoin integrations
- ZK Rust smart contracts
- BTC DEXes, lending & derivatives
- BTC-backed stablecoins
- Tokenized mining & hashrate markets
- DAOs & BTC treasuries
- Gamefi incorporating btc as in-dapp currency
- socialFi, build a Farcaster frame or something with Nostr
- BTC for autonomous agents
- BTC for DA & checkpoints for L2 chainsﬁ