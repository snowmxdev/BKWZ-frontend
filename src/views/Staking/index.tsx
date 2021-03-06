import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Switch from "@material-ui/core/Switch";
import { styled } from "@material-ui/core/styles";
import { Skeleton } from "@material-ui/lab";
import { Grid, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useWeb3Context } from "../../hooks";
import { IReduxState } from "../../store/slices/state.interface";
import { IAvatarData } from "src/store/slices/account-slice";
import { IPendingTxn, isPendingTxn, txnButtonText } from "../../store/slices/pending-txns-slice";
import NftStaking from "./NftStaking";
import CoinStaking from "./CoinStaking";
import "./Staking.scss";

const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    "& .MuiSwitch-track": {
        borderRadius: 22 / 2,
        "&:before, &:after": {
            content: '""',
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            width: 16,
            height: 16,
        },
        "&:before": {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                theme.palette.getContrastText(theme.palette.primary.main),
            )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
            left: 12,
        },
        "&:after": {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                theme.palette.getContrastText(theme.palette.primary.main),
            )}" d="M19,13H5V11H19V13Z" /></svg>')`,
            right: 12,
        },
    },
    "& .MuiSwitch-thumb": {
        boxShadow: "none",
        width: 16,
        height: 16,
        margin: 2,
    },
}));

function Staking() {
    const [nftStaking, setNftStaking] = useState(true);
    const onSwitch = () => {
        setNftStaking(!nftStaking);
    };

    const dispatch = useDispatch();
    const { provider, address, connect, chainID, checkWrongNetwork } = useWeb3Context();

    const pendingTransactions = useSelector<IReduxState, IPendingTxn[]>(state => {
        return state.pendingTransactions;
    });

    const accountLoading = useSelector<IReduxState, boolean>(state => {
        return state.account.loading;
    });

    let clickFunc: any = connect;

    return (
        <section className="container-fluid staking" id="staking">
            <div className="content">
                <div className="container">
                    {/* <Android12Switch defaultChecked /> */}
                    <div className="row switch-button" onClick={onSwitch}>
                        <div className={nftStaking ? "nft active" : "nft"}>NFT Staking</div>
                        <div className={nftStaking ? "coin" : "coin active"}>Coin Staking</div>
                    </div>
                    {nftStaking && address ? 
                      <NftStaking />
                    : 
                      address? 
                        <CoinStaking />
                      :
                        <div className="tran-box">
                            <div className="connect-button" onClick={clickFunc}>CONNECT WALLET</div>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}

export default Staking;
