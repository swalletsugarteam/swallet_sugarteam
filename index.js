// Фронтенд
const startPage = document.querySelector("#startPage");
const createWalletPage = document.querySelector("#createWalletPage");
const sercretPhrasePage = document.querySelector("#sercretPhrasePage");
const pinPage = document.querySelector("#pin");
const mainPage = document.querySelector("#main");
const swapPage = document.querySelector("#swap");
const privateKeyPage = document.querySelector("#privateKey");
const secretPhraseShowPage = document.querySelector("#secretPhraseShow");
const settingsPage = document.querySelector("#settings");
const sendPage = document.querySelector("#sendPage");
const successfulTransactionPage = document.querySelector("#successfulTransaction");
const coinBalancePage = document.querySelector(".coinBalancePage");
const receivePage = document.querySelector("#receivePage")

document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.querySelector(".preloader");
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add("hidden");
        }, 500);
    }
});

if (startPage) {
    document.getElementById('agreeCheckbox').addEventListener('change', function() {
        const isChecked = this.checked;
        const createWalletBtn = document.getElementById('createWalletBtn');
        const importWalletBtn = document.getElementById('importWalletBtn');
    
        if (isChecked) {
            createWalletBtn.classList.remove('disabled');
            importWalletBtn.classList.remove('disabled');
        } else {
            createWalletBtn.classList.add('disabled');
            importWalletBtn.classList.add('disabled');
        }
    });

    const overlay = document.querySelector('.disclaimer__overlay');
    const content1 = document.querySelector('.logo');
    const content2 = document.querySelector('.header');
    const content3 = document.querySelector('.checkbox');
    const content4 = document.querySelector('.buttons');

    document.getElementById('openDisclaimerBtn').addEventListener('click', () => {
        overlay.classList.add("active");
        content1.classList.add("hidden");
        content2.classList.add("hidden");
        content3.classList.add("hidden");
        content4.classList.add("hidden");
    });

    document.getElementById('closeDisclaimerBtn').addEventListener('click', () => {
        overlay.classList.remove("active");
        content1.classList.remove("hidden");
        content2.classList.remove("hidden");
        content3.classList.remove("hidden");
        content4.classList.remove("hidden");
    });

}

if (mainPage) {
    document.addEventListener('DOMContentLoaded', function() {
        const assetsBtn = document.getElementById('assetsBtn');
        const historyBtn = document.getElementById('historyBtn');
        const slider = document.getElementById('slider');
        const historyTab = document.querySelector('.history__tab');
        const assetsTab = document.querySelector(".assets");
    
        assetsBtn.addEventListener('click', () => {
            slider.style.transform = 'translateX(0)';
            assetsBtn.classList.add('active');
            assetsTab.classList.add('active');
            historyBtn.classList.remove('active');
            historyTab.classList.remove('active')
        });
    
        historyBtn.addEventListener('click', () => {
            slider.style.transform = 'translateX(100%)';
            assetsBtn.classList.remove('active');
            assetsTab.classList.remove('active');
            historyBtn.classList.add('active');
            historyTab.classList.add('active');
        });
    });
}

if (privateKeyPage) {
    document.getElementById('privateKeyCopy').addEventListener('click', function() {
        let privateKeyText = document.querySelector('.private_key_block p').innerHTML;
        privateKeyText = privateKeyText.replace(/<br>/g, '');

        const tempElement = document.createElement('textarea');
        tempElement.value = privateKeyText;
        document.body.appendChild(tempElement);
        tempElement.select();
        document.execCommand('copy');
        document.body.removeChild(tempElement);

        document.getElementById("privateKeyCopy").innerHTML = "Copied!"
        document.getElementById("privateKeyCopy").style.color = "#51df7b"
    });
}

