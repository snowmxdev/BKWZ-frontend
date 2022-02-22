import React from 'react';
import './Welcome.scss';
import diceImage from '../../assets/DiceGroup.png';
import signLogo from '../../assets/BWKZ_signlogo.png';
import dice from '../../assets/DICE4.png';
import ped from '../../assets/ped.png';
import sam from '../../assets/Sam.png';

const Welcome = () => {
  return (
    <section className='container-fluid welcome' id='welcome'>
      <div className='content'>
      <div className='container'>
        <div className='intro'>
          <h1>A BOARD GAME</h1>
          <h1>BUILT ON THE AVALANCHE BLOCKCHAIN.</h1>
          <h2>Play Blockways, earn BKWZ tokens.</h2>
          <p>Whitelist our Avatars NFT’s drop just below. Limited to 1000.</p>
          <p>By staking the NFT, you will earn BKWZ Tokens daily!</p>
          <div className='whitelist-button'>Whitelist</div>
          
          <div className='dice-group'>
            <img src={diceImage}></img>
          </div>
        </div>
        </div>
        <div className='mission'>
          <h2>Our <h className='grad-txt'>mission.</h></h2>
          <div className='row px-5'>
            <div className='col-12 col-lg-4'>
              <div className='mission-item'>
                <h2>Wealthy</h2>
                <div className='line'></div>
                <p>Building wealth should be a thrilling experience!</p> 
                <p>We're bringing our board game to the Blockchain and letting people build their empire whilst having fun!</p>
              </div>
            </div>
            <div className='col-12 col-lg-4'>
              <div className='mission-item '>
                <h2>Gaming</h2>
                <p className='line'></p>
                <p>We LOVE games.</p>
                <br/>
                <p>Our misssion is to bring you easily accesible, easy to pick up - hard to master games that you remember for a lifetime!</p>
              </div>
            </div>
            <div className='col-12 col-lg-4'>
              <div className='mission-item'>
                <h2>Community</h2>
                <div className='line'></div>
                <p>We want you to feel a part of Blockways.</p>
                <p>We care about our community and want to build healthy and positive relations. and unblock each others way.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='adventure'>
          <h2>How do you begin your <h className='grad-txt'>adventure</h>? </h2>
          <hr className='m-4'></hr>
          <div className='row'>
            <div className='col-2'>
              <img src={signLogo}></img>
            </div>
            <div className='col-8 text-start m-auto'>
              <h2 className='grad-txt'>Buy $BKWZ.</h2>
              <h4>The currency of Blockways</h4>
              <p>BKWZ Token is the in-game currency and your “entry ticket” to the game.<br/> Buy it from the market or buy it at a discount on the dApp against listed tokens</p>
            </div>
            <div className='col-2'>
            </div>
          </div>
          <div className='row'>
            <div className='col-2'>
            </div>
            <div className='col-8 text-end m-auto'>
              <h2 className='grad-txt'>Mint Avatars.</h2>
              <h4>Our avatars combine everything that is beautiful about NFT’s.</h4>
              <p>Each BKWZ Avatar will provide yield on daily basis. You can claim the <br/>rewards at any time or trade your unique BKWZ Avatar on the marketplace.</p>
            </div>
            <div className='col-2'>
              <img src={dice}></img>
            </div>
          </div>
          <div className='row'>
            <div className='col-2'>
              <img src={ped}></img>
            </div>
            <div className='col-8 text-start m-auto'>
              <h2 className='grad-txt'>Play & Earn.</h2>
              <h4>Earning whilst genuinely having fun!</h4>
              <p>Use your imagination, come up with the best strategy and become the best at <br/> blocking your opponents way! </p>
            </div>
            <div className='col-2'>
            </div>
          </div>
        </div>
        <div className='team'>
          <h2>Meet our <h className='grad-txt'>team</h>.</h2>
          <div className='row px-5'>
            <div className='team-item col-lg-3'>
              <img src={sam}></img>
              <h4>Sam</h4>
              <p>Project Director</p>
            </div>
            <div className='team-item col-lg-3'>
              <img src={sam}></img>
              <h4>Greg</h4>
              <p>Designer</p>
            </div>
            <div className='team-item col-lg-3'>
              <img src={sam}></img>
              <h4>Mike</h4>
              <p>Game Dev</p>
            </div>
            <div className='team-item col-lg-3'>
              <img src={sam}></img>
              <h4>Matt</h4>
              <p>Blockchain Dev</p>
            </div>
          </div>
        </div>
        <div className='roadmap'>
          <h2>Look at us <h className='grad-txt'>evolve</h>.</h2>
          <div className='row px-5'>
            <div className='roadmap-item col-lg-3'>
              <div>PHASE 1  -  Q1</div>
              <h4>Website Launch</h4>
              <h4>NFT Presale</h4>
              <h4>NFT Public Sale</h4>
              <h4>NFT Staking</h4>
              <h4>Closed Game Beta</h4>
            </div>
            <div className='roadmap-item col-lg-3'>
              <div>PHASE 2  -  Q2</div>
              <h4>Open Game Beta</h4>
              <h4>Token Release </h4>
              <h4>Token Staking</h4>
              <h4>Public Game Release</h4>
            </div>
            <div className='roadmap-item col-lg-3'>
              <div>PHASE 3  -  Q3</div>
              <h4>Leaderboards</h4>
              <h4>Daily Tasks </h4>
              <h4>New Game Modes</h4>
              <h4>In-Game NFT’s</h4>
            </div>
            <div className='roadmap-item col-lg-3'>
              <div>PHASE 4  -  Q4</div>
              <h4>To be announced</h4>
            </div>
          </div>
        </div>
        <div>
          <div className='row'>
            <div className='col-12 col-lg-4'></div>
            <div className='col-12 col-lg-4 buy'>
              <h2>Buy <h className='grad-txt'>$BKWZ</h>.</h2>
              <div>Buy on TraderJoe</div>
              <p>Comming soon!</p>
            </div>
            <div className='col-12 col-lg-4'></div>
          </div>
        </div>
        <div className='address'>
          <div className='row'>
            <div className='col-1'>
              <img src={signLogo} alt="logo" />
            </div>
            <div className='col-11'>
              <p>Token Contract address: 0xab5231d197AC42123d346f4EB70C703F308D1E0x234</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-1'>
                <img src={dice} alt="logo" />
              </div>
              <div className='col-11'>
                <p>Avatar Contract address: 0x8927985B358692815E18F2138964679DcA231fds5ds3</p>
              </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Welcome;