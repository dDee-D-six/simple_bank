import React, { useState, useContext } from "react";
const { ethereum } = window;
import './WalletCard.css';

const Input = ({ placeholder, name, type, value, handleChange }) => (
	<input
	  placeholder={placeholder}
	  type={type}
	  step="0.0001"
	  value={value}
	  onChange={(e) => handleChange(e, name)}
	  className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
	/>
  );

const WalletEther = () => {

	const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading} = useContext(TransactionContext);

	const handleSubmit = (e) => {
	  const { addressTo, amount, keyword, message } = formData;
  
	  e.preventDefault();
  
	  if (!addressTo || !amount || !keyword || !message) return;
  
	  sendTransaction();
	  console.log(sendTransaction());
	};
  
	const accountChangedHandler = (newAccount) => {
		  setDefaultAccount(newAccount);
		  getAccountBalance(newAccount.toString());
	  }
  
	  const chainChangedHandler = () => {
		  // reload the page to avoid any errors with chain change mid use of application
		  window.location.reload();
	  }
  
	  // listen for account changes
	  window.ethereum.on('accountsChanged', accountChangedHandler);
	  window.ethereum.on('chainChanged', chainChangedHandler);
  
	
    return (
		<div>
				<div className='walletCard'>
					<div>
						<button
						type="button"
						onClick={ handleSubmit }
						className="flex flex-row justify-center items-center my-5 bg-[#916666] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
						>
							Deposit
						</button>
						<div>
						<input 
                        placeholder="Amount (ETH)" 
                        name="Deposit_amount" 
                        type="number" 
                        step="0.0001" 
                        value={val}
                        onChange={ (e) => setVal(e.target.value) } />
						</div>
					</div>
				</div>
		</div>
	);
}
export default WalletEther;