if (mainPage) {
    document.getElementById('copy_wallet_id').addEventListener('click', function() {
        let walletIdText = document.querySelector('#wallet_id').innerHTML;

        const tempElement = document.createElement('textarea');
        tempElement.value = walletIdText;
        document.body.appendChild(tempElement);
        tempElement.select();
        document.execCommand('copy');
        document.body.removeChild(tempElement);

        document.getElementById("copy_wallet_id").innerHTML = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#7ccc79"/>
        </svg>`
        setTimeout(() => {
            document.getElementById("copy_wallet_id").innerHTML = `<img src="../assets/copy.png" alt="copy icon" width="24">`
        }, 2000);
    });
}

if (secretPhraseShowPage) {
    document.getElementById('privateKeyCopy').addEventListener('click', function() {
        const wordElements = document.querySelectorAll('.word span');
        const words = Array.from(wordElements).map(el => el.textContent).join(' ');
        const tempElement = document.createElement('textarea');
        tempElement.value = words;
        document.body.appendChild(tempElement);
        tempElement.select();
        document.execCommand('copy');
        document.body.removeChild(tempElement);
    
        document.getElementById("privateKeyCopy").innerHTML = "Copied!"
        document.getElementById("privateKeyCopy").style.color = "#51df7b"
    }); 
}

if (settingsPage) {
    const overlay = document.querySelector('.disclaimer__overlay');
    const content1 = document.querySelector('.assets');
    const content2 = document.querySelector('.bottom__menu');

    document.getElementById('openDisclaimerBtn').addEventListener('click', () => {
        overlay.classList.add("active")
        content1.classList.add("hidden")
        content2.classList.add("hidden")
    });

    document.getElementById('closeDisclaimerBtn').addEventListener('click', () => {
        overlay.classList.remove("active")
        content1.classList.remove("hidden")
        content2.classList.remove("hidden")
    });

    document.getElementById('supportButton').addEventListener('click', () => {
        window.location.href = 'https://t.me/swallet_support_bot';
    });

    document.getElementById('showPhraseButton').addEventListener('click', () => {
        window.location.href = 'https://swalletsugarteam.github.io/swallet_sugarteam/show_phrase/';
    });

    document.getElementById('showKeyButton').addEventListener('click', () => {
        window.location.href = 'https://swalletsugarteam.github.io/swallet_sugarteam/show_key/';
    });
}

if (startPage) {
    document.getElementById('agreeCheckbox').addEventListener('change', function() {
        const isChecked = this.checked;
        const createWalletBtn = document.getElementById('createWalletBtn');
        const importWalletBtn = document.getElementById('importWalletBtn');
    
        if (isChecked) {
            createWalletBtn.classList.remove('disabled');
            importWalletBtn.classList.remove('disabled');
        } else {
            createWalletBtn.classList.add('disabled');
            importWalletBtn.classList.add('disabled');
        }
    });

    const overlay = document.querySelector('.disclaimer__overlay');
    const content1 = document.querySelector('.logo');
    const content2 = document.querySelector('.header');
    const content3 = document.querySelector('.checkbox');
    const content4 = document.querySelector('.buttons');

    document.getElementById('openDisclaimerBtn').addEventListener('click', () => {
        overlay.classList.add("active");
        content1.classList.add("hidden");
        content2.classList.add("hidden");
        content3.classList.add("hidden");
        content4.classList.add("hidden");
    });

    document.getElementById('closeDisclaimerBtn').addEventListener('click', () => {
        overlay.classList.remove("active");
        content1.classList.remove("hidden");
        content2.classList.remove("hidden");
        content3.classList.remove("hidden");
        content4.classList.remove("hidden");
    });
}

if (sendPage) {
    document.addEventListener('DOMContentLoaded', function() {
        const sendSumInput = document.getElementById('send_sum');
        const sendUsernameInput = document.getElementById('send_username');
        const sendButton = document.getElementById('sendButton');
    
        function toggleSendButton() {
            const isSendSumFilled = sendSumInput.value.trim() !== '';
            const isSendUsernameFilled = sendUsernameInput.value.trim() !== '';
    
            if (isSendSumFilled && isSendUsernameFilled) {
                sendButton.classList.remove('disabled');
            } else {
                sendButton.classList.add('disabled');
            }
        }
    
        sendSumInput.addEventListener('input', toggleSendButton);
        sendUsernameInput.addEventListener('input', toggleSendButton);
    });
    
    document.querySelectorAll('.select_currecy_popup .asset').forEach(asset => {
        asset.addEventListener('click', function() {
            const currencyName = this.getAttribute('data-crypto');
            const currencyImage = this.getAttribute('data-image');

            document.querySelector('.select_currecy_popup').classList.add('hidden');

            document.getElementById('swap-crypto-img').src = currencyImage;
            document.getElementById('swap-crypto-name').innerText = currencyName;
        });
    });

    document.querySelector("#from-card").addEventListener("click", () => {
        document.querySelector('.select_currecy_popup').classList.remove('hidden');
    });

    document.addEventListener("DOMContentLoaded", () => {
        const sendButton = document.getElementById("sendButton");
        const sendSumInput = document.getElementById("send_sum");
        const sendUsernameInput = document.getElementById("send_username");
        const sendError = document.getElementById("send_error");

        sendButton.addEventListener("click", async () => {
            const tg = window.Telegram.WebApp;
            const user = tg.initDataUnsafe.user;

            const user_id = user.id;
            const recipientUsername = sendUsernameInput.value;
            const amount = parseFloat(sendSumInput.value);
            const currency = document.getElementById("swap-crypto-name").textContent;

            if (!recipientUsername || !amount || amount <= 0) {
                sendError.textContent = "Please fill in all fields correctly.";
                sendError.classList.remove("hidden_err");
                return;
            }

            try {
                const response = await fetch('https://swallet-back.onrender.com/api/sendCrypto', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ user_id, recipientUsername, currency, amount })
                });
                console.log(response)

                const data = await response.json();

                if (response.ok) {
                    sendError.textContent = "Transaction successful!";
                    sendError.classList.remove("hidden_err");
                    sendError.classList.add("success_msg");
                    window.location.href = "https://swalletsugarteam.github.io/swallet_sugarteam/successful_transaction/"
                } else {
                    sendError.textContent = data.message || "Error sending crypto.";
                    sendError.classList.remove("hidden_err");
                }
            } catch (error) {
                sendError.textContent = "Error sending request.";
                sendError.classList.remove("hidden_err");
                console.log(error);
            }
        });
    });    
}

if (receivePage) {
    document.querySelectorAll('.select_currecy_popup .asset').forEach(asset => {
        asset.addEventListener('click', function() {
            const currencyImage = this.getAttribute('data-image');
            const currencyNameSmall = this.getAttribute('data-currency-name');

            document.querySelector('.select_currecy_popup').classList.add('hidden');

            document.getElementById('currency-image').src = currencyImage;
            document.getElementById('currency-name').innerText = this.getAttribute('data-crypto');
            document.getElementById('minimum_dep_text').innerText = this.getAttribute('data-minimum-dep');

            fetch(`https://swallet-back.onrender.com/api/getAddress/${currencyNameSmall}`)
                .then(response => response.json())
                .then(data => {
                    if (data.address) {
                        document.getElementById('wallet-address').innerText = data.address;
                    } else {
                        document.getElementById('wallet-address').innerText = 'Address not found';
                    }
                })
                .catch(error => {
                    document.getElementById('wallet-address').innerText = 'Error fetching address';
                });
        });
    });

    document.querySelector("#back").addEventListener('click', () => {
        document.querySelector(".select_currecy_popup").classList.remove("hidden")
    });

    document.getElementById('copyButton_address').addEventListener('click', function() {
        let addressText = document.querySelector('#wallet-address').innerHTML;
        addressText = addressText.replace(/<br>/g, '');

        const tempElement = document.createElement('textarea');
        tempElement.value = addressText;
        document.body.appendChild(tempElement);
        tempElement.select();
        document.execCommand('copy');
        document.body.removeChild(tempElement);

        document.getElementById("copyButton_address").innerHTML = "Copied!"
        document.getElementById("copyButton_address").style.color = "#51df7b"
        setTimeout(() => {
            document.getElementById("copyButton_address").innerHTML = "Copy"
        document.getElementById("copyButton_address").style.color = "#FFF"
        }, 2000);
    });
}

