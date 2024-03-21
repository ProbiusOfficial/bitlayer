# Compile and Run

## Download
Download source code via `git`
```
git clone https://github.com/bitlayer-org/bitlayer-l2.git
```
## Install Golang
Reference: [Go Download and install](https://golang.org/doc/install)

## Compile
```
cd /path/to/bitlayer-l2
make geth
```

Compilation is completed, the generated binary is in the folder `build/bin`.

## Run
By running `./build/bin/geth --help`, we can get all `option` info. Specific usage can refer to [Command-line Options](https://geth.ethereum.org/docs/interface/command-line-options). Besides, it has a custom option as below,
```
--traceaction value     (default: 0) 
    Trace internal tx call/create/suicide action, 0=no trace, 1=trace only native token > 0, 2=trace all
```
traceaction option can enable/disable [the custom json-rpc methods](./json-rpc.md)

## Deployment

Deployment
- [Hardware](https://docs.bitlayer.org/build/dev/deploy/#hardware)
  - [Mininum](https://docs.bitlayer.org/build/dev/deploy/#minimun)
  - [Recommended](https://docs.bitlayer.org/build/dev/deploy/#recommended)
  - [Network & Port](https://docs.bitlayer.org/build/dev/deploy/#networkport)
- [Chain Node](https://docs.bitlayer.org/build/dev/deploy/#chain-node)
- [Start Bash](https://docs.bitlayer.org/build/dev/deploy/#start-bash)

