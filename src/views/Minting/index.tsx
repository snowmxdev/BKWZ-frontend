import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Zoom } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Skeleton } from "@material-ui/lab";
import { useWeb3Context } from "../../hooks";
import { IReduxState } from "../../store/slices/state.interface";
import { IPendingTxn, isPendingTxn, txnButtonText } from "../../store/slices/pending-txns-slice";
import { changeMint } from "../../store/slices/mint-thunk";
import { clearNfts, fetchNftDetails } from "src/store/slices/nfts-slice";
import "./Minting.scss";
import { dice, plus, minus } from "../../constants/img";

function Minting() {
    const dispatch = useDispatch();
    const { provider, address, connect, chainID, checkWrongNetwork } = useWeb3Context();

    const pendingTransactions = useSelector<IReduxState, IPendingTxn[]>(state => {
        return state.pendingTransactions;
    });

    const totalSupply = useSelector<IReduxState, number>(state => {
        return state.app.totalSupply;
    });

    const loading = useSelector<IReduxState, boolean>(state => {
        return state.app.loading;
    });

    const [value, setValue] = useState(1);
    const addValue = () => {
        setValue(value + 1);
    };
    const subValue = () => {
        if (value === 1) return;
        setValue(value - 1);
    };

    const onSeekApproval = async (token: string) => {
        if (await checkWrongNetwork()) return;

        // await dispatch(changeApproval({ address, token, provider, networkID: chainID }));
    };

    const onMint = async () => {
        if (await checkWrongNetwork()) return;
        await dispatch(changeMint({ address, value: String(value), provider, networkID: chainID }));
    };

    const StyledSkeleton = withStyles({
        root: {
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            height: "50px",
        },
    })(Skeleton);

    return (
        <section className="container-fluid minting" id="minting">
            <div className="content">
                <div className="container">
                    <Zoom in={true}>
                        <div className="tran-box">
                            <h2>
                                Start <span className="grad-txt">Minting</span>.
                            </h2>
                            <Grid container>
                                <Grid item xs={12} md={12} lg={4} className="m-auto">
                                    <div className="mint-box">
                                        <h5 style={{ padding: "0 1em" }}>Be the first to mint one our limited 1000 BKWZ Avatars.</h5>
                                        <br />
                                        <h5>
                                            Those are going to be displayed in the game as your avatars and by owning one of those, you will be able to stake and earn daily BKWZ
                                            Tokens at a stable rate.
                                        </h5>
                                        <br />
                                        <h5>Rarity chances are listed just below:</h5>
                                        <br />
                                        <h5 style={{ opacity: "0.9" }}>
                                            80% chance - <span style={{ fontWeight: "bolder" }}>Common</span>
                                        </h5>
                                        <h5 style={{ opacity: "0.9" }}>
                                            10% chance - <span style={{ color: "#FF0707", fontWeight: "bolder" }}>Rare</span>
                                        </h5>
                                        <h5 style={{ opacity: "0.9" }}>
                                            7% chance - <span style={{ color: "#FF9600", fontWeight: "bolder" }}>Unique</span>
                                        </h5>
                                        <h5 style={{ opacity: "0.9" }}>
                                            3% chance - <span style={{ color: "#F901FF", fontWeight: "bolder" }}>Legendary</span>
                                        </h5>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6} lg={4} className="m-auto">
                                    <div className="mint-box">
                                        <img src={dice} alt="dice" />
                                        <div className="bar"></div>
                                        <h5 style={{ opacity: "0.6" }}>Chance for a common: 80%</h5>
                                    </div>
                                    <div className="mint-box">
                                        {!loading ? <h4>Minted - {+totalSupply} / 1000</h4> : <Skeleton className="style-skeleton" height={50} width={"80%"} />}
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6} lg={4} className="m-auto">
                                    <div className="mint-box">
                                        <h4>Start Minting</h4>
                                        <div className="mint-value-set">
                                            <Grid container>
                                                <Grid item xs={3}></Grid>
                                                <Grid item xs={2}>
                                                    <img src={minus} alt="minus" onClick={subValue} />
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <h4>{value}</h4>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <img src={plus} alt="plus" onClick={addValue} />
                                                </Grid>
                                                <Grid item xs={3}></Grid>
                                            </Grid>
                                        </div>
                                        <h4>Cost {value / 2} AVAX</h4>
                                        <br />
                                        {!address && (
                                            <div className="connect-button" onClick={connect}>
                                                CONNECT WALLET
                                            </div>
                                        )}
                                        {address && (
                                            <div
                                                className="connect-button"
                                                onClick={() => {
                                                    if (isPendingTxn(pendingTransactions, "minting")) return;
                                                    onMint();
                                                }}
                                            >
                                                {txnButtonText(pendingTransactions, "minting", "Mint")}
                                            </div>
                                        )}
                                        {/* <div className="connect-button" onClick={onMint}>COMING SOON</div> */}
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Zoom>
                    <Zoom in={true}>
                        <div className="row tran-box" style={{ padding: "10em 0" }}>
                            <h4>Demo Game</h4>
                        </div>
                    </Zoom>
                </div>
            </div>
        </section>
    );
}

export default Minting;