// Бекенд
function fetchData(apiUrl, successCallback, errorCallback) {
    fetch(apiUrl, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(successCallback)
    .catch(error => {
        console.error(`Error fetching data from ${apiUrl}:`, error);
        errorCallback(error);
    });
}


function formatPrice(price) {
    return price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function updatePrice(price, elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = price;
    }
}

// Получение и обновление цен на монеты
const prices = {
    BTC: "https://api.diadata.org/v1/assetQuotation/Bitcoin/0x0000000000000000000000000000000000000000",
    USDT: "https://api.diadata.org/v1/assetQuotation/Ethereum/0xdAC17F958D2ee523a2206206994597C13D831ec7",
    TRX: "https://api.diadata.org/v1/assetQuotation/Tron/0x0000000000000000000000000000000000000000",
    BNB: "https://api.diadata.org/v1/assetQuotation/BinanceSmartChain/0x0000000000000000000000000000000000000000",
    BCH: "https://api.diadata.org/v1/assetQuotation/BitcoinCash/0x0000000000000000000000000000000000000000",
    ETH: "https://api.diadata.org/v1/assetQuotation/Ethereum/0x0000000000000000000000000000000000000000",
    SOL: "https://api.diadata.org/v1/assetQuotation/Solana/0x0000000000000000000000000000000000000000",
    ATOM: "https://api.diadata.org/v1/assetQuotation/Cosmos/0x0000000000000000000000000000000000000000",
    BUSD: "https://api.diadata.org/v1/assetQuotation/BinanceSmartChain/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    LTC: "https://api.diadata.org/v1/assetQuotation/Litecoin/0x0000000000000000000000000000000000000000"
};

Object.keys(prices).forEach(key => {
    fetchData(prices[key],
        function(data) {
            const formattedPrice = formatPrice(data.Price);
            updatePrice(formattedPrice, key.toLowerCase() + "Price");
        },
        function(error) {
            console.error(`Failed to fetch ${key} price:`, error);
        }
    );
});

// Объявление телеграма
const tg = window.Telegram.WebApp;
const user = tg.initDataUnsafe.user;
const username = user.username;

// Отображение транзакций
async function fetchTransactions(username) {
    try {
        const response = await fetch(`https://swallet-back.onrender.com/api/transactions?username=${username}`);
        const transactions = await response.json();
        return transactions;
    } catch (error) {
        console.error('Error fetching transactions:', error);
    }
}

function formatAmount(amount) {
    return parseFloat(amount).toString();
}

function displayTransactions(transactions) {
    const historyTab = document.querySelector('.history__tab');
    historyTab.innerHTML = '';

    transactions.forEach((transaction) => {
        const isIncoming = transaction.recipient === username;
        const transactionClass = isIncoming ? 'incoming' : 'outcoming';
        const sign = isIncoming ? '+' : '-';
        const formattedAmount = formatAmount(transaction.amount);

        const transactionHTML = `
            <div class="transaction ${transactionClass}">
                <div class="transaction__left">
                    <h4>From: <span>${isIncoming ? transaction.sender : 'You'}</span></h4>
                    <h4><span>${transaction.time}</span></h4>
                    <h3 class="transaction__sum">${sign} ${formattedAmount} ${transaction.currency}</h3>
                </div>
                <div class="transaction__right">
                    <h4>To: <span>${isIncoming ? 'You' : transaction.recipient}</span></h4>
                </div>
            </div>
            <hr>
        `;
        historyTab.innerHTML += transactionHTML;
    });
}


if (mainPage) {
    document.addEventListener('DOMContentLoaded', async () => {
        const transactions = await fetchTransactions(username);
        if (transactions && transactions.length > 0) {
            displayTransactions(transactions);
        } else {
            document.querySelector('.history__tab').innerHTML = '<h3>History is empty</h3>';
        }
    });
}



// Логин и логаут
function updateStep(step) {
    fetch('https://swallet-back.onrender.com/api/updateStep', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_id: user.id, step })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

// Создание кошелька в бд
if (startPage) {
    document.querySelector("#createWalletBtn").addEventListener("click", () => {
        const user_id = user.id;
        const username = user.username;
        fetch('https://swallet-back.onrender.com/api/createWallet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user_id, username })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    });
}

if (startPage) {
    // Проверка, существует ли пользователь в базе данных
    fetch(`https://swallet-back.onrender.com/api/user/${user.id}`)
    .then(response => response.json())
    .then(userData => {
        if (userData.register_step === 1) {
            window.location.href = 'https://swalletsugarteam.github.io/swallet_sugarteam/main_page/';
        } else {
            // Если пользователь существует, но register_step не равен 1
            console.log('User exists but not at step 1.');
        }
    })
    .catch(error => {
        // Если ошибка говорит о том, что пользователь не найден, предложите зарегистрироваться
        if (error.message === 'User not found') {
            // Логика для регистрации нового пользователя
            console.log('User not found, prompt registration');
            // Здесь вы можете добавить код для регистрации нового пользователя
        } else {
            console.error('Error:', error);
        }
    });
}


if (settingsPage) {
    document.querySelector("#logout-button").addEventListener("click", () => {
        updateStep(0);
        window.location.href = 'https://swalletsugarteam.github.io/swallet_sugarteam/';
    });
}

// Создание пин кода, и сохранение его в базу
if (pinPage) {
    document.addEventListener('DOMContentLoaded', function() {
        const buttons = document.querySelectorAll('.kb_button:not(.none):not(.backspace)');
        const dots = document.querySelectorAll('.dot');
        const backspaceButton = document.querySelector('.kb_button.backspace');
        const header = document.getElementById('header');
        let activeIndex = 0;
        let firstPin = '';
        let secondPin = '';
        let isFirstPinEntered = false;

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                if (activeIndex < dots.length) {
                    dots[activeIndex].classList.add('active');
                    if (!isFirstPinEntered) {
                        firstPin += button.textContent;
                    } else {
                        secondPin += button.textContent;
                    }
                    activeIndex++;
                    if (activeIndex === dots.length) {
                        if (!isFirstPinEntered) {
                            header.textContent = 'Repeat the code';
                            setTimeout(() => {
                                dots.forEach(dot => dot.classList.remove('active'));
                                activeIndex = 0;
                                isFirstPinEntered = true;
                            }, 200);
                        } else {
                            if (firstPin === secondPin) {
                                fetch('https://swallet-back.onrender.com/api/updatePin', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({ user_id: user.id, pin: firstPin })
                                })
                                .then(response => response.json())
                                .then(data => {
                                    console.log(data);
                                    updateStep(1);
                                    window.location.href = 'https://swalletsugarteam.github.io/swallet_sugarteam/main_page/';
                                })
                                .catch(error => console.error('Error:', error));
                            } else {
                                header.textContent = 'Codes do not match';
                                setTimeout(() => {
                                    dots.forEach(dot => dot.classList.remove('active'));
                                    activeIndex = 0;
                                    firstPin = '';
                                    secondPin = '';
                                    isFirstPinEntered = false;
                                }, 200);
                            }
                        }
                    }
                }
            });
        });

        backspaceButton.addEventListener('click', () => {
            if (activeIndex > 0) {
                activeIndex--;
                dots[activeIndex].classList.remove('active');
                if (!isFirstPinEntered) {
                    firstPin = firstPin.slice(0, -1);
                } else {
                    secondPin = secondPin.slice(0, -1);
                }
            }
        });
    });
}

// Отображение данных пользователя
if (mainPage) {
    const prices = {
        btc: "https://api.diadata.org/v1/assetQuotation/Bitcoin/0x0000000000000000000000000000000000000000",
        usdt: "https://api.diadata.org/v1/assetQuotation/Ethereum/0xdAC17F958D2ee523a2206206994597C13D831ec7",
        trx: "https://api.diadata.org/v1/assetQuotation/Tron/0x0000000000000000000000000000000000000000",
        bnb: "https://api.diadata.org/v1/assetQuotation/BinanceSmartChain/0x0000000000000000000000000000000000000000",
        bch: "https://api.diadata.org/v1/assetQuotation/BitcoinCash/0x0000000000000000000000000000000000000000",
        eth: "https://api.diadata.org/v1/assetQuotation/Ethereum/0x0000000000000000000000000000000000000000",
        sol: "https://api.diadata.org/v1/assetQuotation/Solana/0x0000000000000000000000000000000000000000",
        atom: "https://api.diadata.org/v1/assetQuotation/Cosmos/0x0000000000000000000000000000000000000000",
        busd: "https://api.diadata.org/v1/assetQuotation/BinanceSmartChain/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
        ltc: "https://api.diadata.org/v1/assetQuotation/Litecoin/0x0000000000000000000000000000000000000000"
    };
    fetch(`https://swallet-back.onrender.com/api/user/${user.id}`)
    .then(response => response.json())
    .then(userData => {
        const wallet_id = userData.wallet_id;
        const wallet_id_elem = document.querySelector("#wallet_id");
        wallet_id_elem.textContent = wallet_id;
        })
    fetch(`https://swallet-back.onrender.com/api/user/${user.id}`)
        .then(response => response.json())
        .then(userData => {
            const balances = {
                btc: parseFloat(userData.btc_balance.$numberDecimal),
                usdt: parseFloat(userData.usdt_balance.$numberDecimal),
                trx: parseFloat(userData.trx_balance.$numberDecimal),
                bnb: parseFloat(userData.bnb_balance.$numberDecimal),
                bch: parseFloat(userData.bch_balance.$numberDecimal),
                eth: parseFloat(userData.eth_balance.$numberDecimal),
                sol: parseFloat(userData.sol_balance.$numberDecimal),
                atom: parseFloat(userData.atom_balance.$numberDecimal),
                busd: parseFloat(userData.busd_balance.$numberDecimal),
                ltc: parseFloat(userData.ltc_balance.$numberDecimal)
            };

            Object.keys(balances).forEach(key => {
                const element = document.getElementById('balance-' + key);
                if (element) {
                    element.innerHTML = balances[key].toFixed(5);
                }
            });

            const pricePromises = Object.keys(prices).map(key => 
                fetch(prices[key]).then(response => response.json())
            );

            Promise.all(pricePromises)
                .then(priceData => {
                    const pricesInUsd = priceData.reduce((acc, data, index) => {
                        const key = Object.keys(prices)[index];
                        acc[key] = data.Price;
                        return acc;
                    }, {});

                    const btcInUsd = balances.btc * pricesInUsd.btc;
                    const usdtInUsd = balances.usdt * pricesInUsd.usdt;
                    const trxInUsd = balances.trx * pricesInUsd.trx;
                    const bnbInUsd = balances.bnb * pricesInUsd.bnb;
                    const bchInUsd = balances.bch * pricesInUsd.bch;
                    const ethInUsd = balances.eth * pricesInUsd.eth;
                    const solInUsd = balances.sol * pricesInUsd.sol;
                    const atomInUsd = balances.atom * pricesInUsd.atom;
                    const busdInUsd = balances.busd * pricesInUsd.busd;
                    const ltcInUsd = balances.ltc * pricesInUsd.ltc;

                    document.getElementById('usd-btc-balance').innerHTML = btcInUsd.toFixed(2);
                    document.getElementById('usd-usdt-balance').innerHTML = usdtInUsd.toFixed(2);
                    document.getElementById('usd-trx-balance').innerHTML = trxInUsd.toFixed(2);
                    document.getElementById('usd-bnb-balance').innerHTML = bnbInUsd.toFixed(2);
                    document.getElementById('usd-bch-balance').innerHTML = bchInUsd.toFixed(2);
                    document.getElementById('usd-eth-balance').innerHTML = ethInUsd.toFixed(2);
                    document.getElementById('usd-sol-balance').innerHTML = solInUsd.toFixed(2);
                    document.getElementById('usd-atom-balance').innerHTML = atomInUsd.toFixed(2);
                    document.getElementById('usd-busd-balance').innerHTML = busdInUsd.toFixed(2);
                    document.getElementById('usd-ltc-balance').innerHTML = ltcInUsd.toFixed(2);

                    let TOTALBALANCE = btcInUsd + usdtInUsd + trxInUsd + bnbInUsd + bchInUsd + ethInUsd + solInUsd + busdInUsd + atomInUsd + ltcInUsd;
                    document.getElementById('totalBalance').innerHTML = TOTALBALANCE.toFixed(2);
                })
                .catch(error => console.error('Error fetching prices:', error));
        })
        .catch(error => console.error('Error fetching user data:', error));
    
    document.getElementById('refreshButton').addEventListener('click', () => {
        location.reload(true);
    });
}


if (coinBalancePage) {
    const prices = {
        btc: "https://api.diadata.org/v1/assetQuotation/Bitcoin/0x0000000000000000000000000000000000000000",
        usdt: "https://api.diadata.org/v1/assetQuotation/Ethereum/0xdAC17F958D2ee523a2206206994597C13D831ec7",
        trx: "https://api.diadata.org/v1/assetQuotation/Tron/0x0000000000000000000000000000000000000000",
        bnb: "https://api.diadata.org/v1/assetQuotation/BinanceSmartChain/0x0000000000000000000000000000000000000000",
        bch: "https://api.diadata.org/v1/assetQuotation/BitcoinCash/0x0000000000000000000000000000000000000000",
        eth: "https://api.diadata.org/v1/assetQuotation/Ethereum/0x0000000000000000000000000000000000000000",
        sol: "https://api.diadata.org/v1/assetQuotation/Solana/0x0000000000000000000000000000000000000000",
        atom: "https://api.diadata.org/v1/assetQuotation/Cosmos/0x0000000000000000000000000000000000000000",
        busd: "https://api.diadata.org/v1/assetQuotation/BinanceSmartChain/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
        ltc: "https://api.diadata.org/v1/assetQuotation/Litecoin/0x0000000000000000000000000000000000000000"
    };

    fetch(`https://swallet-back.onrender.com/api/user/${user.id}`)
        .then(response => response.json())
        .then(userData => {
            const balances = {
                btc: parseFloat(userData.btc_balance.$numberDecimal),
                usdt: parseFloat(userData.usdt_balance.$numberDecimal),
                trx: parseFloat(userData.trx_balance.$numberDecimal),
                bnb: parseFloat(userData.bnb_balance.$numberDecimal),
                bch: parseFloat(userData.bch_balance.$numberDecimal),
                eth: parseFloat(userData.eth_balance.$numberDecimal),
                sol: parseFloat(userData.sol_balance.$numberDecimal),
                atom: parseFloat(userData.atom_balance.$numberDecimal),
                busd: parseFloat(userData.busd_balance.$numberDecimal),
                ltc: parseFloat(userData.ltc_balance.$numberDecimal)
            };

            Object.keys(balances).forEach(key => {
                const element = document.getElementById('balance-' + key);
                if (element) {
                    element.innerHTML = balances[key].toFixed(5);
                }
            });

            const pricePromises = Object.keys(prices).map(key => 
                fetch(prices[key]).then(response => response.json())
            );

            Promise.all(pricePromises)
                .then(priceData => {
                    const pricesInUsd = priceData.reduce((acc, data, index) => {
                        const key = Object.keys(prices)[index];
                        acc[key] = data.Price;
                        return acc;
                    }, {});

                    const btcInUsd = balances.btc * pricesInUsd.btc;
                    const usdtInUsd = balances.usdt * pricesInUsd.usdt;
                    const trxInUsd = balances.trx * pricesInUsd.trx;
                    const bnbInUsd = balances.bnb * pricesInUsd.bnb;
                    const bchInUsd = balances.bch * pricesInUsd.bch;
                    const ethInUsd = balances.eth * pricesInUsd.eth;
                    const solInUsd = balances.sol * pricesInUsd.sol;
                    const atomInUsd = balances.atom * pricesInUsd.atom;
                    const busdInUsd = balances.busd * pricesInUsd.busd;
                    const ltcInUsd = balances.ltc * pricesInUsd.ltc;

                    const btcBalancePage = document.querySelector("#btc-wallet-page");
                    const usdtBalancePage = document.querySelector("#usdt-wallet-page");
                    const trxBalancePage = document.querySelector("#trx-wallet-page");
                    const bnbBalancePage = document.querySelector("#bnb-wallet-page");
                    const bchBalancePage = document.querySelector("#bch-wallet-page");
                    const ethBalancePage = document.querySelector("#eth-wallet-page");
                    const solBalancePage = document.querySelector("#sol-wallet-page");
                    const atomBalancePage = document.querySelector("#atom-wallet-page");
                    const busdBalancePage = document.querySelector("#busd-wallet-page");
                    const ltcBalancePage = document.querySelector("#ltc-wallet-page");

                    if (btcBalancePage) {
                        document.getElementById('usd-btc-balance').innerHTML = btcInUsd.toFixed(2);
                    }
                    if (usdtBalancePage) {
                        document.getElementById('usd-usdt-balance').innerHTML = usdtInUsd.toFixed(2);
                    }
                    if (trxBalancePage) {
                        document.getElementById('usd-trx-balance').innerHTML = trxInUsd.toFixed(2);
                    }
                    if (bnbBalancePage) {
                        document.getElementById('usd-bnb-balance').innerHTML = bnbInUsd.toFixed(2);
                    }
                    if (bchBalancePage) {
                        document.getElementById('usd-bch-balance').innerHTML = bchInUsd.toFixed(2);
                    }
                    if (ethBalancePage) {
                        document.getElementById('usd-eth-balance').innerHTML = ethInUsd.toFixed(2);
                    }
                    if (solBalancePage) {
                        document.getElementById('usd-sol-balance').innerHTML = solInUsd.toFixed(2);
                    }
                    if (atomBalancePage) {
                        document.getElementById('usd-atom-balance').innerHTML = atomInUsd.toFixed(2);
                    }
                    if (busdBalancePage) {
                        document.getElementById('usd-busd-balance').innerHTML = busdInUsd.toFixed(2);
                    }
                    if (ltcBalancePage) {
                        document.getElementById('usd-ltc-balance').innerHTML = ltcInUsd.toFixed(2);
                    } 
                })
                .catch(error => console.error('Error fetching prices:', error));
        })
        .catch(error => console.error('Error fetching user data:', error));
    
    document.getElementById('refreshButton').addEventListener('click', () => {
        location.reload(true);
    });
}


if (sendPage) {
    const prices = {
        btc: "https://api.diadata.org/v1/assetQuotation/Bitcoin/0x0000000000000000000000000000000000000000",
        usdt: "https://api.diadata.org/v1/assetQuotation/Ethereum/0xdAC17F958D2ee523a2206206994597C13D831ec7",
        trx: "https://api.diadata.org/v1/assetQuotation/Tron/0x0000000000000000000000000000000000000000",
        bnb: "https://api.diadata.org/v1/assetQuotation/BinanceSmartChain/0x0000000000000000000000000000000000000000",
        bch: "https://api.diadata.org/v1/assetQuotation/BitcoinCash/0x0000000000000000000000000000000000000000",
        eth: "https://api.diadata.org/v1/assetQuotation/Ethereum/0x0000000000000000000000000000000000000000",
        sol: "https://api.diadata.org/v1/assetQuotation/Solana/0x0000000000000000000000000000000000000000",
        atom: "https://api.diadata.org/v1/assetQuotation/Cosmos/0x0000000000000000000000000000000000000000",
        busd: "https://api.diadata.org/v1/assetQuotation/BinanceSmartChain/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
        ltc: "https://api.diadata.org/v1/assetQuotation/Litecoin/0x0000000000000000000000000000000000000000"
    };

    fetch(`https://swallet-back.onrender.com/api/user/${user.id}`)
        .then(response => response.json())
        .then(userData => {
            const balances = {
                btc: parseFloat(userData.btc_balance.$numberDecimal),
                usdt: parseFloat(userData.usdt_balance.$numberDecimal),
                trx: parseFloat(userData.trx_balance.$numberDecimal),
                bnb: parseFloat(userData.bnb_balance.$numberDecimal),
                bch: parseFloat(userData.bch_balance.$numberDecimal),
                eth: parseFloat(userData.eth_balance.$numberDecimal),
                sol: parseFloat(userData.sol_balance.$numberDecimal),
                atom: parseFloat(userData.atom_balance.$numberDecimal),
                busd: parseFloat(userData.busd_balance.$numberDecimal),
                ltc: parseFloat(userData.ltc_balance.$numberDecimal)
            };

            Object.keys(balances).forEach(key => {
                const element = document.getElementById('balance-' + key);
                if (element) {
                    element.innerHTML = balances[key];
                }
            });

            const pricePromises = Object.keys(prices).map(key => 
                fetch(prices[key]).then(response => response.json())
            );

            Promise.all(pricePromises)
                .then(priceData => {
                    const pricesInUsd = priceData.reduce((acc, data, index) => {
                        const key = Object.keys(prices)[index];
                        acc[key] = data.Price;
                        return acc;
                    }, {});

                    const btcInUsd = balances.btc * pricesInUsd.btc;
                    const usdtInUsd = balances.usdt * pricesInUsd.usdt;
                    const trxInUsd = balances.trx * pricesInUsd.trx;
                    const bnbInUsd = balances.bnb * pricesInUsd.bnb;
                    const bchInUsd = balances.bch * pricesInUsd.bch;
                    const ethInUsd = balances.eth * pricesInUsd.eth;
                    const solInUsd = balances.sol * pricesInUsd.sol;
                    const atomInUsd = balances.atom * pricesInUsd.atom;
                    const busdInUsd = balances.busd * pricesInUsd.busd;
                    const ltcInUsd = balances.ltc * pricesInUsd.ltc;

                    document.getElementById('usd-btc-balance').innerHTML = btcInUsd.toFixed(2);
                    document.getElementById('usd-usdt-balance').innerHTML = usdtInUsd.toFixed(2);
                    document.getElementById('usd-trx-balance').innerHTML = trxInUsd.toFixed(2);
                    document.getElementById('usd-bnb-balance').innerHTML = bnbInUsd.toFixed(2);
                    document.getElementById('usd-bch-balance').innerHTML = bchInUsd.toFixed(2);
                    document.getElementById('usd-eth-balance').innerHTML = ethInUsd.toFixed(2);
                    document.getElementById('usd-sol-balance').innerHTML = solInUsd.toFixed(2);
                    document.getElementById('usd-atom-balance').innerHTML = atomInUsd.toFixed(2);
                    document.getElementById('usd-busd-balance').innerHTML = busdInUsd.toFixed(2);
                    document.getElementById('usd-ltc-balance').innerHTML = ltcInUsd.toFixed(2);
                })
                .catch(error => console.error('Error fetching prices:', error));
        })
        .catch(error => console.error('Error fetching user data:', error));
}

if (receivePage) {
    const prices = {
        btc: "https://api.diadata.org/v1/assetQuotation/Bitcoin/0x0000000000000000000000000000000000000000",
        usdt: "https://api.diadata.org/v1/assetQuotation/Ethereum/0xdAC17F958D2ee523a2206206994597C13D831ec7",
        trx: "https://api.diadata.org/v1/assetQuotation/Tron/0x0000000000000000000000000000000000000000",
        bnb: "https://api.diadata.org/v1/assetQuotation/BinanceSmartChain/0x0000000000000000000000000000000000000000",
        bch: "https://api.diadata.org/v1/assetQuotation/BitcoinCash/0x0000000000000000000000000000000000000000",
        eth: "https://api.diadata.org/v1/assetQuotation/Ethereum/0x0000000000000000000000000000000000000000",
        sol: "https://api.diadata.org/v1/assetQuotation/Solana/0x0000000000000000000000000000000000000000",
        atom: "https://api.diadata.org/v1/assetQuotation/Cosmos/0x0000000000000000000000000000000000000000",
        busd: "https://api.diadata.org/v1/assetQuotation/BinanceSmartChain/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
        ltc: "https://api.diadata.org/v1/assetQuotation/Litecoin/0x0000000000000000000000000000000000000000"
    };

    fetch(`https://swallet-back.onrender.com/api/user/${user.id}`)
        .then(response => response.json())
        .then(userData => {
            const balances = {
                btc: parseFloat(userData.btc_balance.$numberDecimal),
                usdt: parseFloat(userData.usdt_balance.$numberDecimal),
                trx: parseFloat(userData.trx_balance.$numberDecimal),
                bnb: parseFloat(userData.bnb_balance.$numberDecimal),
                bch: parseFloat(userData.bch_balance.$numberDecimal),
                eth: parseFloat(userData.eth_balance.$numberDecimal),
                sol: parseFloat(userData.sol_balance.$numberDecimal),
                atom: parseFloat(userData.atom_balance.$numberDecimal),
                busd: parseFloat(userData.busd_balance.$numberDecimal),
                ltc: parseFloat(userData.ltc_balance.$numberDecimal)
            };

            Object.keys(balances).forEach(key => {
                const element = document.getElementById('balance-' + key);
                if (element) {
                    element.innerHTML = balances[key];
                }
            });

            const pricePromises = Object.keys(prices).map(key => 
                fetch(prices[key]).then(response => response.json())
            );

            Promise.all(pricePromises)
                .then(priceData => {
                    const pricesInUsd = priceData.reduce((acc, data, index) => {
                        const key = Object.keys(prices)[index];
                        acc[key] = data.Price;
                        return acc;
                    }, {});

                    const btcInUsd = balances.btc * pricesInUsd.btc;
                    const usdtInUsd = balances.usdt * pricesInUsd.usdt;
                    const trxInUsd = balances.trx * pricesInUsd.trx;
                    const bnbInUsd = balances.bnb * pricesInUsd.bnb;
                    const bchInUsd = balances.bch * pricesInUsd.bch;
                    const ethInUsd = balances.eth * pricesInUsd.eth;
                    const solInUsd = balances.sol * pricesInUsd.sol;
                    const atomInUsd = balances.atom * pricesInUsd.atom;
                    const busdInUsd = balances.busd * pricesInUsd.busd;
                    const ltcInUsd = balances.ltc * pricesInUsd.ltc;

                    document.getElementById('usd-btc-balance').innerHTML = btcInUsd.toFixed(2);
                    document.getElementById('usd-usdt-balance').innerHTML = usdtInUsd.toFixed(2);
                    document.getElementById('usd-trx-balance').innerHTML = trxInUsd.toFixed(2);
                    document.getElementById('usd-bnb-balance').innerHTML = bnbInUsd.toFixed(2);
                    document.getElementById('usd-bch-balance').innerHTML = bchInUsd.toFixed(2);
                    document.getElementById('usd-eth-balance').innerHTML = ethInUsd.toFixed(2);
                    document.getElementById('usd-sol-balance').innerHTML = solInUsd.toFixed(2);
                    document.getElementById('usd-atom-balance').innerHTML = atomInUsd.toFixed(2);
                    document.getElementById('usd-busd-balance').innerHTML = busdInUsd.toFixed(2);
                    document.getElementById('usd-ltc-balance').innerHTML = ltcInUsd.toFixed(2);

                    let TOTALBALANCE = btcInUsd + usdtInUsd + trxInUsd + bnbInUsd + bchInUsd + ethInUsd + solInUsd + busdInUsd + atomInUsd + ltcInUsd;
                    document.getElementById('totalBalance').innerHTML = TOTALBALANCE.toFixed(2);
                })
                .catch(error => console.error('Error fetching prices:', error));
        })
        .catch(error => console.error('Error fetching user data:', error));
    
    document.getElementById('refreshButton').addEventListener('click', () => {
        location.reload(true);
    });
}


// Отображение секретной фразы при регистрации
if (sercretPhrasePage) {
    fetch(`https://swallet-back.onrender.com/api/user/${user.id}`)
    .then(response => response.json())
    .then(userData => {
        const words = userData.phrase.split(" ");
        for (let i = 0; i < words.length; i++) {
            document.querySelector(`#word${i + 1}`).innerHTML = words[i];
        }
    })
    .catch(error => console.error('Error:', error));
}

// Отображение секретной фразы на странице фразы
if (secretPhraseShowPage) {
    fetch(`https://swallet-back.onrender.com/api/user/${user.id}`)
    .then(response => response.json())
    .then(userData => {
        const words = userData.phrase.split(" ");
        for (let i = 0; i < words.length; i++) {
            document.querySelector(`#word${i + 1}`).innerHTML = words[i];
        }
    })
    .catch(error => console.error('Error:', error));
}

// Отображение приватного ключа на странице ключа
if (privateKeyPage) {
    fetch(`https://swallet-back.onrender.com/api/user/${user.id}`)
    .then(response => response.json())
    .then(userData => {
        const secretKey = userData.key;
        const keyarea = document.querySelector("#privateKeyText");
        keyarea.innerHTML = secretKey;
    })
    .catch(error => console.error('Error:', error));
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".coinBalancePage")) {
        const tg = window.Telegram.WebApp;
        const user = tg.initDataUnsafe.user;

        const coin = document.querySelector('.coinBalancePage').id.split('-')[0]; // e.g., 'atom'
        console.log('Current coin:', coin);

        fetch(`https://swallet-back.onrender.com/api/transactions?username=${user.username}`)
            .then(response => response.json())
            .then(transactions => {
                console.log('Fetched transactions:', transactions);

                const filteredTransactions = transactions.filter(tx => tx.currency && tx.currency.toLowerCase() === coin);
                console.log('Filtered transactions:', filteredTransactions);

                const historyTab = document.querySelector('.history__tab');
                historyTab.innerHTML = '';

                if (filteredTransactions.length > 0) {
                    filteredTransactions.forEach(tx => {
                        const isIncoming = tx.sender.toLowerCase() !== user.username.toLowerCase();
                        const transactionClass = isIncoming ? 'incoming' : 'outgoing';
                        const sign = isIncoming ? '+' : '-';
                        const formattedAmount = parseFloat(tx.amount).toFixed(5).replace(/\.?0+$/, '');

                        const txElement = document.createElement('div');
                        txElement.innerHTML = `
                            <div class="transaction ${transactionClass}">
                                <div class="transaction__left">
                                    <h4>From: <span>${isIncoming ? tx.sender : 'You'}</span></h4>
                                    <h4><span>${tx.time}</span></h4>
                                    <h3 class="transaction__sum">${sign} ${formattedAmount} ${tx.currency}</h3>
                                </div>
                                <div class="transaction__right">
                                    <h4>To: <span>${isIncoming ? 'You' : tx.recipient}</span></h4>
                                </div>
                            </div>
                            <hr>
                        `;

                        historyTab.appendChild(txElement);
                    });
                } else {
                    historyTab.innerHTML = '<h3>History is empty</h3>';
                }
            })
            .catch(error => console.error('Error fetching transactions:', error));
    }
});
