var un = Object.defineProperty,
	pn = Object.defineProperties;
var En = Object.getOwnPropertyDescriptors;
var tt = Object.getOwnPropertySymbols;
var wn = Object.prototype.hasOwnProperty,
	hn = Object.prototype.propertyIsEnumerable;
var QA = (A, t, a) => t in A ? un(A, t, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: a
	}) : A[t] = a,
	g = (A, t) => {
		for(var a in t || (t = {})) wn.call(t, a) && QA(A, a, t[a]);
		if(tt)
			for(var a of tt(t)) hn.call(t, a) && QA(A, a, t[a]);
		return A
	},
	d = (A, t) => pn(A, En(t));
var v = (A, t, a) => (QA(A, typeof t != "symbol" ? t + "" : t, a), a);
import {
	b as Cn, p as In, E as yn, l as ge, D as o, W as at, a as Bn, o as Qn, c as AA, d as _, R as e, u as nt, e as Y, r as i, f as M, M as U, g as Fe, h as ee, i as fn, C as Sn, j as xn, P as D, k as st, m as bn, n as kn, q as Nn, A as tA, s as Mn, t as Rn
}
from "./vendor.749c927f.js";
const Fn = function() {
	const t = document.createElement("link").relList;
	if(t && t.supports && t.supports("modulepreload")) return;
	for(const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
	new MutationObserver(s => {
		for(const r of s)
			if(r.type === "childList")
				for(const c of r.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && n(c)
	}).observe(document, {
		childList: !0,
		subtree: !0
	});

	function a(s) {
		const r = {};
		return s.integrity && (r.integrity = s.integrity), s.referrerpolicy && (r.referrerPolicy = s.referrerpolicy), s.crossorigin === "use-credentials" ? r.credentials = "include" : s.crossorigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r
	}

	function n(s) {
		if(s.ep) return;
		s.ep = !0;
		const r = a(s);
		fetch(s.href, r)
	}
};
Fn();
window.Buffer = Cn.Buffer;
window.process = In;
window.EventEmitter = yn;
const vn = "mainnet",
	Dn = "0x6D18a54E0fd87FCb84a0510A3eCd8855b7226715",
	Gn = 137,
	Yn = "https://api.sunflower-land.com",
	On = "0xBE403A6054af56629D7d591A8fBD8cce3dc66771",
	Un = "0x48AfE14AE52987F6fE6E2F69aB74DC7Ac5a10fd2",
	Jn = "0x2B4A66557A79263275826AD31a4cDDc2789334bD",
	Tn = "0x22d5f9B75c524Fec1D6619787e582644CD4D7422",
	Kn = "0x6f9e92dd4734c168a734b873dc3db77e39552eb6",
	Ln = "0x070717e1Bc4c6e46C22B0e0B8821e0aC1D4689c3",
	Pn = "0xD1f9c58e33933a993A3891F8acFe05a68E1afC05",
	Vn = "https://sunflower-land.com/play/",
	j = {
		NETWORK: vn,
		POLYGON_CHAIN_ID: Gn,
		DONATION_ADDRESS: Dn,
		API_URL: Yn,
		DISCORD_REDIRECT: Vn,
		WISHING_WELL_CONTRACT: On,
		BETA_CONTRACT: Un,
		FARM_CONTRACT: Jn,
		INVENTORY_CONTRACT: Tn,
		PAIR_CONTRACT: Kn,
		SESSION_CONTRACT: Ln,
		TOKEN_CONTRACT: Pn
	},
	W = {
		NO_WEB3: "NO_WEB3",
		WRONG_CHAIN: "WRONG_CHAIN",
		NO_FARM: "NO_FARM",
		FAILED_REQUEST: "FAILED_REQUEST",
		REJECTED_TRANSACTION: "REJECTED_TRANSACTION",
		BLOCKED: "BLOCKED",
		NETWORK_CONGESTED: "NETWORK_CONGESTED",
		SESSION_EXPIRED: "SESSION_EXPIRED",
		DISCORD_USER_EXISTS: "DISCORD_USER_EXISTS",
		TOO_MANY_REQUESTS: "TOO_MANY_REQUESTS"
	};
var Hn = [{
	inputs: [{
		internalType: "contract PotatoLandInventory",
		name: "_inventory",
		type: "address"
	}, {
		internalType: "contract PotatoLandToken",
		name: "_token",
		type: "address"
	}, {
		internalType: "contract PotatoLand",
		name: "_farm",
		type: "address"
	}],
	stateMutability: "payable",
	type: "constructor"
}, {
	anonymous: !1,
	inputs: [{
		indexed: !0,
		internalType: "address",
		name: "previousOwner",
		type: "address"
	}, {
		indexed: !0,
		internalType: "address",
		name: "newOwner",
		type: "address"
	}],
	name: "OwnershipTransferred",
	type: "event"
}, {
	anonymous: !1,
	inputs: [{
		indexed: !0,
		internalType: "address",
		name: "owner",
		type: "address"
	}, {
		indexed: !0,
		internalType: "bytes32",
		name: "sessionId",
		type: "bytes32"
	}, {
		indexed: !0,
		internalType: "uint256",
		name: "farmId",
		type: "uint256"
	}],
	name: "SessionChanged",
	type: "event"
}, {
	inputs: [],
	name: "deposit",
	outputs: [],
	stateMutability: "payable",
	type: "function"
}, {
	inputs: [{
		internalType: "bytes32",
		name: "",
		type: "bytes32"
	}],
	name: "executed",
	outputs: [{
		internalType: "bool",
		name: "",
		type: "bool"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [{
		internalType: "uint256",
		name: "tokenId",
		type: "uint256"
	}],
	name: "generateSessionId",
	outputs: [{
		internalType: "bytes32",
		name: "",
		type: "bytes32"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [{
		internalType: "uint256",
		name: "tokenId",
		type: "uint256"
	}],
	name: "getSessionId",
	outputs: [{
		internalType: "bytes32",
		name: "",
		type: "bytes32"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [{
		internalType: "uint256",
		name: "tokenId",
		type: "uint256"
	}],
	name: "getWithdrawnAt",
	outputs: [{
		internalType: "uint256",
		name: "",
		type: "uint256"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [],
	name: "owner",
	outputs: [{
		internalType: "address",
		name: "",
		type: "address"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [],
	name: "renounceOwnership",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "uint256",
		name: "",
		type: "uint256"
	}],
	name: "sessions",
	outputs: [{
		internalType: "bytes32",
		name: "",
		type: "bytes32"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [{
		internalType: "bool",
		name: "_liquify",
		type: "bool"
	}],
	name: "setLiquify",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "uint256",
		name: "_fee",
		type: "uint256"
	}],
	name: "setSyncFee",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "_wishingWell",
		type: "address"
	}],
	name: "setWishingWell",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "uint256",
		name: "_tax",
		type: "uint256"
	}],
	name: "setWishingWellTax",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "uint256",
		name: "_fee",
		type: "uint256"
	}],
	name: "setWithdrawFee",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "bytes",
		name: "signature",
		type: "bytes"
	}, {
		internalType: "bytes32",
		name: "sessionId",
		type: "bytes32"
	}, {
		internalType: "uint256",
		name: "deadline",
		type: "uint256"
	}, {
		internalType: "uint256",
		name: "farmId",
		type: "uint256"
	}, {
		internalType: "uint256[]",
		name: "mintIds",
		type: "uint256[]"
	}, {
		internalType: "uint256[]",
		name: "mintAmounts",
		type: "uint256[]"
	}, {
		internalType: "uint256[]",
		name: "burnIds",
		type: "uint256[]"
	}, {
		internalType: "uint256[]",
		name: "burnAmounts",
		type: "uint256[]"
	}, {
		internalType: "int256",
		name: "tokens",
		type: "int256"
	}],
	name: "sync",
	outputs: [{
		internalType: "bool",
		name: "success",
		type: "bool"
	}],
	stateMutability: "payable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "newOwner",
		type: "address"
	}],
	name: "transferOwnership",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "_signer",
		type: "address"
	}],
	name: "transferSigner",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "_team",
		type: "address"
	}],
	name: "transferTeam",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "bytes32",
		name: "hash",
		type: "bytes32"
	}, {
		internalType: "bytes",
		name: "signature",
		type: "bytes"
	}],
	name: "verify",
	outputs: [{
		internalType: "bool",
		name: "",
		type: "bool"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [{
		internalType: "bytes",
		name: "signature",
		type: "bytes"
	}, {
		internalType: "bytes32",
		name: "sessionId",
		type: "bytes32"
	}, {
		internalType: "uint256",
		name: "deadline",
		type: "uint256"
	}, {
		internalType: "uint256",
		name: "farmId",
		type: "uint256"
	}, {
		internalType: "uint256[]",
		name: "ids",
		type: "uint256[]"
	}, {
		internalType: "uint256[]",
		name: "amounts",
		type: "uint256[]"
	}, {
		internalType: "uint256",
		name: "sfl",
		type: "uint256"
	}, {
		internalType: "uint256",
		name: "tax",
		type: "uint256"
	}],
	name: "withdraw",
	outputs: [{
		internalType: "bool",
		name: "",
		type: "bool"
	}],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "uint256",
		name: "",
		type: "uint256"
	}],
	name: "withdrawnAt",
	outputs: [{
		internalType: "uint256",
		name: "",
		type: "uint256"
	}],
	stateMutability: "view",
	type: "function"
}];
const Zn = 40;
async function Oe(A, t = 1) {
	const a = Zn * 1e9;
	try {
		const n = await A.eth.getGasPrice();
		let s = n ? Number(n) * t : void 0;
		return(!s || s < a) && (s = a), console.log({
			gasPrice: s
		}), s
	} catch {
		return a
	}
}

function de(A) {
	return console.log({
		parse: A
	}), A.code === 4001 ? new Error(W.REJECTED_TRANSACTION) : A.code === -32603 ? (console.log("Congested!"), new Error(W.NETWORK_CONGESTED)) : A
}
const Wn = j.SESSION_CONTRACT;
class jn {
	constructor(t, a) {
		v(this, "web3");
		v(this, "account");
		v(this, "contract");
		this.web3 = t, this.account = a, this.contract = new this.web3.eth.Contract(Hn, Wn)
	}
	async getSessionId(t, a = 0) {
		await new Promise(n => setTimeout(n, 3e3 * a));
		try {
			return await this.contract.methods.getSessionId(t).call({
				from: this.account
			})
		} catch(n) {
			const s = de(n);
			if(a < 3) return this.getSessionId(t, a + 1);
			throw s
		}
	}
	async getNextSessionId(t, a) {
		await new Promise(s => setTimeout(s, 3e3));
		const n = await this.getSessionId(t);
		return n === a ? this.getNextSessionId(t, a) : n
	}
	async sync({
		signature: t,
		sessionId: a,
		deadline: n,
		farmId: s,
		mintIds: r,
		mintAmounts: c,
		burnIds: m,
		burnAmounts: u,
		tokens: h
	}) {
		const w = ge.toWei("0.1"),
			E = await this.getSessionId(s),
			B = await Oe(this.web3);
		return await new Promise((p, C) => {
			this.contract.methods.sync(t, a, n, s, r, c, m, u, h).send({
				from: this.account,
				value: w,
				gasPrice: B
			}).on("error", function(f) {
				console.log({
					error: f
				});
				const x = de(f);
				C(x)
			}).on("transactionHash", function(f) {
				console.log({
					transactionHash: f
				})
			}).on("receipt", function(f) {
				p(f)
			})
		}), await this.getNextSessionId(s, E)
	}
	async withdraw({
		signature: t,
		sessionId: a,
		deadline: n,
		farmId: s,
		ids: r,
		amounts: c,
		tax: m,
		sfl: u
	}) {
		const h = await this.getSessionId(s),
			w = await Oe(this.web3);
		return await new Promise((B, Q) => {
			this.contract.methods.withdraw(t, a, n, s, r, c, u, m).send({
				from: this.account,
				gasPrice: w
			}).on("error", function(p) {
				const C = de(p);
				console.log({
					parsedIt: C
				}), Q(C)
			}).on("transactionHash", function(p) {
				console.log({
					transactionHash: p
				})
			}).on("receipt", function(p) {
				console.log({
					receipt: p
				}), B(p)
			})
		}), await this.getNextSessionId(s, h)
	}
}
var zn = [{
	inputs: [],
	stateMutability: "nonpayable",
	type: "constructor"
}, {
	anonymous: !1,
	inputs: [{
		indexed: !0,
		internalType: "address",
		name: "owner",
		type: "address"
	}, {
		indexed: !0,
		internalType: "address",
		name: "approved",
		type: "address"
	}, {
		indexed: !0,
		internalType: "uint256",
		name: "tokenId",
		type: "uint256"
	}],
	name: "Approval",
	type: "event"
}, {
	anonymous: !1,
	inputs: [{
		indexed: !0,
		internalType: "address",
		name: "owner",
		type: "address"
	}, {
		indexed: !0,
		internalType: "address",
		name: "operator",
		type: "address"
	}, {
		indexed: !1,
		internalType: "bool",
		name: "approved",
		type: "bool"
	}],
	name: "ApprovalForAll",
	type: "event"
}, {
	anonymous: !1,
	inputs: [{
		indexed: !0,
		internalType: "address",
		name: "owner",
		type: "address"
	}, {
		indexed: !0,
		internalType: "address",
		name: "landAddress",
		type: "address"
	}, {
		indexed: !0,
		internalType: "uint256",
		name: "tokenId",
		type: "uint256"
	}],
	name: "LandCreated",
	type: "event"
}, {
	anonymous: !1,
	inputs: [{
		indexed: !0,
		internalType: "address",
		name: "previousOwner",
		type: "address"
	}, {
		indexed: !0,
		internalType: "address",
		name: "newOwner",
		type: "address"
	}],
	name: "OwnershipTransferred",
	type: "event"
}, {
	anonymous: !1,
	inputs: [{
		indexed: !1,
		internalType: "address",
		name: "account",
		type: "address"
	}],
	name: "Paused",
	type: "event"
}, {
	anonymous: !1,
	inputs: [{
		indexed: !0,
		internalType: "address",
		name: "from",
		type: "address"
	}, {
		indexed: !0,
		internalType: "address",
		name: "to",
		type: "address"
	}, {
		indexed: !0,
		internalType: "uint256",
		name: "tokenId",
		type: "uint256"
	}],
	name: "Transfer",
	type: "event"
}, {
	anonymous: !1,
	inputs: [{
		indexed: !1,
		internalType: "address",
		name: "account",
		type: "address"
	}],
	name: "Unpaused",
	type: "event"
}, {
	inputs: [{
		internalType: "address",
		name: "_game",
		type: "address"
	}],
	name: "addGameRole",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "to",
		type: "address"
	}, {
		internalType: "uint256",
		name: "tokenId",
		type: "uint256"
	}],
	name: "approve",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "owner",
		type: "address"
	}],
	name: "balanceOf",
	outputs: [{
		internalType: "uint256",
		name: "",
		type: "uint256"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "to",
		type: "address"
	}, {
		internalType: "uint256",
		name: "tokenId",
		type: "uint256"
	}],
	name: "gameApprove",
	outputs: [{
		internalType: "bool",
		name: "",
		type: "bool"
	}],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "uint256",
		name: "tokenId",
		type: "uint256"
	}],
	name: "gameBurn",
	outputs: [{
		internalType: "bool",
		name: "",
		type: "bool"
	}],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "from",
		type: "address"
	}, {
		internalType: "address",
		name: "to",
		type: "address"
	}, {
		internalType: "uint256",
		name: "tokenId",
		type: "uint256"
	}],
	name: "gameTransfer",
	outputs: [{
		internalType: "bool",
		name: "",
		type: "bool"
	}],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "uint256",
		name: "tokenId",
		type: "uint256"
	}],
	name: "getApproved",
	outputs: [{
		internalType: "address",
		name: "",
		type: "address"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [{
		internalType: "uint256",
		name: "tokenId",
		type: "uint256"
	}],
	name: "getFarm",
	outputs: [{
		components: [{
			internalType: "address",
			name: "owner",
			type: "address"
		}, {
			internalType: "address",
			name: "account",
			type: "address"
		}, {
			internalType: "uint256",
			name: "tokenId",
			type: "uint256"
		}],
		internalType: "struct Farm",
		name: "",
		type: "tuple"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "account",
		type: "address"
	}],
	name: "getFarms",
	outputs: [{
		components: [{
			internalType: "address",
			name: "owner",
			type: "address"
		}, {
			internalType: "address",
			name: "account",
			type: "address"
		}, {
			internalType: "uint256",
			name: "tokenId",
			type: "uint256"
		}],
		internalType: "struct Farm[]",
		name: "",
		type: "tuple[]"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "owner",
		type: "address"
	}, {
		internalType: "address",
		name: "operator",
		type: "address"
	}],
	name: "isApprovedForAll",
	outputs: [{
		internalType: "bool",
		name: "",
		type: "bool"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "account",
		type: "address"
	}],
	name: "mint",
	outputs: [{
		internalType: "bool",
		name: "",
		type: "bool"
	}],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [],
	name: "name",
	outputs: [{
		internalType: "string",
		name: "",
		type: "string"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [],
	name: "owner",
	outputs: [{
		internalType: "address",
		name: "",
		type: "address"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [{
		internalType: "uint256",
		name: "tokenId",
		type: "uint256"
	}],
	name: "ownerOf",
	outputs: [{
		internalType: "address",
		name: "",
		type: "address"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [],
	name: "pause",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [],
	name: "paused",
	outputs: [{
		internalType: "bool",
		name: "",
		type: "bool"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "_game",
		type: "address"
	}],
	name: "removeGameRole",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [],
	name: "renounceOwnership",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "from",
		type: "address"
	}, {
		internalType: "address",
		name: "to",
		type: "address"
	}, {
		internalType: "uint256",
		name: "tokenId",
		type: "uint256"
	}],
	name: "safeTransferFrom",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "from",
		type: "address"
	}, {
		internalType: "address",
		name: "to",
		type: "address"
	}, {
		internalType: "uint256",
		name: "tokenId",
		type: "uint256"
	}, {
		internalType: "bytes",
		name: "_data",
		type: "bytes"
	}],
	name: "safeTransferFrom",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "operator",
		type: "address"
	}, {
		internalType: "bool",
		name: "approved",
		type: "bool"
	}],
	name: "setApprovalForAll",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "string",
		name: "uri",
		type: "string"
	}],
	name: "setBaseUri",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "bytes4",
		name: "interfaceId",
		type: "bytes4"
	}],
	name: "supportsInterface",
	outputs: [{
		internalType: "bool",
		name: "",
		type: "bool"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [],
	name: "symbol",
	outputs: [{
		internalType: "string",
		name: "",
		type: "string"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [{
		internalType: "uint256",
		name: "index",
		type: "uint256"
	}],
	name: "tokenByIndex",
	outputs: [{
		internalType: "uint256",
		name: "",
		type: "uint256"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "owner",
		type: "address"
	}, {
		internalType: "uint256",
		name: "index",
		type: "uint256"
	}],
	name: "tokenOfOwnerByIndex",
	outputs: [{
		internalType: "uint256",
		name: "",
		type: "uint256"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [{
		internalType: "uint256",
		name: "tokenId",
		type: "uint256"
	}],
	name: "tokenURI",
	outputs: [{
		internalType: "string",
		name: "",
		type: "string"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [],
	name: "totalSupply",
	outputs: [{
		internalType: "uint256",
		name: "",
		type: "uint256"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "from",
		type: "address"
	}, {
		internalType: "address",
		name: "to",
		type: "address"
	}, {
		internalType: "uint256",
		name: "tokenId",
		type: "uint256"
	}],
	name: "transferFrom",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "newOwner",
		type: "address"
	}],
	name: "transferOwnership",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [],
	name: "unpause",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}];
const qn = j.FARM_CONTRACT;
class Xn {
	constructor(t, a) {
		v(this, "web3");
		v(this, "account");
		v(this, "farm");
		this.web3 = t, this.account = a, this.farm = new this.web3.eth.Contract(zn, qn)
	}
	async getFarms(t = 0) {
		await new Promise(a => setTimeout(a, 3e3 * t));
		try {
			return await this.farm.methods.getFarms(this.account).call({
				from: this.account
			})
		} catch(a) {
			const n = de(a);
			if(t < 3) return this.getFarms(t + 1);
			throw n
		}
	}
	async ownerOf(t) {
		return await this.farm.methods.ownerOf(t).call()
	}
	async getFarm(t) {
		return await this.farm.methods.getFarm(t).call()
	}
	async getNewFarm() {
		await new Promise(n => setTimeout(n, 3e3));
		const t = await this.getFarms();
		if(t.length === 0) return this.getNewFarm();
		console.log({
			farm: t[0]
		});
		const a = await this.ownerOf(t[0].tokenId);
		return console.log({
			owner: a
		}), console.log({
			account: this.account
		}), a !== this.account ? this.getNewFarm() : t[0]
	}
	async getTotalSupply(t = 0) {
		await new Promise(a => setTimeout(a, 3e3 * t));
		try {
			return await this.farm.methods.totalSupply().call({
				from: this.account
			})
		} catch(a) {
			const n = de(a);
			if(t < 3) return this.getTotalSupply(t + 1);
			throw n
		}
	}
}
var $n = [{
	inputs: [{
		internalType: "contract SunflowerLand",
		name: "_farm",
		type: "address"
	}],
	stateMutability: "payable",
	type: "constructor"
}, {
	anonymous: !1,
	inputs: [{
		indexed: !0,
		internalType: "address",
		name: "previousOwner",
		type: "address"
	}, {
		indexed: !0,
		internalType: "address",
		name: "newOwner",
		type: "address"
	}],
	name: "OwnershipTransferred",
	type: "event"
}, {
	inputs: [{
		internalType: "bytes",
		name: "signature",
		type: "bytes"
	}, {
		internalType: "address",
		name: "charity",
		type: "address"
	}, {
		internalType: "uint256",
		name: "amount",
		type: "uint256"
	}],
	name: "createFarm",
	outputs: [],
	stateMutability: "payable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "",
		type: "address"
	}],
	name: "createdAt",
	outputs: [{
		internalType: "uint256",
		name: "",
		type: "uint256"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [],
	name: "deposit",
	outputs: [],
	stateMutability: "payable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "account",
		type: "address"
	}],
	name: "farmCreatedAt",
	outputs: [{
		internalType: "uint256",
		name: "",
		type: "uint256"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [],
	name: "owner",
	outputs: [{
		internalType: "address",
		name: "",
		type: "address"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [],
	name: "renounceOwnership",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "newOwner",
		type: "address"
	}],
	name: "transferOwnership",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "_signer",
		type: "address"
	}],
	name: "transferSigner",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "_team",
		type: "address"
	}],
	name: "transferTeam",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "bytes32",
		name: "hash",
		type: "bytes32"
	}, {
		internalType: "bytes",
		name: "signature",
		type: "bytes"
	}],
	name: "verify",
	outputs: [{
		internalType: "bool",
		name: "",
		type: "bool"
	}],
	stateMutability: "view",
	type: "function"
}];
const _n = j.BETA_CONTRACT;
class es {
	constructor(t, a) {
		v(this, "web3");
		v(this, "account");
		v(this, "contract");
		this.web3 = t, this.account = a, this.contract = new this.web3.eth.Contract($n, _n)
	}
	async getCreatedAt(t, a = 1) {
		await new Promise(n => setTimeout(n, 3e3 * a));
		try {
			return await this.contract.methods.farmCreatedAt(t).call({
				from: this.account
			})
		} catch(n) {
			const s = de(n);
			if(a < 3) return this.getCreatedAt(t, a + 1);
			throw s
		}
	}
	async createFarm({
		signature: t,
		charity: a,
		donation: n
	}) {
		const s = await Oe(this.web3);
		return new Promise((r, c) => {
			this.contract.methods.createFarm(t, a, n).send({
				from: this.account,
				value: n,
				gasPrice: s
			}).on("error", function(m) {
				console.log({
					error: m
				});
				const u = de(m);
				c(u)
			}).on("transactionHash", function(m) {
				console.log({
					transactionHash: m
				})
			}).on("receipt", function(m) {
				console.log({
					receipt: m
				}), r(m)
			})
		})
	}
}
const ve = {
	"Sunflower Seed": 101,
	"Potato Seed": 102,
	"Pumpkin Seed": 103,
	"Carrot Seed": 104,
	"Cabbage Seed": 105,
	"Beetroot Seed": 106,
	"Cauliflower Seed": 107,
	"Parsnip Seed": 108,
	"Radish Seed": 109,
	"Wheat Seed": 110,
	Sunflower: 201,
	Potato: 202,
	Pumpkin: 203,
	Carrot: 204,
	Cabbage: 205,
	Beetroot: 206,
	Cauliflower: 207,
	Parsnip: 208,
	Radish: 209,
	Wheat: 210,
	Axe: 301,
	Pickaxe: 302,
	"Stone Pickaxe": 303,
	"Iron Pickaxe": 304,
	Hammer: 305,
	Rod: 306,
	"Sunflower Statue": 401,
	"Potato Statue": 402,
	"Christmas Tree": 403,
	Scarecrow: 404,
	"Farm Cat": 405,
	"Farm Dog": 406,
	Gnome: 407,
	"Chicken Coop": 408,
	"Gold Egg": 409,
	"Golden Cauliflower": 410,
	"Sunflower Tombstone": 411,
	"Sunflower Rock": 412,
	"Goblin Crown": 413,
	Fountain: 414,
	"Woody the Beaver": 415,
	"Apprentice Beaver": 416,
	"Foreman Beaver": 417,
	"Mysterious Parsnip": 418,
	"Carrot Sword": 419,
	Nancy: 420,
	Kuebiko: 421,
	"Pumpkin Soup": 501,
	"Roasted Cauliflower": 502,
	Sauerkraut: 503,
	"Radish Pie": 504,
	Wood: 601,
	Stone: 602,
	Iron: 603,
	Gold: 604,
	Egg: 605,
	Chicken: 606,
	Cow: 607,
	Pig: 608,
	Sheep: 609,
	"Green Thumb": 701,
	"Barn Manager": 702,
	"Seed Specialist": 703,
	Wrangler: 704,
	Lumberjack: 705,
	Prospector: 706,
	Logger: 707,
	"Gold Rush": 708,
	"Australian Flag": 801,
	"Belgian Flag": 802,
	"Brazilian Flag": 803,
	"Chinese Flag": 804,
	"Finnish Flag": 805,
	"French Flag": 806,
	"German Flag": 807,
	"Indonesian Flag": 808,
	"Indian Flag": 809,
	"Iranian Flag": 810,
	"Italian Flag": 811,
	"Japanese Flag": 812,
	"Moroccan Flag": 813,
	"Dutch Flag": 814,
	"Philippine Flag": 815,
	"Polish Flag": 816,
	"Portuguese Flag": 817,
	"Russian Flag": 818,
	"Saudi Arabian Flag": 819,
	"South Korean Flag": 820,
	"Spanish Flag": 821,
	"Sunflower Flag": 822,
	"Thai Flag": 823,
	"Turkish Flag": 824,
	"Ukrainian Flag": 825,
	"American Flag": 826,
	"Vietnamese Flag": 827,
	"Canadian Flag": 828,
	"Singaporean Flag": 829,
	"British Flag": 830,
	"Sierra Leone Flag": 831,
	"Romanian Flag": 832,
	"Rainbow Flag": 833,
	"Goblin Flag": 834,
	"Pirate Flag": 835,
	"Algerian Flag": 836,
	"Mexican Flag": 837,
	"Dominican Republic Flag": 838,
	"Argentinian Flag": 839,
	"Lithuanian Flag": 840,
	"Malaysian Flag": 841,
	"Colombian Flag": 842
};
Object.assign({}, ...Object.entries(ve).map(([A, t]) => ({
	[t]: A
})));
const rt = Object.values(ve);
var As = [{
	inputs: [],
	stateMutability: "payable",
	type: "constructor"
}, {
	anonymous: !1,
	inputs: [{
		indexed: !0,
		internalType: "address",
		name: "account",
		type: "address"
	}, {
		indexed: !0,
		internalType: "address",
		name: "operator",
		type: "address"
	}, {
		indexed: !1,
		internalType: "bool",
		name: "approved",
		type: "bool"
	}],
	name: "ApprovalForAll",
	type: "event"
}, {
	anonymous: !1,
	inputs: [{
		indexed: !0,
		internalType: "address",
		name: "previousOwner",
		type: "address"
	}, {
		indexed: !0,
		internalType: "address",
		name: "newOwner",
		type: "address"
	}],
	name: "OwnershipTransferred",
	type: "event"
}, {
	anonymous: !1,
	inputs: [{
		indexed: !1,
		internalType: "address",
		name: "account",
		type: "address"
	}],
	name: "Paused",
	type: "event"
}, {
	anonymous: !1,
	inputs: [{
		indexed: !0,
		internalType: "address",
		name: "operator",
		type: "address"
	}, {
		indexed: !0,
		internalType: "address",
		name: "from",
		type: "address"
	}, {
		indexed: !0,
		internalType: "address",
		name: "to",
		type: "address"
	}, {
		indexed: !1,
		internalType: "uint256[]",
		name: "ids",
		type: "uint256[]"
	}, {
		indexed: !1,
		internalType: "uint256[]",
		name: "values",
		type: "uint256[]"
	}],
	name: "TransferBatch",
	type: "event"
}, {
	anonymous: !1,
	inputs: [{
		indexed: !0,
		internalType: "address",
		name: "operator",
		type: "address"
	}, {
		indexed: !0,
		internalType: "address",
		name: "from",
		type: "address"
	}, {
		indexed: !0,
		internalType: "address",
		name: "to",
		type: "address"
	}, {
		indexed: !1,
		internalType: "uint256",
		name: "id",
		type: "uint256"
	}, {
		indexed: !1,
		internalType: "uint256",
		name: "value",
		type: "uint256"
	}],
	name: "TransferSingle",
	type: "event"
}, {
	anonymous: !1,
	inputs: [{
		indexed: !1,
		internalType: "string",
		name: "value",
		type: "string"
	}, {
		indexed: !0,
		internalType: "uint256",
		name: "id",
		type: "uint256"
	}],
	name: "URI",
	type: "event"
}, {
	anonymous: !1,
	inputs: [{
		indexed: !1,
		internalType: "address",
		name: "account",
		type: "address"
	}],
	name: "Unpaused",
	type: "event"
}, {
	inputs: [{
		internalType: "address",
		name: "_game",
		type: "address"
	}],
	name: "addGameRole",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "account",
		type: "address"
	}, {
		internalType: "uint256",
		name: "id",
		type: "uint256"
	}],
	name: "balanceOf",
	outputs: [{
		internalType: "uint256",
		name: "",
		type: "uint256"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [{
		internalType: "address[]",
		name: "accounts",
		type: "address[]"
	}, {
		internalType: "uint256[]",
		name: "ids",
		type: "uint256[]"
	}],
	name: "balanceOfBatch",
	outputs: [{
		internalType: "uint256[]",
		name: "",
		type: "uint256[]"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [{
		internalType: "uint256",
		name: "id",
		type: "uint256"
	}],
	name: "exists",
	outputs: [{
		internalType: "bool",
		name: "",
		type: "bool"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "to",
		type: "address"
	}, {
		internalType: "uint256[]",
		name: "ids",
		type: "uint256[]"
	}, {
		internalType: "uint256[]",
		name: "amounts",
		type: "uint256[]"
	}],
	name: "gameBurn",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "to",
		type: "address"
	}, {
		internalType: "uint256[]",
		name: "ids",
		type: "uint256[]"
	}, {
		internalType: "uint256[]",
		name: "amounts",
		type: "uint256[]"
	}, {
		internalType: "bytes",
		name: "data",
		type: "bytes"
	}],
	name: "gameMint",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "from",
		type: "address"
	}, {
		internalType: "address",
		name: "to",
		type: "address"
	}, {
		internalType: "uint256[]",
		name: "ids",
		type: "uint256[]"
	}, {
		internalType: "uint256[]",
		name: "amounts",
		type: "uint256[]"
	}, {
		internalType: "bytes",
		name: "data",
		type: "bytes"
	}],
	name: "gameTransferFrom",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "account",
		type: "address"
	}, {
		internalType: "address",
		name: "operator",
		type: "address"
	}],
	name: "isApprovedForAll",
	outputs: [{
		internalType: "bool",
		name: "",
		type: "bool"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [],
	name: "owner",
	outputs: [{
		internalType: "address",
		name: "",
		type: "address"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [],
	name: "paused",
	outputs: [{
		internalType: "bool",
		name: "",
		type: "bool"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "_game",
		type: "address"
	}],
	name: "removeGameRole",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [],
	name: "renounceOwnership",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "from",
		type: "address"
	}, {
		internalType: "address",
		name: "to",
		type: "address"
	}, {
		internalType: "uint256[]",
		name: "ids",
		type: "uint256[]"
	}, {
		internalType: "uint256[]",
		name: "amounts",
		type: "uint256[]"
	}, {
		internalType: "bytes",
		name: "data",
		type: "bytes"
	}],
	name: "safeBatchTransferFrom",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "from",
		type: "address"
	}, {
		internalType: "address",
		name: "to",
		type: "address"
	}, {
		internalType: "uint256",
		name: "id",
		type: "uint256"
	}, {
		internalType: "uint256",
		name: "amount",
		type: "uint256"
	}, {
		internalType: "bytes",
		name: "data",
		type: "bytes"
	}],
	name: "safeTransferFrom",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "operator",
		type: "address"
	}, {
		internalType: "bool",
		name: "approved",
		type: "bool"
	}],
	name: "setApprovalForAll",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "string",
		name: "newuri",
		type: "string"
	}],
	name: "setURI",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "bytes4",
		name: "interfaceId",
		type: "bytes4"
	}],
	name: "supportsInterface",
	outputs: [{
		internalType: "bool",
		name: "",
		type: "bool"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [{
		internalType: "uint256",
		name: "id",
		type: "uint256"
	}],
	name: "totalSupply",
	outputs: [{
		internalType: "uint256",
		name: "",
		type: "uint256"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [{
		internalType: "uint256[]",
		name: "ids",
		type: "uint256[]"
	}],
	name: "totalSupplyBatch",
	outputs: [{
		internalType: "uint256[]",
		name: "",
		type: "uint256[]"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "newOwner",
		type: "address"
	}],
	name: "transferOwnership",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "uint256",
		name: "",
		type: "uint256"
	}],
	name: "uri",
	outputs: [{
		internalType: "string",
		name: "",
		type: "string"
	}],
	stateMutability: "view",
	type: "function"
}];
const ts = j.INVENTORY_CONTRACT;
class as {
	constructor(t, a) {
		v(this, "web3");
		v(this, "account");
		v(this, "contract");
		this.web3 = t, this.account = a, this.contract = new this.web3.eth.Contract(As, ts)
	}
	async loadSupplyBatch(t, a = 0) {
		await new Promise(n => setTimeout(n, 3e3 * a));
		try {
			return await this.contract.methods.totalSupplyBatch(t).call({
				from: this.account
			})
		} catch(n) {
			const s = de(n);
			if(a < 3) return this.loadSupplyBatch(t, a + 1);
			throw s
		}
	}
	async totalSupply() {
		const t = Object.values(ve),
			a = Object.keys(ve);
		return(await this.loadSupplyBatch(t)).reduce((s, r, c) => d(g({}, s), {
			[a[c]]: new o(r)
		}), {})
	}
	async getBalances(t) {
		const a = Array(rt.length).fill(t);
		return await this.contract.methods.balanceOfBatch(a, rt).call()
	}
}
var ot = [{
	inputs: [],
	stateMutability: "payable",
	type: "constructor"
}, {
	anonymous: !1,
	inputs: [{
		indexed: !0,
		internalType: "address",
		name: "owner",
		type: "address"
	}, {
		indexed: !0,
		internalType: "address",
		name: "spender",
		type: "address"
	}, {
		indexed: !1,
		internalType: "uint256",
		name: "value",
		type: "uint256"
	}],
	name: "Approval",
	type: "event"
}, {
	anonymous: !1,
	inputs: [{
		indexed: !0,
		internalType: "address",
		name: "previousOwner",
		type: "address"
	}, {
		indexed: !0,
		internalType: "address",
		name: "newOwner",
		type: "address"
	}],
	name: "OwnershipTransferred",
	type: "event"
}, {
	anonymous: !1,
	inputs: [{
		indexed: !1,
		internalType: "address",
		name: "account",
		type: "address"
	}],
	name: "Paused",
	type: "event"
}, {
	anonymous: !1,
	inputs: [{
		indexed: !0,
		internalType: "address",
		name: "from",
		type: "address"
	}, {
		indexed: !0,
		internalType: "address",
		name: "to",
		type: "address"
	}, {
		indexed: !1,
		internalType: "uint256",
		name: "value",
		type: "uint256"
	}],
	name: "Transfer",
	type: "event"
}, {
	anonymous: !1,
	inputs: [{
		indexed: !1,
		internalType: "address",
		name: "account",
		type: "address"
	}],
	name: "Unpaused",
	type: "event"
}, {
	inputs: [{
		internalType: "address",
		name: "_game",
		type: "address"
	}],
	name: "addGameRole",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "owner",
		type: "address"
	}, {
		internalType: "address",
		name: "spender",
		type: "address"
	}],
	name: "allowance",
	outputs: [{
		internalType: "uint256",
		name: "",
		type: "uint256"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "spender",
		type: "address"
	}, {
		internalType: "uint256",
		name: "amount",
		type: "uint256"
	}],
	name: "approve",
	outputs: [{
		internalType: "bool",
		name: "",
		type: "bool"
	}],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "account",
		type: "address"
	}],
	name: "balanceOf",
	outputs: [{
		internalType: "uint256",
		name: "",
		type: "uint256"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [],
	name: "decimals",
	outputs: [{
		internalType: "uint8",
		name: "",
		type: "uint8"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "spender",
		type: "address"
	}, {
		internalType: "uint256",
		name: "subtractedValue",
		type: "uint256"
	}],
	name: "decreaseAllowance",
	outputs: [{
		internalType: "bool",
		name: "",
		type: "bool"
	}],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "spender",
		type: "address"
	}, {
		internalType: "uint256",
		name: "amount",
		type: "uint256"
	}],
	name: "gameApprove",
	outputs: [{
		internalType: "bool",
		name: "",
		type: "bool"
	}],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "account",
		type: "address"
	}, {
		internalType: "uint256",
		name: "amount",
		type: "uint256"
	}],
	name: "gameBurn",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "account",
		type: "address"
	}, {
		internalType: "uint256",
		name: "amount",
		type: "uint256"
	}],
	name: "gameMint",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "from",
		type: "address"
	}, {
		internalType: "address",
		name: "to",
		type: "address"
	}, {
		internalType: "uint256",
		name: "amount",
		type: "uint256"
	}],
	name: "gameTransfer",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "spender",
		type: "address"
	}, {
		internalType: "uint256",
		name: "addedValue",
		type: "uint256"
	}],
	name: "increaseAllowance",
	outputs: [{
		internalType: "bool",
		name: "",
		type: "bool"
	}],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [],
	name: "name",
	outputs: [{
		internalType: "string",
		name: "",
		type: "string"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [],
	name: "owner",
	outputs: [{
		internalType: "address",
		name: "",
		type: "address"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "_team",
		type: "address"
	}],
	name: "passTeamRole",
	outputs: [{
		internalType: "bool",
		name: "",
		type: "bool"
	}],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [],
	name: "paused",
	outputs: [{
		internalType: "bool",
		name: "",
		type: "bool"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "_game",
		type: "address"
	}],
	name: "removeGameRole",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [],
	name: "renounceOwnership",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [],
	name: "symbol",
	outputs: [{
		internalType: "string",
		name: "",
		type: "string"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [],
	name: "totalSupply",
	outputs: [{
		internalType: "uint256",
		name: "",
		type: "uint256"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "recipient",
		type: "address"
	}, {
		internalType: "uint256",
		name: "amount",
		type: "uint256"
	}],
	name: "transfer",
	outputs: [{
		internalType: "bool",
		name: "",
		type: "bool"
	}],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "sender",
		type: "address"
	}, {
		internalType: "address",
		name: "recipient",
		type: "address"
	}, {
		internalType: "uint256",
		name: "amount",
		type: "uint256"
	}],
	name: "transferFrom",
	outputs: [{
		internalType: "bool",
		name: "",
		type: "bool"
	}],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "newOwner",
		type: "address"
	}],
	name: "transferOwnership",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}];
const ns = j.PAIR_CONTRACT,
	ss = j.WISHING_WELL_CONTRACT;
class rs {
	constructor(t, a) {
		v(this, "web3");
		v(this, "account");
		v(this, "contract");
		this.web3 = t, this.account = a, this.contract = new this.web3.eth.Contract(ot, ns)
	}
	async getBalance() {
		return await this.contract.methods.balanceOf(this.account).call({
			from: this.account
		})
	}
	async approve(t) {
		return new Promise((a, n) => {
			this.contract.methods.approve(ss, t).send({
				from: this.account
			}).on("error", function(s) {
				console.log({
					error: s
				}), n(s)
			}).on("transactionHash", function(s) {
				console.log({
					transactionHash: s
				})
			}).on("receipt", function(s) {
				console.log({
					receipt: s
				}), a(s)
			})
		})
	}
}
var os = [{
	inputs: [{
		internalType: "contract SunflowerLandToken",
		name: "_token",
		type: "address"
	}, {
		internalType: "contract ERC20",
		name: "_liquidityToken",
		type: "address"
	}],
	stateMutability: "payable",
	type: "constructor"
}, {
	anonymous: !1,
	inputs: [{
		indexed: !0,
		internalType: "address",
		name: "owner",
		type: "address"
	}, {
		indexed: !0,
		internalType: "address",
		name: "spender",
		type: "address"
	}, {
		indexed: !1,
		internalType: "uint256",
		name: "value",
		type: "uint256"
	}],
	name: "Approval",
	type: "event"
}, {
	inputs: [{
		internalType: "address",
		name: "spender",
		type: "address"
	}, {
		internalType: "uint256",
		name: "amount",
		type: "uint256"
	}],
	name: "approve",
	outputs: [{
		internalType: "bool",
		name: "",
		type: "bool"
	}],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "bytes",
		name: "signature",
		type: "bytes"
	}, {
		internalType: "uint256",
		name: "tokens",
		type: "uint256"
	}, {
		internalType: "uint256",
		name: "deadline",
		type: "uint256"
	}],
	name: "collectFromWell",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "spender",
		type: "address"
	}, {
		internalType: "uint256",
		name: "subtractedValue",
		type: "uint256"
	}],
	name: "decreaseAllowance",
	outputs: [{
		internalType: "bool",
		name: "",
		type: "bool"
	}],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "spender",
		type: "address"
	}, {
		internalType: "uint256",
		name: "addedValue",
		type: "uint256"
	}],
	name: "increaseAllowance",
	outputs: [{
		internalType: "bool",
		name: "",
		type: "bool"
	}],
	stateMutability: "nonpayable",
	type: "function"
}, {
	anonymous: !1,
	inputs: [{
		indexed: !0,
		internalType: "address",
		name: "previousOwner",
		type: "address"
	}, {
		indexed: !0,
		internalType: "address",
		name: "newOwner",
		type: "address"
	}],
	name: "OwnershipTransferred",
	type: "event"
}, {
	inputs: [],
	name: "renounceOwnership",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	anonymous: !1,
	inputs: [{
		indexed: !0,
		internalType: "address",
		name: "owner",
		type: "address"
	}, {
		indexed: !1,
		internalType: "uint256",
		name: "tokens",
		type: "uint256"
	}],
	name: "Rewarded",
	type: "event"
}, {
	inputs: [{
		internalType: "uint256",
		name: "period",
		type: "uint256"
	}],
	name: "setLockedPeriod",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "to",
		type: "address"
	}, {
		internalType: "uint256",
		name: "amount",
		type: "uint256"
	}],
	name: "transfer",
	outputs: [{
		internalType: "bool",
		name: "",
		type: "bool"
	}],
	stateMutability: "nonpayable",
	type: "function"
}, {
	anonymous: !1,
	inputs: [{
		indexed: !0,
		internalType: "address",
		name: "from",
		type: "address"
	}, {
		indexed: !0,
		internalType: "address",
		name: "to",
		type: "address"
	}, {
		indexed: !1,
		internalType: "uint256",
		name: "value",
		type: "uint256"
	}],
	name: "Transfer",
	type: "event"
}, {
	inputs: [{
		internalType: "address",
		name: "from",
		type: "address"
	}, {
		internalType: "address",
		name: "to",
		type: "address"
	}, {
		internalType: "uint256",
		name: "amount",
		type: "uint256"
	}],
	name: "transferFrom",
	outputs: [{
		internalType: "bool",
		name: "",
		type: "bool"
	}],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "newOwner",
		type: "address"
	}],
	name: "transferOwnership",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "_signer",
		type: "address"
	}],
	name: "transferSigner",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	inputs: [],
	name: "wish",
	outputs: [],
	stateMutability: "nonpayable",
	type: "function"
}, {
	anonymous: !1,
	inputs: [{
		indexed: !0,
		internalType: "address",
		name: "owner",
		type: "address"
	}, {
		indexed: !1,
		internalType: "uint256",
		name: "tokens",
		type: "uint256"
	}],
	name: "Wished",
	type: "event"
}, {
	inputs: [{
		internalType: "address",
		name: "owner",
		type: "address"
	}, {
		internalType: "address",
		name: "spender",
		type: "address"
	}],
	name: "allowance",
	outputs: [{
		internalType: "uint256",
		name: "",
		type: "uint256"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "account",
		type: "address"
	}],
	name: "balanceOf",
	outputs: [{
		internalType: "uint256",
		name: "",
		type: "uint256"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "account",
		type: "address"
	}],
	name: "canCollect",
	outputs: [{
		internalType: "bool",
		name: "",
		type: "bool"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [],
	name: "decimals",
	outputs: [{
		internalType: "uint8",
		name: "",
		type: "uint8"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [{
		internalType: "bytes32",
		name: "",
		type: "bytes32"
	}],
	name: "executed",
	outputs: [{
		internalType: "bool",
		name: "",
		type: "bool"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [{
		internalType: "address",
		name: "account",
		type: "address"
	}],
	name: "lastUpdatedAt",
	outputs: [{
		internalType: "uint256",
		name: "",
		type: "uint256"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [],
	name: "name",
	outputs: [{
		internalType: "string",
		name: "",
		type: "string"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [],
	name: "owner",
	outputs: [{
		internalType: "address",
		name: "",
		type: "address"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [],
	name: "symbol",
	outputs: [{
		internalType: "string",
		name: "",
		type: "string"
	}],
	stateMutability: "view",
	type: "function"
}, {
	inputs: [],
	name: "totalSupply",
	outputs: [{
		internalType: "uint256",
		name: "",
		type: "uint256"
	}],
	stateMutability: "view",
	type: "function"
}];
const is = j.WISHING_WELL_CONTRACT;
class ls {
	constructor(t, a) {
		v(this, "web3");
		v(this, "account");
		v(this, "contract");
		this.web3 = t, this.account = a, this.contract = new this.web3.eth.Contract(os, is)
	}
	async wish() {
		const t = await Oe(this.web3);
		return new Promise((a, n) => {
			this.contract.methods.wish().send({
				from: this.account,
				gasPrice: t
			}).on("error", function(s) {
				console.log({
					error: s
				}), n(s)
			}).on("transactionHash", function(s) {
				console.log({
					transactionHash: s
				})
			}).on("receipt", function(s) {
				console.log({
					receipt: s
				}), a(s)
			})
		})
	}
	async collectFromWell({
		signature: t,
		tokens: a,
		deadline: n
	}) {
		const s = await Oe(this.web3);
		return new Promise((r, c) => {
			this.contract.methods.collectFromWell(t, a, n).send({
				from: this.account,
				gasPrice: s
			}).on("error", function(m) {
				console.log({
					error: m
				}), c(m)
			}).on("transactionHash", function(m) {
				console.log({
					transactionHash: m
				})
			}).on("receipt", function(m) {
				console.log({
					receipt: m
				}), r(m)
			})
		})
	}
	async getBalance() {
		const t = await this.contract.methods.balanceOf(this.account).call({
			from: this.account
		});
		return console.log({
			balance: t
		}), t
	}
	async canCollect() {
		return await this.contract.methods.canCollect(this.account).call({
			from: this.account
		})
	}
	async lastCollected() {
		return await this.contract.methods.lastUpdatedAt(this.account).call({
			from: this.account
		})
	}
}
const cs = j.TOKEN_CONTRACT;
class ms {
	constructor(t, a) {
		v(this, "web3");
		v(this, "account");
		v(this, "contract");
		this.web3 = t, this.account = a, this.contract = new this.web3.eth.Contract(ot, cs)
	}
	async balanceOf(t) {
		return await this.contract.methods.balanceOf(t).call({
			from: this.account
		})
	}
	async totalSupply() {
		return await this.contract.methods.totalSupply().call({
			from: this.account
		})
	}
}
class gs {
	constructor() {
		v(this, "web3", null);
		v(this, "farm", null);
		v(this, "session", null);
		v(this, "beta", null);
		v(this, "inventory", null);
		v(this, "pair", null);
		v(this, "wishingWell", null);
		v(this, "token", null);
		v(this, "account", null)
	}
	async initialiseContracts() {
		try {
			if(this.farm = new Xn(this.web3, this.account), this.session = new jn(this.web3, this.account), this.beta = new es(this.web3, this.account), this.inventory = new as(this.web3, this.account), this.pair = new rs(this.web3, this.account), this.token = new ms(this.web3, this.account), this.wishingWell = new ls(this.web3, this.account), !await this.healthCheck()) throw new Error("Unable to reach Polygon")
		} catch(t) {
			if(t.code === "-32005") console.error("Retrying..."), await new Promise(a => window.setTimeout(a, 3e3));
			else throw console.error(t), t
		}
	}
	async setupWeb3() {
		if(window.ethereum) try {
				await window.ethereum.enable(), this.web3 = new at(window.ethereum)
			} catch(t) {
				console.error("Error inside setupWeb3", t)
			} else if(window.web3) this.web3 = new at(window.web3.currentProvider);
			else throw new Error(W.NO_WEB3)
	}
	async healthCheck() {
		return await Bn(this.web3, this.account) !== 500
	}
	async loadAccount() {
		if(!this.web3) throw new Error(W.NO_WEB3);
		const t = await this.web3.eth.getAccounts();
		this.account = t[0]
	}
	async initialise(t = 0) {
		var a;
		try {
			if(await new Promise(s => setTimeout(s, 1e3)), await this.setupWeb3(), await this.loadAccount(), await ((a = this.web3) == null ? void 0 : a.eth.getChainId()) !== j.POLYGON_CHAIN_ID) throw new Error(W.WRONG_CHAIN);
			await this.initialiseContracts()
		} catch(n) {
			if(n.message === W.WRONG_CHAIN || n.message === W.NO_WEB3) throw n;
			if(t < 3) return await new Promise(s => setTimeout(s, 2e3)), this.initialise(t + 1);
			throw n
		}
	}
	async signTransaction(t) {
		if(!this.web3) throw new Error(W.NO_WEB3);
		const a = this.generateSignatureMessage({
			address: this.account,
			nonce: t
		});
		try {
			return {
				signature: await this.web3.eth.personal.sign(a, this.account, "")
			}
		} catch(n) {
			throw de(n)
		}
	}
	generateSignatureMessage({
		address: t,
		nonce: a
	}) {
		return `\u{1F33B} Welcome to Sunflower Land! \u{1F33B}

Click to sign in and accept the Sunflower Land
\u{1F4DC} Terms of Service:
https://docs.sunflower-land.com/support/terms-of-service

This request will not trigger a blockchain
transaction or cost any gas fees.

Your authentication status will reset after
each session.

\u{1F45B} Wallet address:
${t.substring(0,19)}...${t.substring(24)}

\u{1F511} Nonce: ${a}`
	}
	getDefaultChainParam() {
		return {
			chainId: `0x${Number(j.POLYGON_CHAIN_ID).toString(16)}`,
			chainName: "Polygon Mainnet",
			nativeCurrency: {
				name: "MATIC",
				symbol: "MATIC",
				decimals: 18
			},
			rpcUrls: ["https://polygon-rpc.com/"],
			blockExplorerUrls: ["https://polygonscan.com/"]
		}
	}
	async checkDefaultNetwork() {
		var a;
		return await ((a = this.web3) == null ? void 0 : a.eth.getChainId()) === j.POLYGON_CHAIN_ID
	}
	async switchNetwork() {
		await window.ethereum.request({
			method: "wallet_switchEthereumChain",
			params: [{
				chainId: `0x${Number(j.POLYGON_CHAIN_ID).toString(16)}`
			}]
		})
	}
	async addNetwork() {
		try {
			const t = this.getDefaultChainParam();
			await window.ethereum.request({
				method: "wallet_addEthereumChain",
				params: [g({}, t)]
			})
		} catch {
			throw new Error(W.WRONG_CHAIN)
		}
	}
	async initialiseNetwork() {
		try {
			await this.switchNetwork()
		} catch(t) {
			throw t.code === 4902 && await this.addNetwork(), t
		}
	}
	async donateToTheTeam(t) {
		var n;
		const a = await Oe(this.web3);
		try {
			await ((n = this.web3) == null ? void 0 : n.eth.sendTransaction({
				from: J.myAccount,
				to: j.DONATION_ADDRESS,
				value: ge.toHex(ge.toWei(t.toString(), "ether")),
				gasPrice: a
			}))
		} catch(s) {
			throw de(s)
		}
	}
	getFarm() {
		return this.farm
	}
	getInventory() {
		return this.inventory
	}
	getBeta() {
		return this.beta
	}
	getSessionManager() {
		return this.session
	}
	getPair() {
		return this.pair
	}
	getWishingWell() {
		return this.wishingWell
	}
	getToken() {
		return this.token
	}
	get myAccount() {
		return this.account
	}
	async getBlockNumber() {
		var t;
		try {
			const a = await ((t = this.web3) == null ? void 0 : t.eth.getBlockNumber());
			if(!a) throw new Error(W.NETWORK_CONGESTED);
			return a
		} catch(a) {
			throw de(a)
		}
	}
}
const J = new gs,
	ds = j.API_URL;
async function us(A) {
	const t = await window.fetch(`${ds}/farm`, {
		method: "POST",
		headers: {
			"content-type": "application/json;charset=UTF-8",
			Authorization: `Bearer ${A.token}`
		},
		body: JSON.stringify({
			charity: A.charity,
			donation: A.donation,
			captcha: A.captcha
		})
	});
	if(t.status === 429) throw new Error(W.TOO_MANY_REQUESTS);
	if(t.status >= 400) throw new Error(W.FAILED_REQUEST);
	const {
		signature: a,
		charity: n,
		donation: s
	} = await t.json();
	return {
		signature: a,
		charity: n,
		donation: s
	}
}
async function ps({
	donation: A,
	charity: t,
	token: a,
	captcha: n
}) {
	const s = await us({
		donation: A,
		charity: t,
		token: a,
		captcha: n
	});
	return await J.getBeta().createFarm(s), await J.getFarm().getNewFarm()
}
const Es = j.API_URL;
async function ws(A) {
	const t = await window.fetch(`${Es}/login`, {
		method: "POST",
		headers: {
			"content-type": "application/json;charset=UTF-8"
		},
		body: JSON.stringify(g({}, A))
	});
	if(t.status >= 400) throw new Error(W.FAILED_REQUEST);
	const {
		token: a
	} = await t.json();
	return {
		token: a
	}
}
const Pe = `sb_wiz.zpc.v.${window.location.host}-${window.location.pathname}`;

function hs(A) {
	const t = localStorage.getItem(Pe);
	return t ? JSON.parse(t)[A] : null
}

function it(A, t) {
	let a = {};
	const n = localStorage.getItem(Pe);
	n && (a = JSON.parse(n));
	const s = d(g({}, a), {
		[A]: t
	});
	return localStorage.setItem(Pe, JSON.stringify(s))
}

function fA(A) {
	let t = {};
	const a = localStorage.getItem(Pe);
	return a && (t = JSON.parse(a)), delete t[A], localStorage.setItem(Pe, JSON.stringify(t))
}

function lt(A) {
	return Qn(A)
}
const Cs = 1e3 * 60 * 60 * 4;
async function ct() {
	const A = J.myAccount,
		t = hs(A);
	if(t) {
		const r = lt(t.token),
			c = r.exp * 1e3 > Date.now() + Cs,
			m = !!r.userAccess;
		if(c && m) return {
			token: t.token
		}
	}
	const a = Math.floor(Date.now() / 864e5),
		{
			signature: n
		} = await J.signTransaction(a),
		{
			token: s
		} = await ws({
			address: A,
			signature: n
		});
	return it(A, {
		token: s
	}), {
		token: s
	}
}
const Is = j.API_URL;
async function ys(A) {
	const t = await window.fetch(`${Is}/oauth`, {
			method: "POST",
			headers: {
				"content-type": "application/json;charset=UTF-8",
				Authorization: `Bearer ${A.token}`
			},
			body: JSON.stringify({
				code: A.code
			})
		}),
		{
			token: a,
			errorCode: n
		} = await t.json();
	if(t.status >= 400) throw new Error(n || W.FAILED_REQUEST);
	return {
		token: a
	}
}
async function Bs(A) {
	window.history.pushState({}, "", window.location.pathname);
	const t = J.myAccount,
		{
			token: a
		} = await ct(),
		{
			token: n
		} = await ys({
			token: a,
			code: A
		});
	return it(t, {
		token: n
	}), {
		token: n
	}
}

function Qs() {
	const A = "946044940008435803",
		t = encodeURIComponent(j.DISCORD_REDIRECT),
		a = "guilds.members.read";
	window.location.href = `https://discord.com/api/oauth2/authorize?response_type=code&client_id=${A}&scope=${a}&redirect_uri=${t}&prompt=consent`
}
const fs = "0x0000000000000000000000000000000000000000000000000000000000000000",
	mt = () => {
		const A = new URLSearchParams(window.location.search).get("farmId");
		return parseInt(A)
	},
	gt = () => new URLSearchParams(window.location.search).get("code"),
	Ss = () => window.history.pushState({}, "", window.location.pathname),
	xs = AA({
		id: "authMachine",
		initial: "connecting",
		context: {},
		states: {
			connecting: {
				id: "connecting",
				invoke: {
					src: "initMetamask",
					onDone: [{
						target: "checkFarm",
						cond: "hasFarmIdUrl"
					}, {
						target: "oauthorising",
						cond: "hasDiscordCode"
					}, {
						target: "signing"
					}],
					onError: {
						target: "unauthorised",
						actions: "assignErrorMessage"
					}
				}
			},
			signing: {
				invoke: {
					src: "login",
					onDone: {
						target: "connected",
						actions: "assignToken"
					},
					onError: {
						target: "unauthorised",
						actions: "assignErrorMessage"
					}
				}
			},
			oauthorising: {
				invoke: {
					src: "oauthorise",
					onDone: {
						target: "connected.oauthorised",
						actions: "assignToken"
					},
					onError: {
						target: "unauthorised",
						actions: "assignErrorMessage"
					}
				}
			},
			connected: {
				initial: "loadingFarm",
				states: {
					loadingFarm: {
						id: "loadingFarm",
						invoke: {
							src: "loadFarm",
							onDone: [{
								target: "countdown",
								cond: "isFresh"
							}, {
								target: "readyToStart",
								actions: "assignFarm",
								cond: "hasFarm"
							}, {
								target: "checkingSupply"
							}],
							onError: {
								target: "#unauthorised",
								actions: "assignErrorMessage"
							}
						}
					},
					checkingSupply: {
						id: "checkingSupply",
						invoke: {
							src: async() => {
								var t;
								return {
									totalSupply: await ((t = J.getFarm()) == null ? void 0 : t.getTotalSupply())
								}
							},
							onDone: [{
								target: "noFarmLoaded",
								cond: (A, t) => Number(t.data.totalSupply) < 1e5
							}, {
								target: "supplyReached"
							}],
							onError: {
								target: "#unauthorised",
								actions: "assignErrorMessage"
							}
						}
					},
					oauthorised: {
						on: {
							CREATE_FARM: {
								target: "creatingFarm"
							},
							REFRESH: {
								target: "#connecting"
							}
						}
					},
					creatingFarm: {
						invoke: {
							src: "createFarm",
							onDone: {
								target: "#connecting"
							},
							onError: {
								target: "#unauthorised",
								actions: "assignErrorMessage"
							}
						}
					},
					countdown: {
						on: {
							REFRESH: {
								target: "#connecting"
							}
						}
					},
					noFarmLoaded: {
						on: {
							CREATE_FARM: {
								target: "oauthorised"
							},
							CONNECT_TO_DISCORD: {
								target: "noFarmLoaded",
								actions: () => Qs()
							},
							EXPLORE: {
								target: "#exploring"
							}
						}
					},
					farmLoaded: {
						always: {
							target: "readyToStart"
						}
					},
					readyToStart: {
						on: {
							START_GAME: {
								target: "authorised"
							},
							EXPLORE: {
								target: "#exploring"
							}
						}
					},
					authorised: {
						on: {
							REFRESH: {
								target: "#connecting"
							},
							EXPLORE: {
								target: "#exploring"
							}
						}
					},
					supplyReached: {}
				}
			},
			unauthorised: {
				id: "unauthorised"
			},
			exploring: {
				id: "exploring",
				on: {
					LOAD_FARM: {
						target: "#loadingFarm"
					},
					VISIT: {
						target: "checkFarm"
					}
				}
			},
			checkFarm: {
				invoke: {
					src: "visitFarm",
					onDone: {
						target: "visiting",
						actions: "assignFarm",
						cond: "hasFarm"
					},
					onError: {
						target: "unauthorised",
						actions: "assignErrorMessage"
					}
				}
			},
			visiting: {
				on: {
					RETURN: {
						target: "connecting",
						actions: ["resetFarm", "deleteFarmIdUrl"]
					}
				}
			},
			minimised: {}
		},
		on: {
			ACCOUNT_CHANGED: {
				target: "connecting",
				actions: "resetFarm"
			},
			NETWORK_CHANGED: {
				target: "connecting",
				actions: "resetFarm"
			},
			REFRESH: {
				target: "connecting",
				actions: "resetFarm"
			}
		}
	}, {
		services: {
			initMetamask: async() => {
				await J.initialise()
			},
			loadFarm: async() => {
				var s, r;
				const A = await ((s = J.getFarm()) == null ? void 0 : s.getFarms());
				if((A == null ? void 0 : A.length) === 0) return;
				const t = await ((r = J.getBeta()) == null ? void 0 : r.getCreatedAt(J.myAccount)),
					a = A[0],
					n = await J.getSessionManager().getSessionId(a.tokenId);
				return {
					farmId: a.tokenId,
					address: a.account,
					sessionId: n,
					createdAt: t
				}
			},
			createFarm: async(A, t) => {
				const {
					charityAddress: a,
					donation: n,
					captcha: s
				} = t, r = await ps({
					charity: a,
					donation: n,
					token: A.rawToken,
					captcha: s
				});
				return {
					farmId: r.tokenId,
					address: r.account,
					sessionId: fs
				}
			},
			login: async() => {
				const {
					token: A
				} = await ct();
				return {
					token: A
				}
			},
			oauthorise: async() => {
				const A = gt(),
					{
						token: t
					} = await Bs(A);
				return {
					token: t
				}
			},
			visitFarm: async(A, t) => {
				var s;
				const a = mt() || t.farmId,
					n = await ((s = J.getFarm()) == null ? void 0 : s.getFarm(a));
				return {
					farmId: n.tokenId,
					address: n.account,
					sessionId: "",
					createdAt: 0
				}
			}
		},
		actions: {
			assignFarm: _({
				farmId: (A, t) => t.data.farmId,
				address: (A, t) => t.data.address,
				sessionId: (A, t) => t.data.sessionId
			}),
			assignToken: _({
				token: (A, t) => lt(t.data.token),
				rawToken: (A, t) => t.data.token
			}),
			assignErrorMessage: _({
				errorCode: (A, t) => t.data.message
			}),
			resetFarm: _({
				farmId: () => {},
				address: () => {},
				sessionId: () => {},
				token: () => {},
				rawToken: () => {}
			}),
			deleteFarmIdUrl: () => Ss()
		},
		guards: {
			isFresh: (A, t) => {
				var n;
				return((n = t.data) == null ? void 0 : n.farmId) ? Date.now() / 1e3 - t.data.createdAt < 60 : !1
			},
			hasFarm: (A, t) => {
				var a;
				if((a = t.data) == null ? void 0 : a.farmId) {
					const {
						farmId: n
					} = t.data;
					return !!n
				}
				return !!A.farmId
			},
			hasFarmIdUrl: () => !isNaN(mt()),
			hasDiscordCode: () => !!gt()
		}
	}),
	X = e.createContext({}),
	bs = ({
		children: A
	}) => {
		const t = nt(xs);
		return e.createElement(X.Provider, {
			value: {
				authService: t
			}
		}, A)
	};
var dt = "./assets/background.eba37902.png",
	ut = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAAXNSR0IArs4c6QAAAEFJREFUKFNjZIACCRHV/zA2jH7x5jYjiA0mQAquTXBGV8OgVbCXAaSQEaZAKGYGWAMyeLck4z9I4aBURJTviAknANVvP5qHTbsxAAAAAElFTkSuQmCC",
	pt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAAXNSR0IArs4c6QAAAEFJREFUKFNjZIACCRHV/zA2jH7x5jYjiA0mQAouHWhFV8Og51DNAFLICFMgphMG1oAMXl1Z9R+kcFAqIsp3xIQTAPfPP5rMFLUeAAAAAElFTkSuQmCC";
const P = ({
		children: A,
		className: t,
		style: a
	}) => e.createElement(Ae, {
		className: t,
		style: a
	}, e.createElement(he, null, A)),
	he = ({
		children: A,
		className: t,
		style: a
	}) => e.createElement("div", {
		className: Y("bg-brown-300 p-1", t),
		style: g({
			borderStyle: "solid",
			borderWidth: "6px",
			borderImage: `url(${pt}) 30 stretch`,
			borderImageSlice: "25%",
			imageRendering: "pixelated",
			borderImageRepeat: "repeat",
			borderRadius: "20px"
		}, a)
	}, A),
	Ae = ({
		children: A,
		className: t,
		style: a
	}) => e.createElement("div", {
		className: Y("bg-brown-600 p-0.5 text-white shadow-lg", t),
		style: g({
			borderStyle: "solid",
			borderWidth: "6px",
			borderImage: `url(${ut}) 30 stretch`,
			borderImageSlice: "25%",
			imageRendering: "pixelated",
			borderImageRepeat: "repeat",
			borderRadius: "20px"
		}, a)
	}, A);
var le = "./assets/token.e6f7183e.gif";
const Et = "inventory.selectedItems";

function ks(A) {
	const a = aA().filter(s => s !== A),
		n = [A, ...a.slice(0, 2)];
	return localStorage.setItem(Et, JSON.stringify(n)), n
}

function aA() {
	const A = localStorage.getItem(Et);
	return A ? JSON.parse(A) : []
}

function Ns() {
	const A = new Date().getTime();
	return A < 16531884e5 ? .1 : A < 1655475136e3 ? .05 : .025
}

function K(A) {
	const t = Ns();
	return new o(A).mul(t)
}
const te = () => ({
		Sunflower: {
			buyPrice: K(.01),
			sellPrice: K(.02),
			harvestSeconds: 1 * 60,
			name: "Sunflower",
			description: "A sunny flower"
		},
		Potato: {
			buyPrice: K(.1),
			sellPrice: K(.14),
			harvestSeconds: 5 * 60,
			name: "Potato",
			description: "Healthier than you might think."
		},
		Pumpkin: {
			buyPrice: K(.2),
			sellPrice: K(.4),
			harvestSeconds: 30 * 60,
			name: "Pumpkin",
			description: "There's more to pumpkin than pie."
		},
		Carrot: {
			buyPrice: K(.5),
			sellPrice: K(.8),
			harvestSeconds: 60 * 60,
			name: "Carrot",
			description: "They're good for your eyes!"
		},
		Cabbage: {
			buyPrice: K(1),
			sellPrice: K(1.5),
			harvestSeconds: 2 * 60 * 60,
			name: "Cabbage",
			description: "Once a luxury, now a food for many."
		},
		Beetroot: {
			buyPrice: K(2),
			sellPrice: K(2.8),
			harvestSeconds: 4 * 60 * 60,
			name: "Beetroot",
			description: "Good for hangovers!"
		},
		Cauliflower: {
			buyPrice: K(3),
			sellPrice: K(4.25),
			harvestSeconds: 8 * 60 * 60,
			name: "Cauliflower",
			description: "Excellent rice substitute!"
		},
		Parsnip: {
			buyPrice: K(5),
			sellPrice: K(6.5),
			harvestSeconds: 12 * 60 * 60,
			name: "Parsnip",
			description: "Not to be mistaken for carrots."
		},
		Radish: {
			buyPrice: K(7),
			sellPrice: K(9.5),
			harvestSeconds: 24 * 60 * 60,
			name: "Radish",
			description: "Give it some time, it's worth the wait!"
		},
		Wheat: {
			buyPrice: K(5),
			sellPrice: K(7),
			harvestSeconds: 24 * 60 * 60,
			name: "Wheat",
			description: "The most harvested crop in the world."
		}
	}),
	Me = () => ({
		"Sunflower Seed": {
			name: "Sunflower Seed",
			price: K(.01),
			ingredients: [],
			description: "A sunny flower"
		},
		"Potato Seed": {
			name: "Potato Seed",
			price: K(.1),
			ingredients: [],
			description: "Healthier than you might think."
		},
		"Pumpkin Seed": {
			name: "Pumpkin Seed",
			description: "There's more to pumpkin than pie.",
			price: K(.2),
			ingredients: []
		},
		"Carrot Seed": {
			name: "Carrot Seed",
			description: "They're good for your eyes!",
			price: K(.5),
			ingredients: [],
			requires: "Pumpkin Soup"
		},
		"Cabbage Seed": {
			name: "Cabbage Seed",
			description: "Once a luxury, now a food for many.",
			price: K(1),
			ingredients: [],
			requires: "Pumpkin Soup"
		},
		"Beetroot Seed": {
			name: "Beetroot Seed",
			description: "Good for hangovers!",
			price: K(2),
			ingredients: [],
			requires: "Sauerkraut"
		},
		"Cauliflower Seed": {
			name: "Cauliflower Seed",
			description: "Excellent rice substitute!",
			price: K(3),
			ingredients: [],
			requires: "Sauerkraut"
		},
		"Parsnip Seed": {
			name: "Parsnip Seed",
			description: "Not to be mistaken for carrots.",
			price: K(5),
			ingredients: [],
			requires: "Roasted Cauliflower"
		},
		"Radish Seed": {
			name: "Radish Seed",
			description: "Give it some time, it's worth the wait!",
			price: K(7),
			ingredients: [],
			requires: "Roasted Cauliflower"
		},
		"Wheat Seed": {
			name: "Wheat Seed",
			description: "The most harvested crop in the world.",
			price: K(5),
			ingredients: [],
			requires: "Radish Pie"
		}
	});
var I;
(function(A) {
	A.Crops = "crops", A.Water = "water", A.Animals = "animals", A.Shop = "shop", A.Town = "town", A.Forest = "forest", A["Sunflower Statue"] = "sunflower-statue", A["Potato Statue"] = "potato-statue", A["Christmas Tree"] = "christmas-tree", A.Scarecrow = "scarecrow", A["Farm Cat"] = "farm-cat", A["Farm Dog"] = "farm-dog", A.Gnome = "gnome", A["Chicken Coop"] = "chicken-coop", A["Sunflower Tombstone"] = "sunflower-tombstone", A["Sunflower Rock"] = "sunflower-rock", A["Goblin Crown"] = "goblin-crown", A.Fountain = "fountain", A.Flags = "flags", A.Beaver = "beaver"
})(I || (I = {}));
const SA = () => [t => {
		if(!t) return;
		const a = document.getElementById(t);
		a == null || a.scrollIntoView({
			behavior: "smooth",
			block: "center",
			inline: "center"
		})
	}],
	R = {
		"Australian Flag": {
			name: "Australian Flag",
			description: "Australian flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"Belgian Flag": {
			name: "Belgian Flag",
			description: "Belgian flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"Brazilian Flag": {
			name: "Brazilian Flag",
			description: "Brazillian flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 5e3,
			section: I.Flags
		},
		"Chinese Flag": {
			name: "Chinese Flag",
			description: "Chinese flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 5e3,
			section: I.Flags
		},
		"Finnish Flag": {
			name: "Finnish Flag",
			description: "Finnish flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"French Flag": {
			name: "French Flag",
			description: "French flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"German Flag": {
			name: "German Flag",
			description: "German flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"Indian Flag": {
			name: "Indian Flag",
			description: "Indian flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"Indonesian Flag": {
			name: "Indonesian Flag",
			description: "Indonesian flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 5e3,
			section: I.Flags
		},
		"Iranian Flag": {
			name: "Iranian Flag",
			description: "Iranian flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"Italian Flag": {
			name: "Italian Flag",
			description: "Italian flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"Japanese Flag": {
			name: "Japanese Flag",
			description: "Japanese flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"Moroccan Flag": {
			name: "Moroccan Flag",
			description: "Moroccan flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"Dutch Flag": {
			name: "Dutch Flag",
			description: "Dutch flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"Philippine Flag": {
			name: "Philippine Flag",
			description: "Philippine flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 5e3,
			section: I.Flags
		},
		"Polish Flag": {
			name: "Polish Flag",
			description: "Polish flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"Portuguese Flag": {
			name: "Portuguese Flag",
			description: "Portuguese flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"Russian Flag": {
			name: "Russian Flag",
			description: "Russian flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}, {
				item: "Potato",
				amount: new o(100)
			}],
			supply: 1e3,
			section: I.Flags
		},
		"Saudi Arabian Flag": {
			name: "Saudi Arabian Flag",
			description: "Saudi Arabian flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"South Korean Flag": {
			name: "South Korean Flag",
			description: "South Korean flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"Spanish Flag": {
			name: "Spanish Flag",
			description: "Spanish flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"Sunflower Flag": {
			name: "Sunflower Flag",
			description: "Sunflower flag",
			price: new o(50),
			ingredients: [{
				amount: new o(1e3),
				item: "Sunflower"
			}, {
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"Thai Flag": {
			name: "Thai Flag",
			description: "Thai flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"Turkish Flag": {
			name: "Turkish Flag",
			description: "Turkish flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"Ukrainian Flag": {
			name: "Ukrainian Flag",
			description: "Ukrainian flag",
			price: new o(50),
			ingredients: [{
				item: "Sunflower",
				amount: new o(100)
			}, {
				amount: new o(10),
				item: "Wood"
			}],
			supply: 5e3,
			section: I.Flags
		},
		"American Flag": {
			name: "American Flag",
			description: "American flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"Vietnamese Flag": {
			name: "Vietnamese Flag",
			description: "Vietnamese flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"Canadian Flag": {
			name: "Canadian Flag",
			description: "Canadian flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"Singaporean Flag": {
			name: "Singaporean Flag",
			description: "Singaporean flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"British Flag": {
			name: "British Flag",
			description: "British flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"Sierra Leone Flag": {
			name: "Sierra Leone Flag",
			description: "Sierra Leone flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"Romanian Flag": {
			name: "Romanian Flag",
			description: "Romanian flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"Rainbow Flag": {
			name: "Rainbow Flag",
			description: "Rainbow flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"Goblin Flag": {
			name: "Goblin Flag",
			description: "Goblin flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"Pirate Flag": {
			name: "Pirate Flag",
			description: "Pirate flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"Algerian Flag": {
			name: "Algerian Flag",
			description: "Algerian flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"Mexican Flag": {
			name: "Mexican Flag",
			description: "Mexican flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"Dominican Republic Flag": {
			name: "Dominican Republic Flag",
			description: "Dominican Republic flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"Argentinian Flag": {
			name: "Argentinian Flag",
			description: "Argentinian flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"Lithuanian Flag": {
			name: "Lithuanian Flag",
			description: "Lithuanian flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"Malaysian Flag": {
			name: "Malaysian Flag",
			description: "Malaysian flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		},
		"Colombian Flag": {
			name: "Colombian Flag",
			description: "Colombian flag",
			price: new o(50),
			ingredients: [{
				amount: new o(10),
				item: "Wood"
			}],
			supply: 1e3,
			section: I.Flags
		}
	},
	xe = () => ({
		"Pumpkin Soup": {
			name: "Pumpkin Soup",
			description: "A creamy soup that goblins love",
			price: K(3),
			ingredients: [{
				item: "Pumpkin",
				amount: new o(5)
			}],
			limit: 1
		},
		Sauerkraut: {
			name: "Sauerkraut",
			description: "Fermented cabbage",
			price: K(25),
			ingredients: [{
				item: "Cabbage",
				amount: new o(10)
			}]
		},
		"Roasted Cauliflower": {
			name: "Roasted Cauliflower",
			description: "A Goblin's favourite",
			price: K(150),
			ingredients: [{
				item: "Cauliflower",
				amount: new o(30)
			}]
		},
		"Radish Pie": {
			name: "Radish Pie",
			description: "Despised by humans, loved by goblins",
			price: K(300),
			ingredients: [{
				item: "Radish",
				amount: new o(60)
			}]
		}
	}),
	ue = {
		Axe: {
			name: "Axe",
			description: "Used to collect wood",
			price: new o(1),
			ingredients: []
		},
		Pickaxe: {
			name: "Pickaxe",
			description: "Used to collect stone",
			price: new o(1),
			ingredients: [{
				item: "Wood",
				amount: new o(2)
			}]
		},
		"Stone Pickaxe": {
			name: "Stone Pickaxe",
			description: "Used to collect iron",
			price: new o(2),
			ingredients: [{
				item: "Wood",
				amount: new o(3)
			}, {
				item: "Stone",
				amount: new o(3)
			}]
		},
		"Iron Pickaxe": {
			name: "Iron Pickaxe",
			description: "Used to collect gold",
			price: new o(5),
			ingredients: [{
				item: "Wood",
				amount: new o(5)
			}, {
				item: "Iron",
				amount: new o(3)
			}]
		},
		Hammer: {
			name: "Hammer",
			description: "Used to construct buildings",
			price: new o(5),
			ingredients: [{
				item: "Wood",
				amount: new o(5)
			}, {
				item: "Stone",
				amount: new o(5)
			}],
			disabled: !0
		},
		Rod: {
			name: "Rod",
			description: "Used to fish trout",
			price: new o(5),
			ingredients: [{
				item: "Wood",
				amount: new o(5)
			}],
			disabled: !0
		}
	},
	ae = {
		"Sunflower Statue": {
			name: "Sunflower Statue",
			description: "Earn beta access to new features",
			price: new o(5),
			ingredients: [{
				item: "Sunflower",
				amount: new o(1e3)
			}, {
				item: "Stone",
				amount: new o(50)
			}],
			limit: 1,
			supply: 1e3,
			section: I["Sunflower Statue"]
		},
		"Potato Statue": {
			name: "Potato Statue",
			description: "The OG potato hustler flex",
			price: new o(0),
			ingredients: [{
				item: "Potato",
				amount: new o(100)
			}, {
				item: "Stone",
				amount: new o(20)
			}],
			limit: 1,
			supply: 5e3,
			section: I["Potato Statue"]
		},
		"Christmas Tree": {
			name: "Christmas Tree",
			description: "Receive a Santa Airdrop on Christmas day",
			price: new o(50),
			ingredients: [{
				item: "Wood",
				amount: new o(100)
			}, {
				item: "Stone",
				amount: new o(50)
			}],
			supply: 0,
			section: I["Christmas Tree"]
		},
		Gnome: {
			name: "Gnome",
			description: "A lucky gnome",
			price: new o(10),
			ingredients: [],
			supply: 0,
			section: I.Gnome
		},
		"Sunflower Tombstone": {
			name: "Sunflower Tombstone",
			description: "In memory of Sunflower Farmers",
			price: new o(0),
			ingredients: [],
			supply: 0,
			section: I["Sunflower Tombstone"]
		},
		"Sunflower Rock": {
			name: "Sunflower Rock",
			description: "The game that broke Polygon",
			price: new o(100),
			ingredients: [{
				item: "Sunflower",
				amount: new o(1e4)
			}, {
				item: "Iron",
				amount: new o(100)
			}],
			supply: 150,
			section: I["Sunflower Rock"]
		},
		"Goblin Crown": {
			name: "Goblin Crown",
			description: "Summon the leader of the Goblins",
			price: new o(5),
			ingredients: [],
			supply: 5e3,
			section: I["Goblin Crown"]
		},
		Fountain: {
			name: "Fountain",
			description: "A relaxing fountain for your farm",
			price: new o(5),
			ingredients: [{
				amount: new o(1),
				item: "Stone"
			}],
			supply: 1e4,
			section: I.Fountain
		},
		"Woody the Beaver": {
			name: "Woody the Beaver",
			description: "Increase wood drops by 20%",
			price: new o(50),
			ingredients: [{
				amount: new o(200),
				item: "Wood"
			}],
			supply: 5e4,
			section: I.Beaver
		},
		"Apprentice Beaver": {
			name: "Apprentice Beaver",
			description: "Trees recover 50% faster",
			price: new o(100),
			ingredients: [{
				amount: new o(500),
				item: "Wood"
			}, {
				amount: new o(1),
				item: "Woody the Beaver"
			}],
			supply: 5e3,
			section: I.Beaver
		},
		"Foreman Beaver": {
			name: "Foreman Beaver",
			description: "Cut trees without axes",
			price: new o(0),
			ingredients: [{
				amount: new o(5e3),
				item: "Wood"
			}, {
				amount: new o(1),
				item: "Apprentice Beaver"
			}],
			supply: 300,
			section: I.Beaver
		}
	},
	be = {
		Nancy: {
			name: "Nancy",
			description: "Keeps a few crows away. Crops grow 15% faster",
			price: new o(10),
			ingredients: [{
				item: "Wheat",
				amount: new o(100)
			}, {
				item: "Wood",
				amount: new o(50)
			}],
			supply: 5e4
		},
		Scarecrow: {
			name: "Scarecrow",
			description: "A goblin scarecrow. Yield 20% more crops",
			price: new o(50),
			ingredients: [{
				item: "Wheat",
				amount: new o(400)
			}, {
				item: "Wood",
				amount: new o(50)
			}, {
				item: "Nancy",
				amount: new o(1)
			}],
			limit: 1,
			supply: 5e3,
			disabled: !0,
			section: I.Scarecrow
		},
		Kuebiko: {
			name: "Kuebiko",
			description: "Even the shopkeeper is scared of this scarecrow. Seeds are free",
			price: new o(300),
			ingredients: [{
				item: "Wheat",
				amount: new o(600)
			}, {
				item: "Scarecrow",
				amount: new o(1)
			}],
			supply: 200
		},
		"Golden Cauliflower": {
			name: "Golden Cauliflower",
			description: "Double the rewards from cauliflowers",
			price: new o(100),
			ingredients: [{
				item: "Cauliflower",
				amount: new o(500)
			}, {
				item: "Gold",
				amount: new o(100)
			}],
			supply: 100
		},
		"Mysterious Parsnip": {
			name: "Mysterious Parsnip",
			description: "Parsnips grow 50% faster",
			price: new o(0),
			ingredients: [{
				item: "Parsnip",
				amount: new o(500)
			}, {
				item: "Gold",
				amount: new o(50)
			}],
			supply: 500
		},
		"Carrot Sword": {
			name: "Carrot Sword",
			description: "Increase chance of a mutant crop appearing",
			price: new o(50),
			ingredients: [{
				item: "Carrot",
				amount: new o(2e3)
			}],
			supply: 1e3
		}
	},
	De = {
		"Chicken Coop": {
			name: "Chicken Coop",
			description: "Collect 3x the amount of eggs",
			price: new o(50),
			ingredients: [{
				item: "Wood",
				amount: new o(100)
			}, {
				item: "Gold",
				amount: new o(50)
			}, {
				item: "Egg",
				amount: new o(2e3)
			}],
			supply: 1e3,
			limit: 1,
			section: I["Chicken Coop"]
		},
		"Farm Cat": {
			name: "Farm Cat",
			description: "Keep the rats away",
			price: new o(50),
			ingredients: [],
			supply: 0,
			section: I["Farm Cat"]
		},
		"Farm Dog": {
			name: "Farm Dog",
			description: "Herd sheep 4x faster",
			price: new o(75),
			ingredients: [],
			supply: 0,
			section: I["Farm Dog"]
		},
		"Gold Egg": {
			name: "Gold Egg",
			description: "A rare egg, what lays inside?",
			price: new o(0),
			ingredients: [{
				item: "Egg",
				amount: new o(150)
			}, {
				item: "Gold",
				amount: new o(50)
			}],
			supply: 250
		}
	},
	wt = {
		Chicken: {
			name: "Chicken",
			description: "Produces eggs. Requires wheat for feeding",
			price: new o(5),
			ingredients: [],
			disabled: !0
		},
		Cow: {
			name: "Cow",
			description: "Produces milk. Requires wheat for feeding",
			price: new o(50),
			ingredients: [],
			disabled: !0
		},
		Pig: {
			name: "Pig",
			description: "Produces manure. Requires wheat for feeding",
			price: new o(20),
			ingredients: [],
			disabled: !0
		},
		Sheep: {
			name: "Sheep",
			description: "Produces wool. Requires wheat for feeding",
			price: new o(20),
			ingredients: [],
			disabled: !0
		}
	},
	Ms = () => g(g(g(g(g(g(g(g({}, ue), ae), De), be), Me()), xe()), wt), R);

function xA() {
	if("maxTouchPoints" in navigator) return navigator.maxTouchPoints > 0; {
		const A = matchMedia("(pointer:coarse)");
		if(A && A.media === "(pointer:coarse)") return !!A.matches;
		if("orientation" in window) return !0; {
			const t = navigator.userAgent;
			return /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(t) || /\b(Android|Windows Phone|iPad|iPod)\b/i.test(t)
		}
	}
}
const Rs = () => {
	const [A, t] = i.exports.useState(!1);
	return i.exports.useEffect(() => {
		t(xA())
	}, []), [A]
};

function Fs(A, t, a) {
	const n = (t.x - A.x) * (t.x - A.x) + (t.y - A.y) * (t.y - A.y);
	if(n == 0) return !1;
	const s = ((A.y - a.y) * (t.x - A.x) - (A.x - a.x) * (t.y - A.y)) / n;
	return Math.abs(s) * Math.sqrt(n)
}
class vs {
	constructor() {
		v(this, "movements", []);
		v(this, "tracks", 0)
	}
	track(t) {
		// if(xA()) return !0;
		// this.movements.push({
		// 	x: t.clientX,
		// 	y: t.clientY
		// })
	}
	calculate() {
		// try {
		// 	if(xA()) return !0;
		// 	let t = !0;
		// 	const a = Math.floor(this.movements.length / 10) || 1;
		// 	let n = [];
		// 	for(let c = 0; c < this.movements.length; c += a) n = [...n, this.movements[c]];
		// 	return(c => c.every(m => Fs(c[0], c[c.length - 1], m) === 0))(n) ? this.tracks += 3 : this.tracks > 0 && (this.tracks = 0), this.tracks > 10 && (t = !1), this.movements = [], t
		// } catch(t) {
		// 	return console.log({
		// 		e: t
		// 	}), !0
		// }
		return true;
	}
	start() {
		this.movements = [];
		//this.movements = [], document.addEventListener("mousemove", this.track.bind(this))
	}
	pause() {
		//document.removeEventListener("mousemove", this.track)
	}
}
const nA = new vs,
	Ds = ["Sunflower Seed", "Potato Seed", "Beetroot Seed", "Cabbage Seed", "Carrot Seed", "Cauliflower Seed", "Pumpkin Seed", "Parsnip Seed", "Radish Seed", "Wheat Seed"];

function sA(A) {
	return Ds.includes(A)
}
const bA = (A, t) => {
	var n, s, r, c;
	let a = te()[A].harvestSeconds;
	return A === "Parsnip" && ((n = t["Mysterious Parsnip"]) == null ? void 0 : n.gte(1)) && (a = a * .5), (((s = t.Nancy) == null ? void 0 : s.greaterThanOrEqualTo(1)) || ((r = t.Scarecrow) == null ? void 0 : r.greaterThanOrEqualTo(1)) || ((c = t.Kuebiko) == null ? void 0 : c.greaterThanOrEqualTo(1))) && (a = a * .85), a
};

function Gs({
	crop: A,
	inventory: t,
	createdAt: a
}) {
	const n = te()[A].harvestSeconds,
		s = bA(A, t),
		r = n - s;
	return a - r * 1e3
}

function Ys({
	crop: A,
	inventory: t
}) {
	var n, s;
	let a = 1;
	return A === "Cauliflower" && ((n = t["Golden Cauliflower"]) == null ? void 0 : n.gte(1)) && (a *= 2), ((s = t.Scarecrow) == null ? void 0 : s.gte(1)) && (a *= 1.2), a
}

function Os({
	state: A,
	action: t,
	createdAt: a = Date.now()
}) {
	const n = g({}, A.fields);
	if(t.index < 0) throw new Error("Field does not exist");
	if(!Number.isInteger(t.index)) throw new Error("Field does not exist");
	if(t.index >= 5 && t.index <= 9 && !A.inventory["Pumpkin Soup"]) throw new Error("Goblin land!");
	if(t.index >= 10 && t.index <= 15 && !A.inventory.Sauerkraut) throw new Error("Goblin land!");
	if(t.index >= 16 && t.index <= 21 && !A.inventory["Roasted Cauliflower"]) throw new Error("Goblin land!");
	if(t.index > 21) throw new Error("Field does not exist");
	if(n[t.index]) throw new Error("Crop is already planted");
	if(!t.item) throw new Error("No seed selected");
	if(!sA(t.item)) throw new Error("Not a seed");
	const r = A.inventory[t.item] || new o(0);
	if(r.lessThan(1)) throw new Error("Not enough seeds");
	if(!nA.calculate()) throw new Error("Invalid plant");
	const c = n,
		m = t.item.split(" ")[0];
	return c[t.index] = {
		plantedAt: Gs({
			crop: m,
			inventory: A.inventory,
			createdAt: a
		}),
		name: m,
		multiplier: Ys({
			crop: m,
			inventory: A.inventory
		})
	}, d(g({}, A), {
		inventory: d(g({}, A.inventory), {
			[t.item]: r.sub(1)
		}),
		fields: c
	})
}
const Us = Object.keys(g(g(g({}, ue), Me()), xe()));

function Js(A, t) {
	return t.includes(A)
}

function ht(A, t) {
	var a;
	return sA(A.name) && ((a = t.Kuebiko) == null ? void 0 : a.gte(1)) ? new o(0) : A.price
}

function Ts({
	state: A,
	action: t,
	available: a
}) {
	var h, w;
	if(!Js(t.item, a || Us)) throw new Error(`This item is not craftable: ${t.item}`);
	const n = Ms()[t.item];
	if(n.disabled) throw new Error("This item is disabled");
	if(t.amount < 1) throw new Error("Invalid amount");
	if((h = A.stock[t.item]) == null ? void 0 : h.lt(t.amount)) throw new Error("Not enough stock");
	const r = ht(n, A.inventory).mul(t.amount);
	if(n.requires && !A.inventory[n.requires]) throw new Error(`Missing ${n.requires}`);
	if(A.balance.lessThan(r)) throw new Error("Insufficient tokens");
	const m = n.ingredients.reduce((E, B) => {
			const Q = E[B.item] || new o(0),
				p = B.amount.mul(t.amount);
			if(Q.lessThan(p)) throw new Error(`Insufficient ingredient: ${B.item}`);
			return d(g({}, E), {
				[B.item]: Q.sub(p)
			})
		}, A.inventory),
		u = A.inventory[t.item] || new o(0);
	return d(g({}, A), {
		balance: A.balance.sub(r),
		inventory: d(g({}, m), {
			[t.item]: u.add(t.amount)
		}),
		stock: d(g({}, A.stock), {
			[t.item]: (w = A.stock[t.item]) == null ? void 0 : w.minus(t.amount)
		})
	})
}
const Ct = (A, t) => {
		var n;
		let a = A.sellPrice;
		return((n = t["Green Thumb"]) == null ? void 0 : n.greaterThanOrEqualTo(1)) && (a = a.mul(1.05)), a
	},
	Ks = A => {
		var t;
		return((t = A["Green Thumb"]) == null ? void 0 : t.greaterThanOrEqualTo(1)) || !1
	},
	It = ({
		item: A,
		inventory: t
	}) => {
		var a, n, s, r, c, m, u;
		return !!(sA(A) && (((a = t.Nancy) == null ? void 0 : a.greaterThanOrEqualTo(1)) || ((n = t.Scarecrow) == null ? void 0 : n.greaterThanOrEqualTo(1)) || ((s = t.Kuebiko) == null ? void 0 : s.greaterThanOrEqualTo(1))) || A === "Carrot Seed" && ((r = t["Carrot Sword"]) == null ? void 0 : r.greaterThanOrEqualTo(1)) || A === "Parsnip Seed" && ((c = t["Mysterious Parsnip"]) == null ? void 0 : c.greaterThanOrEqualTo(1)) || A === "Parsnip Seed" && ((m = t["Mysterious Parsnip"]) == null ? void 0 : m.greaterThanOrEqualTo(1)) || A === "Cauliflower Seed" && ((u = t["Golden Cauliflower"]) == null ? void 0 : u.greaterThanOrEqualTo(1)))
	};

function Ls(A) {
	return A in te()
}

function Ps({
	state: A,
	action: t
}) {
	if(!Ls(t.item)) throw new Error("Not for sale");
	if(t.amount <= 0) throw new Error("Invalid amount");
	const a = te()[t.item],
		n = A.inventory[t.item] || new o(0);
	if(n.lessThan(t.amount)) throw new Error("Insufficient crops to sell");
	const s = Ct(a, A.inventory);
	return d(g({}, A), {
		balance: A.balance.add(s.mul(t.amount)),
		inventory: d(g({}, A.inventory), {
			[a.name]: n.sub(1 * t.amount)
		})
	})
}

function Vs({
	state: A,
	action: t,
	createdAt: a = Date.now()
}) {
	const n = g({}, A.fields);
	if(t.index < 0) throw new Error("Field does not exist");
	if(!Number.isInteger(t.index)) throw new Error("Field does not exist");
	if(t.index >= 5 && t.index <= 9 && !A.inventory["Pumpkin Soup"]) throw new Error("Goblin land!");
	if(t.index >= 10 && t.index <= 15 && !A.inventory.Sauerkraut) throw new Error("Goblin land!");
	if(t.index >= 16 && t.index <= 21 && !A.inventory["Roasted Cauliflower"]) throw new Error("Goblin land!");
	if(t.index > 21) throw new Error("Field does not exist");
	const s = n[t.index];
	if(!s) throw new Error("Nothing was planted");
	const r = te()[s.name];
	if(a - s.plantedAt < r.harvestSeconds * 1e3) throw new Error("Not ready");
	if(!nA.calculate()) throw new Error("Invalid harvest");
	const c = n;
	delete c[t.index];
	const m = A.inventory[s.name] || new o(0),
		u = s.multiplier || 1,
		h = d(g({}, A.inventory), {
			[s.name]: m.add(u)
		});
	return d(g({}, A), {
		fields: c,
		inventory: h
	})
}
const yt = 24 * 60 * 60;
var Ve;
(function(A) {
	A.NO_PICKAXES = "No pickaxes left", A.NO_ROCK = "No rock", A.STILL_GROWING = "Rock is still recovering"
})(Ve || (Ve = {}));

function Bt(A, t = Date.now()) {
	const a = yt;
	return t - A.minedAt > a * 1e3
}

function Hs({
	state: A,
	action: t,
	createdAt: a = Date.now()
}) {
	const n = A.gold[t.index];
	if(!n) throw new Error(Ve.NO_ROCK);
	if(!Bt(n, a)) throw new Error(Ve.STILL_GROWING);
	const s = A.inventory["Iron Pickaxe"] || new o(0);
	if(s.lessThan(1)) throw new Error(Ve.NO_PICKAXES);
	const r = A.inventory.Gold || new o(0);
	return d(g({}, A), {
		inventory: d(g({}, A.inventory), {
			"Iron Pickaxe": s.sub(1),
			Gold: r.add(n.amount)
		}),
		gold: d(g({}, A.gold), {
			[t.index]: {
				minedAt: Date.now(),
				amount: new o(2)
			}
		})
	})
}
const Qt = 4 * 60 * 60;
var He;
(function(A) {
	A.NO_PICKAXES = "No pickaxes left", A.NO_ROCK = "No rock", A.STILL_GROWING = "Rock is still recovering"
})(He || (He = {}));

function ft(A, t = Date.now()) {
	const a = Qt;
	return t - A.minedAt > a * 1e3
}

function Zs({
	state: A,
	action: t,
	createdAt: a = Date.now()
}) {
	const n = A.stones[t.index];
	if(!n) throw new Error(He.NO_ROCK);
	if(!ft(n, a)) throw new Error(He.STILL_GROWING);
	const s = A.inventory.Pickaxe || new o(0);
	if(s.lessThan(1)) throw new Error(He.NO_PICKAXES);
	const r = A.inventory.Stone || new o(0);
	return d(g({}, A), {
		inventory: d(g({}, A.inventory), {
			Pickaxe: s.sub(1),
			Stone: r.add(n.amount)
		}),
		stones: d(g({}, A.stones), {
			[t.index]: {
				minedAt: Date.now(),
				amount: new o(2)
			}
		})
	})
}
const St = 12 * 60 * 60;
var Ze;
(function(A) {
	A.NO_PICKAXES = "No pickaxes left", A.NO_ROCK = "No rock", A.STILL_GROWING = "Rock is still recovering"
})(Ze || (Ze = {}));

function xt(A, t = Date.now()) {
	const a = St;
	return t - A.minedAt > a * 1e3
}

function Ws({
	state: A,
	action: t,
	createdAt: a = Date.now()
}) {
	const n = A.iron[t.index];
	if(!n) throw new Error(Ze.NO_ROCK);
	if(!xt(n, a)) throw new Error(Ze.STILL_GROWING);
	const s = A.inventory["Stone Pickaxe"] || new o(0);
	if(s.lessThan(1)) throw new Error(Ze.NO_PICKAXES);
	const r = A.inventory.Iron || new o(0);
	return d(g({}, A), {
		inventory: d(g({}, A.inventory), {
			"Stone Pickaxe": s.sub(1),
			Iron: r.add(n.amount)
		}),
		iron: d(g({}, A.iron), {
			[t.index]: {
				minedAt: Date.now(),
				amount: new o(2)
			}
		})
	})
}
var Ge;
(function(A) {
	A.MISSING_AXE = "No axe", A.NO_AXES = "No axes left", A.NO_TREE = "No tree", A.STILL_GROWING = "Tree is still growing"
})(Ge || (Ge = {}));
const rA = 2 * 60 * 60;

function kA(A, t = Date.now()) {
	return t - A.choppedAt > rA * 1e3
}

function js({
	inventory: A,
	createdAt: t
}) {
	var a;
	return((a = A["Apprentice Beaver"]) == null ? void 0 : a.gte(1)) ? t - rA / 2 * 1e3 : t
}

function bt(A) {
	return A["Foreman Beaver"] ? new o(0) : A.Logger ? new o(.5) : new o(1)
}

function zs({
	state: A,
	action: t,
	createdAt: a = Date.now()
}) {
	const n = bt(A.inventory);
	if(t.item !== "Axe" && n.gt(0)) throw new Error(Ge.MISSING_AXE);
	const s = A.inventory.Axe || new o(0);
	if(s.lessThan(n)) throw new Error(Ge.NO_AXES);
	const r = A.trees[t.index];
	if(!r) throw new Error(Ge.NO_TREE);
	if(!kA(r, a)) throw new Error(Ge.STILL_GROWING);
	const c = A.inventory.Wood || new o(0);
	return d(g({}, A), {
		inventory: d(g({}, A.inventory), {
			Axe: s.sub(n),
			Wood: c.add(r.wood)
		}),
		trees: d(g({}, A.trees), {
			[t.index]: {
				choppedAt: js({
					createdAt: a,
					inventory: A.inventory
				}),
				wood: new o(3)
			}
		})
	})
}

function qs({
	state: A,
	action: t,
	createdAt: a = Date.now()
}) {
	const n = A.fields[t.fieldIndex];
	if(!n) throw new Error("Field does not exist");
	if(!n.reward) throw new Error("Field does not have a reward");
	const s = te()[n.name];
	if(a - n.plantedAt < s.harvestSeconds * 1e3) throw new Error("Not ready");
	const r = n.reward.items[0],
		c = g({}, A.inventory),
		m = c[r.name] || new o(0);
	return c[r.name] = m.add(r.amount), delete A.fields[t.fieldIndex].reward, d(g({}, A), {
		inventory: c
	})
}
const kt = {
	"item.planted": Os,
	"item.harvested": Vs,
	"item.crafted": Ts,
	"item.sell": Ps,
	"stone.mined": Zs,
	"iron.mined": Ws,
	"gold.mined": Hs,
	"tree.chopped": zs,
	"reward.opened": qs
};

function Xs(A, t) {
	const a = kt[t.type];
	if(!a) throw new Error(`Unknown event type: ${t}`);
	return a({
		state: A,
		action: t
	})
}

function NA(A) {
	return {
		inventory: Object.keys(A.inventory).reduce((t, a) => d(g({}, t), {
			[a]: new o(A.inventory[a])
		}), {}),
		stock: Object.keys(A.stock).reduce((t, a) => d(g({}, t), {
			[a]: new o(A.stock[a])
		}), {}),
		trees: Object.keys(A.trees).reduce((t, a) => d(g({}, t), {
			[a]: d(g({}, A.trees[a]), {
				wood: new o(A.trees[a].wood)
			})
		}), {}),
		stones: Object.keys(A.stones).reduce((t, a) => d(g({}, t), {
			[a]: d(g({}, A.stones[a]), {
				amount: new o(A.stones[a].amount)
			})
		}), {}),
		iron: Object.keys(A.iron).reduce((t, a) => d(g({}, t), {
			[a]: d(g({}, A.iron[a]), {
				amount: new o(A.iron[a].amount)
			})
		}), {}),
		gold: Object.keys(A.gold).reduce((t, a) => d(g({}, t), {
			[a]: d(g({}, A.gold[a]), {
				amount: new o(A.gold[a].amount)
			})
		}), {}),
		skills: {
			farming: new o(A.skills.farming),
			gathering: new o(A.skills.gathering)
		},
		balance: new o(A.balance),
		fields: A.fields,
		id: A.id
	}
}

function MA(A, t) {
	return Object.keys(A).reduce((a, n) => {
		const s = Number(n),
			r = A[s];
		return d(g({}, a), {
			[s]: d(g({}, r), {
				amount: t[s].amount
			})
		})
	}, {})
}

function $s(A, t) {
	if(!A) return t;
	try {
		return d(g({}, t), {
			fields: Object.keys(t.fields).reduce((a, n) => {
				const s = Number(n),
					r = t.fields[s];
				return d(g({}, a), {
					[s]: d(g({}, r), {
						reward: A.fields[s].reward
					})
				})
			}, {}),
			trees: Object.keys(t.trees).reduce((a, n) => {
				const s = Number(n),
					r = t.trees[s];
				return d(g({}, a), {
					[s]: d(g({}, r), {
						wood: A.trees[s].wood
					})
				})
			}, {}),
			stones: MA(t.stones, A.stones),
			iron: MA(t.iron, A.iron),
			gold: MA(t.gold, A.gold)
		})
	} catch(a) {
		return console.log({
			e: a
		}), t
	}
}
const _s = j.API_URL;
async function er(A) {
	try {
		const t = await window.fetch(`${_s}/session`, {
			method: "POST",
			headers: {
				"content-type": "application/json;charset=UTF-8",
				Authorization: `Bearer ${A.token}`,
				accept: "application/json"
			},
			body: JSON.stringify({
				sessionId: A.sessionId,
				farmId: A.farmId
			})
		});
		if(t.status === 429) throw new Error(W.TOO_MANY_REQUESTS);
		t.status === 401 && fA(J.myAccount);
		const {
			farm: a,
			startedAt: n,
			isBlacklisted: s,
			whitelistedAt: r
		} = await t.json(), c = new Date(n);
		let m = 0;
		return Math.abs(c.getTime() - Date.now()) > 1e3 * 30 && (console.log("Not in sync!", c.getTime() - Date.now()), m = c.getTime() - Date.now()), {
			offset: m,
			game: NA(a),
			isBlacklisted: s,
			whitelistedAt: r
		}
	} catch(t) {
		throw console.error({
			e: t
		}), new Error(W.TOO_MANY_REQUESTS)
	}
}
const l = 42,
	Nt = {
		"Sunflower Seed": new o(400),
		"Potato Seed": new o(200),
		"Pumpkin Seed": new o(100),
		"Carrot Seed": new o(100),
		"Cabbage Seed": new o(90),
		"Beetroot Seed": new o(80),
		"Cauliflower Seed": new o(80),
		"Parsnip Seed": new o(40),
		"Radish Seed": new o(40),
		"Wheat Seed": new o(40),
		Axe: new o(50),
		Pickaxe: new o(30),
		"Stone Pickaxe": new o(10),
		"Iron Pickaxe": new o(5),
		"Pumpkin Soup": new o(1),
		Sauerkraut: new o(1),
		"Roasted Cauliflower": new o(1)
	},
	Ar = {
		0: {
			name: "Sunflower",
			plantedAt: 0
		},
		1: {
			name: "Sunflower",
			plantedAt: 0
		},
		2: {
			name: "Sunflower",
			plantedAt: 0
		},
		5: {
			name: "Carrot",
			plantedAt: 0
		},
		6: {
			name: "Cabbage",
			plantedAt: 0
		},
		10: {
			name: "Cauliflower",
			plantedAt: 0
		},
		11: {
			name: "Beetroot",
			plantedAt: 0
		},
		16: {
			name: "Parsnip",
			plantedAt: 0
		},
		17: {
			name: "Radish",
			plantedAt: 0
		}
	},
	Mt = {
		0: {
			wood: new o(3),
			choppedAt: 0
		},
		1: {
			wood: new o(4),
			choppedAt: 0
		},
		2: {
			wood: new o(5),
			choppedAt: 0
		},
		3: {
			wood: new o(5),
			choppedAt: 0
		},
		4: {
			wood: new o(3),
			choppedAt: 0
		}
	},
	Rt = {
		0: {
			amount: new o(2),
			minedAt: 0
		},
		1: {
			amount: new o(3),
			minedAt: 0
		},
		2: {
			amount: new o(4),
			minedAt: 0
		}
	},
	Ft = {
		0: {
			amount: new o(2),
			minedAt: 0
		},
		1: {
			amount: new o(3),
			minedAt: 0
		}
	},
	vt = {
		0: {
			amount: new o(2),
			minedAt: 0
		}
	},
	tr = {
		balance: new o(ge.fromWei("0")),
		fields: Ar,
		inventory: {
			Sunflower: new o(5),
			Potato: new o(12),
			Scarecrow: new o(4)
		},
		stock: Nt,
		trees: Mt,
		stones: Rt,
		iron: Ft,
		gold: vt,
		skills: {
			farming: new o(0),
			gathering: new o(0)
		}
	},
	Dt = {
		balance: new o(ge.fromWei("0")),
		fields: {},
		inventory: {},
		stock: {},
		trees: Mt,
		stones: Rt,
		iron: Ft,
		gold: vt,
		skills: {
			farming: new o(0),
			gathering: new o(0)
		}
	},
	ar = j.API_URL;

function nr(A) {
	return A.reduce((t, a, n) => {
		if(n > 0) {
			const s = t[t.length - 1];
			if((a.type === "item.crafted" && s.type === "item.crafted" || a.type === "item.sell" && s.type === "item.sell") && a.item === s.item) return [...t.slice(0, -1), d(g({}, a), {
				amount: s.amount + a.amount
			})]
		}
		return [...t, a]
	}, [])
}

function sr(A, t) {
	return A.map(a => d(g({}, a), {
		createdAt: new Date(a.createdAt.getTime() + t).toISOString()
	}))
}
async function oA(A) {
	const t = nr(A.actions),
		a = sr(t, A.offset),
		n = await window.fetch(`${ar}/autosave`, {
			method: "POST",
			headers: {
				"content-type": "application/json;charset=UTF-8",
				Authorization: `Bearer ${A.token}`,
				"X-Fingerprint": A.fingerprint
			},
			body: JSON.stringify({
				farmId: A.farmId,
				sessionId: A.sessionId,
				actions: a
			})
		});
	if(n.status === 401 && fA(J.myAccount), n.status === 429) throw new Error(W.TOO_MANY_REQUESTS);
	if(n.status !== 200 || !n.ok) throw new Error("Could not save game");
	const s = await n.json(),
		r = NA(s.farm);
	return {
		verified: !0,
		farm: r
	}
}
const rr = j.API_URL;
async function or(A) {
	const t = await window.fetch(`${rr}/mint`, {
		method: "POST",
		headers: {
			"content-type": "application/json;charset=UTF-8",
			Authorization: `Bearer ${A.token}`
		},
		body: JSON.stringify({
			farmId: A.farmId,
			sessionId: A.sessionId,
			item: A.item,
			captcha: A.captcha
		})
	});
	if(t.status === 429) throw new Error(W.TOO_MANY_REQUESTS);
	if(t.status !== 200 || !t.ok) throw new Error("Could not mint your object");
	const a = await t.json();
	return {
		sessionId: await J.getSessionManager().sync(a),
		verified: !0
	}
}
const ir = j.API_URL;
async function lr({
	farmId: A,
	sessionId: t,
	token: a,
	captcha: n
}) {
	const s = await window.fetch(`${ir}/sync`, {
		method: "POST",
		headers: {
			"content-type": "application/json;charset=UTF-8",
			Authorization: `Bearer ${a}`
		},
		body: JSON.stringify({
			sessionId: t,
			farmId: A,
			captcha: n
		})
	});
	if(s.status === 429) throw new Error(W.TOO_MANY_REQUESTS);
	if(s.status >= 400) throw new Error(W.FAILED_REQUEST);
	const r = await s.json(),
		c = await J.getSessionManager().sync(r);
	return {
		verified: !0,
		sessionId: c
	}
}
const cr = j.API_URL;
async function mr({
	farmId: A,
	sessionId: t,
	sfl: a,
	ids: n,
	amounts: s,
	token: r,
	captcha: c
}) {
	const m = await window.fetch(`${cr}/withdraw`, {
		method: "POST",
		headers: {
			"content-type": "application/json;charset=UTF-8",
			Authorization: `Bearer ${r}`
		},
		body: JSON.stringify({
			sessionId: t,
			farmId: A,
			sfl: a,
			ids: n,
			amounts: s,
			captcha: c
		})
	});
	if(m.status === 429) throw new Error(W.TOO_MANY_REQUESTS);
	if(m.status >= 400) throw new Error(W.FAILED_REQUEST);
	const u = await m.json();
	return {
		sessionId: await J.getSessionManager().withdraw(u),
		verified: !0
	}
}
const pe = {
	Wood: {
		description: "Used to craft items"
	},
	Stone: {
		description: "Used to craft items"
	},
	Iron: {
		description: "Used to craft items"
	},
	Gold: {
		description: "Used to craft items"
	},
	Egg: {
		description: "Used to craft items"
	},
	Chicken: {
		description: "Used to lay eggs"
	}
};

function Gt(A) {
	return A in te() || A in pe || A in Me() || A in ue ? "ether" : "wei"
}

function gr(A) {
	const t = Object.keys(ve);
	return A.reduce((n, s, r) => {
		const c = Gt(t[r]),
			m = new o(ge.fromWei(s, c));
		return m.equals(0) ? n : d(g({}, n), {
			[t[r]]: m
		})
	}, {})
}

function dr(A) {
	const t = {
			name: "Sunflower",
			plantedAt: 0
		},
		a = {},
		n = [];
	A["Pumpkin Soup"] && n.push(5, 6, 7, 8, 9), A.Sauerkraut && n.push(10, 11, 12, 13, 14, 15), A["Roasted Cauliflower"] && n.push(16, 17, 18, 19, 20, 21);
	for(let s = 0; s < 22; s += 1)(s >= 0 && s <= 4 || n.includes(s)) && (a[s] = t);
	return a
}
const ur = j.API_URL;
async function pr(A) {
	const t = `${ur}/nfts/farm/${A}`;
	return await (await window.fetch(t, {
		method: "GET",
		headers: {
			"content-type": "application/json;charset=UTF-8"
		}
	})).json()
}
async function RA({
	id: A,
	farmAddress: t
}) {
	const a = await J.getToken().balanceOf(t),
		n = await J.getInventory().getBalances(t),
		s = gr(n),
		r = dr(s),
		m = (await pr(A)).image.includes("blacklisted");
	return {
		game: d(g({}, Dt), {
			balance: new o(ge.fromWei(a)),
			farmAddress: t,
			fields: r,
			inventory: s
		}),
		isBlacklisted: m
	}
}
async function Er() {
	let A = "0x123";
	try {
		A = await new Promise((t, a) => {
			window.botdPromise.then(n => n.detect()).then(n => t(n.requestId)).catch(a)
		})
	} catch {}
	return A
}
const wr = j.API_URL;
async function hr(A) {
	const a = await (await window.fetch(`${wr}/autosave`, {
		method: "POST",
		headers: {
			"content-type": "application/json;charset=UTF-8",
			Authorization: `Bearer ${A.token}`,
			"X-Fingerprint": A.fingerprint
		},
		body: JSON.stringify({
			farmId: A.farmId,
			sessionId: A.sessionId,
			actions: [{
				type: "skill.learned",
				skill: A.skill
			}]
		})
	})).json();
	return {
		farm: NA(a.farm)
	}
}
const Yt = Object.keys(kt).reduce((A, t) => d(g({}, A), {
	[t]: {
		actions: _((a, n) => ({
			state: Xs(a.state, n),
			actions: [...a.actions, d(g({}, n), {
				createdAt: new Date
			})]
		}))
	}
}), {});

function Cr(A) {
	const t = () => A.sessionId || !A.address ? "playing" : "readonly";
	return AA({
		id: "gameMachine",
		initial: "loading",
		context: {
			actions: [],
			state: Dt,
			sessionId: A.sessionId,
			offset: 0
		},
		states: {
			loading: {
				invoke: {
					src: async a => {
						if(a.sessionId) {
							const n = await er({
								farmId: Number(A.farmId),
								sessionId: a.sessionId,
								token: A.rawToken
							});
							if(!n) throw new Error("NO_FARM");
							const {
								game: s,
								offset: r,
								isBlacklisted: c,
								whitelistedAt: m
							} = n;
							s.farmAddress = A.address;
							const u = await Er();
							return {
								state: d(g({}, s), {
									id: Number(A.farmId)
								}),
								offset: r,
								isBlacklisted: c,
								whitelistedAt: m,
								fingerprint: u
							}
						}
						if(A.address) {
							const {
								game: n,
								isBlacklisted: s
							} = await RA({
								farmAddress: A.address,
								id: Number(A.farmId)
							});
							return n.id = A.farmId, {
								state: n,
								isBlacklisted: s
							}
						}
						return {
							state: tr
						}
					},
					onDone: [{
						target: "blacklisted",
						cond: (a, n) => n.data.isBlacklisted,
						actions: _({
							whitelistedAt: (a, n) => new Date(n.data.whitelistedAt)
						})
					}, {
						target: t(),
						actions: _({
							state: (a, n) => n.data.state,
							offset: (a, n) => n.data.offset,
							fingerprint: (a, n) => n.data.fingerprint
						})
					}],
					onError: {
						target: "error",
						actions: "assignErrorMessage"
					}
				}
			},
			playing: {
				invoke: {
					src: a => n => {
						const s = setInterval(async() => {
							var c;
							await ((c = J.getSessionManager()) == null ? void 0 : c.getSessionId(A == null ? void 0 : A.farmId)) !== a.sessionId && n("EXPIRED")
						}, 1e3 * 20);
						return() => {
							clearInterval(s)
						}
					},
					onError: {
						target: "error",
						actions: "assignErrorMessage"
					}
				},
				on: d(g({}, Yt), {
					SAVE: {
						target: "autosaving"
					},
					MINT: {
						target: "minting"
					},
					SYNC: {
						target: "syncing"
					},
					WITHDRAW: {
						target: "withdrawing"
					},
					LEVEL_UP: {
						target: "levelling"
					},
					EXPIRED: {
						target: "error",
						actions: _(a => ({
							errorCode: W.SESSION_EXPIRED
						}))
					}
				})
			},
			autosaving: {
				on: g({}, Yt),
				invoke: {
					src: async(a, n) => {
						var m;
						const s = ((m = n == null ? void 0 : n.data) == null ? void 0 : m.saveAt) || new Date;
						if(a.actions.length === 0) return {
							verified: !0,
							saveAt: s,
							farm: a.state
						};
						const {
							verified: r,
							farm: c
						} = await oA({
							farmId: Number(A.farmId),
							sessionId: a.sessionId,
							actions: a.actions,
							token: A.rawToken,
							offset: a.offset,
							fingerprint: a.fingerprint
						});
						return await new Promise(u => setTimeout(u, 1e3)), {
							saveAt: s,
							verified: r,
							farm: c
						}
					},
					onDone: [{
						target: "playing",
						actions: _((a, n) => ({
							actions: a.actions.filter(r => r.createdAt.getTime() > n.data.saveAt.getTime()),
							state: $s(n.data.farm, a.state)
						}))
					}],
					onError: {
						target: "error",
						actions: "assignErrorMessage"
					}
				}
			},
			minting: {
				invoke: {
					src: async(a, n) => {
						a.actions.length > 0 && await oA({
							farmId: Number(A.farmId),
							sessionId: a.sessionId,
							actions: a.actions,
							token: A.rawToken,
							offset: a.offset,
							fingerprint: a.fingerprint
						});
						const {
							item: s,
							captcha: r
						} = n, {
							sessionId: c
						} = await or({
							farmId: Number(A.farmId),
							sessionId: a.sessionId,
							token: A.rawToken,
							item: s,
							captcha: r
						});
						return {
							sessionId: c
						}
					},
					onDone: {
						target: "success",
						actions: _((a, n) => ({
							sessionId: n.data.sessionId,
							actions: []
						}))
					},
					onError: {
						target: "error",
						actions: "assignErrorMessage"
					}
				}
			},
			syncing: {
				invoke: {
					src: async(a, n) => {
						a.actions.length > 0 && await oA({
							farmId: Number(A.farmId),
							sessionId: a.sessionId,
							actions: a.actions,
							token: A.rawToken,
							offset: a.offset,
							fingerprint: a.fingerprint
						});
						const {
							sessionId: s
						} = await lr({
							farmId: Number(A.farmId),
							sessionId: a.sessionId,
							token: A.rawToken,
							captcha: n.captcha
						});
						return {
							sessionId: s
						}
					},
					onDone: {
						target: "success",
						actions: _((a, n) => ({
							sessionId: n.data.sessionId,
							actions: []
						}))
					},
					onError: [{
						target: "playing",
						cond: (a, n) => n.data.message === W.REJECTED_TRANSACTION,
						actions: _(a => ({
							actions: []
						}))
					}, {
						target: "error",
						actions: "assignErrorMessage"
					}]
				}
			},
			withdrawing: {
				invoke: {
					src: async(a, n) => {
						const {
							amounts: s,
							ids: r,
							sfl: c,
							captcha: m
						} = n, {
							sessionId: u
						} = await mr({
							farmId: Number(A.farmId),
							sessionId: a.sessionId,
							token: A.rawToken,
							amounts: s,
							ids: r,
							sfl: c,
							captcha: m
						});
						return {
							sessionId: u
						}
					},
					onDone: {
						target: "success",
						actions: _({
							sessionId: (a, n) => n.data.sessionId
						})
					},
					onError: [{
						target: "playing",
						cond: (a, n) => n.data.message === W.REJECTED_TRANSACTION
					}, {
						target: "error",
						actions: "assignErrorMessage"
					}]
				}
			},
			levelling: {
				invoke: {
					src: async(a, n) => {
						a.actions.length > 0 && await oA({
							farmId: Number(A.farmId),
							sessionId: a.sessionId,
							actions: a.actions,
							token: A.rawToken,
							offset: a.offset,
							fingerprint: a.fingerprint
						});
						const {
							farm: s
						} = await hr({
							farmId: Number(A.farmId),
							sessionId: a.sessionId,
							token: A.rawToken,
							fingerprint: a.fingerprint,
							skill: n.skill
						});
						return {
							farm: s
						}
					},
					onDone: [{
						target: "playing",
						actions: _((a, n) => ({
							actions: [],
							state: n.data.farm
						}))
					}],
					onError: {
						target: "error",
						actions: "assignErrorMessage"
					}
				}
			},
			readonly: {},
			error: {
				on: {
					CONTINUE: "playing"
				}
			},
			blacklisted: {},
			success: {
				on: {
					REFRESH: {
						target: "loading"
					}
				}
			}
		}
	}, {
		actions: {
			assignErrorMessage: _({
				errorCode: (a, n) => n.data.message,
				actions: []
			})
		}
	})
}
const G = e.createContext({}),
	Ir = ({
		children: A
	}) => {
		const {
			authService: t
		} = i.exports.useContext(X), [a] = M(t), [n] = i.exports.useState(Cr(d(g({}, a.context), {
			isNoob: !1
		}))), s = nt(n), [r, c] = i.exports.useState(aA()), m = i.exports.useCallback(h => {
			if(s.state.matches("readonly")) return;
			const w = ks(h);
			c(w)
		}, []), u = r.length > 0 ? r[0] : void 0;
		return e.createElement(G.Provider, {
			value: {
				shortcutItem: m,
				selectedItem: u,
				gameService: s
			}
		}, A)
	},
	yr = () => {
		const {
			gameService: A
		} = i.exports.useContext(G), [t] = M(A), [a, n] = i.exports.useState(!1);
		return e.createElement(he, {
			className: "fixed top-2 right-2 z-50 flex items-center shadow-lg cursor-pointer"
		}, e.createElement("img", {
			src: le,
			className: "w-8 img-highlight"
		}), e.createElement("span", {
			className: "text-white text-sm text-shadow ml-2",
			onMouseEnter: () => n(!0),
			onMouseLeave: () => n(!1)
		}, a === !1 ? t.context.state.balance.toDecimalPlaces(3, o.ROUND_DOWN).toString() : e.createElement("small", null, t.context.state.balance.toString())))
	};
var Br = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAwUlEQVQokWP8//8/AwxIiqohOKiA8fnrW2ABFmTF+5PksKp2nPcIZBAjigYQeH7lDUPUqW8oipeZccEMZADZwgQz/V5iKIPaR1GwJIh9Rl0ezLbQ9oax/4M0MUqIqP6HSe57/R6rk5xEBcG0yc2HECd9tob41ZRBAKuGzwzQsLgJ9QPI7cQCsJNAamO0RfBqWXIVYijY06CQ8OKGhA6IxsaGhRZYAwhs+4rQhIsN10CMYhAbBEB+AIcxMX5eZsbFCAAGCVCTfljFZgAAAABJRU5ErkJggg==",
	Qr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAABKUlEQVQ4jWP8//8/AzYQndWJXYKBgXHptHJMQXSDYAZgUwyVh+tFUQcyCIajMjv+Hzh95z8hAFIDUhuV2QHXC3YR1Jb/aUkhDPYmymALDp65i9VFyPKz5q2Be5UJKk+UIchyILUgPSC9IIfADCLKEGyGwQDz7Vec/2EBRowhMPDw2XsGBSkhhmBvG4Z1W482MBGnjTAYxgYx//zO0PCTTZjBykgNHHigQCQGwGKsZ85Whi0rlyFchC1KcQFsSQVkEOPsCRMYTl+4QZRhyIaA9ID0gsxgQVYEkoApxmcYzBBkAM5r6jquIKH/qQUFcKmSFG+shoDCBAZgrrl5ZTeKQRiG4QMwQ0AE3CAQQDYMROAyEGoAiiFgDnLBhmQY3EAsAGwAsiEMDAwMAPoBy+BoU5uKAAAAAElFTkSuQmCC",
	fr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAAXNSR0IArs4c6QAAAEFJREFUKFNjZIACNW2X/zA2jL51dQ8jiA0mQApuXtmNroZBXceVAaSQEaaAkZERrAEZ/P///z9I4aBURJTviAknAALkQO4KZEIdAAAAAElFTkSuQmCC";
const Ce = ({
	children: A,
	className: t
}) => e.createElement("div", {
	className: Y("bg-silver-300 text-white text-shadow text-xs object-contain justify-center items-center flex ", t),
	style: {
		borderStyle: "solid",
		borderWidth: "5px",
		borderImage: `url(${fr}) 30 stretch`,
		borderImageSlice: "25%",
		imageRendering: "pixelated",
		borderImageRepeat: "repeat",
		borderRadius: "15px"
	}
}, A);
var Ot = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAARBJREFUSEtjZIACNW2X/zA2Mn3r6h5GbOKExAiZBzYUpOjIyjQMs2zCZzFQYjE+MxlxWQpyBS0shpmLYfG52cvgPs/b84UiH09y4YGbZZQaBWeDPDR4LAa5BgbIjV9sCRY5vuE+Rg4SSoIXV0oHpSN0O8BBPSAWw7ITtYIXn6+R7SCrcCBUeBAjP2oxMaFEFTWjQU2VYCTGkNGgJiaUqKJmhAY1csOM0jqY6EoCvc1FSTsLn6VYGwLogtT2NTbPYbS5kJs+IB+Q6wj0djVBHyMHFyXBTqjZDG/6IDc/YZbTwmJQ8xnUrsNocyH7mJKGH3pbDt1ceBcGucEHU0QLi2FmwksubJ0schMWtnY1emMSAI6Z0A/WOGJkAAAAAElFTkSuQmCC",
	FA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAAt0lEQVQYlXVRMQ7CMAw8Vzyg4hHtUAamDrChsPBEJL7BUqkjQyeGLpUQEzNiY0x1URyZAF4cX+5sXyLee9SrvUeM66EVPa/PQ8KnsZMFidPYAccT3rd7IFDAbHHypGqc70tguWlhOnJCqp+XAbsXUFjArIJfOMlClXa0oXW8lyJ2CgLbUSeQqKblsXUEaOpjdO6hLyHB4L8dc0FYQwma1UOOf70GiRyZC8LOVeOY00+RqGd6SUxAZlNpaL94EOyHAAAAAElFTkSuQmCC";
const Sr = A => {
		if(!A) return "";
		if(A.lessThan(1)) return A.toDecimalPlaces(2, o.ROUND_FLOOR).toString();
		if(A.lessThan(1e3)) return A.toDecimalPlaces(0, o.ROUND_FLOOR).toString();
		const t = A.lessThan(1e6);
		return `${A.div(t?1e3:1e6).toDecimalPlaces(1,o.ROUND_FLOOR).toString()}${t?"k":"m"}`
	},
	Ee = ({
		image: A,
		secondaryImage: t,
		isSelected: a,
		count: n,
		onClick: s,
		disabled: r,
		locked: c
	}) => {
		const [m, u] = i.exports.useState(!1), [h, w] = i.exports.useState("");
		i.exports.useEffect(() => w(Sr(n)), [n]);
		const E = !c && !r;
		return e.createElement("div", {
			className: "relative",
			onMouseEnter: () => u(!0),
			onMouseLeave: () => u(!1)
		}, e.createElement("div", {
			className: Y("w-12 h-12 bg-brown-600  m-1.5 cursor-pointer flex items-center justify-center relative", {
				"bg-brown-600 cursor-not-allowed": r,
				"bg-brown-200": a,
				"opacity-75": c,
				"cursor-pointer": E
			}),
			onClick: E ? s : void 0,
			style: {
				borderStyle: "solid",
				borderWidth: "6px",
				borderImage: `url(${ut}) 30 stretch`,
				borderImageSlice: "25%",
				imageRendering: "pixelated",
				borderImageRepeat: "repeat",
				borderRadius: "20px"
			}
		}, t ? e.createElement("div", {
			className: "w-full flex"
		}, e.createElement("img", {
			src: A,
			className: "w-4/5 object-contain",
			alt: "item"
		}), e.createElement("img", {
			src: t,
			className: "absolute right-0 bottom-1 w-1/2 h-1/2 object-contain",
			alt: "crop"
		})) : A && e.createElement("img", {
			src: A,
			className: "h-full w-full object-contain",
			alt: "item"
		}), c && e.createElement("img", {
			src: FA,
			className: "absolute w-6 -top-3 -right-3 px-0.5 z-20"
		}), !c && !!n && n.greaterThan(0) && e.createElement(Ce, {
			className: Y("absolute -top-4 -right-3 px-0.5 text-xs z-10", {
				"z-20": m
			})
		}, m ? n.toString() : h)), (a || m) && !c && !r && e.createElement("img", {
			className: "absolute w-14 h-14 top-0.5 left-0.5 pointer-events-none",
			src: Ot
		}))
	};
var Ut = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAArklEQVQYlWP8//8/Q4m91X8GKOg5eIwRxEIXK7G3YmAstrP8n2LBBRNnmHPiG5hGFwNpYGJAAyBFT7/8QREEiYFsAit+fuUNGMPAs69/MMRAAO5mbx6I9Q13EZY1KP8D01u/cIGdwQJyONQD/0HWz/Tngytu3POJQZqHBe5BFDfXuyAUggCyQhBgQfcgzA8QgAgREACbDHMKKIhgCmHuhJkKV4ysAaQIm0IGBgYGAEYBYVnlJS6GAAAAAElFTkSuQmCC",
	We = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAQCAYAAADNo/U5AAABWUlEQVQokWP8//8/AzrY720AF3TceoERXR6i6b4CA4PiA7hix/XycAX7Ax9iaGYCk1ANjlM+MFjqfEYxFcQHiSPbDrYJpgEG/pxhZGBxFGP4s/8VA4sJwvn7cwTANjLBBH7MYAbTIA0VUyQZSoKZwTSIjywPtmmfl/5/mB/+bLwEVogOOnKeM7D468H9yIQsD3ISNoAujqIJ5AdsAF0cHhCgUOLI+Av3EwyAnWbyH+yn41d4wQHBApMEaQA70eQ/RCFa6IHlcyBqmfdznfz/NE6IgbfiJ4Oi1w+wiWyZugwM7DwMTBriDD+634A1woIb7Dy1GKf/ErpsYBMaDj6HxD6WFNFgD3HywbLtjCiaQODF5V8MM969hfNBilXtWOH824d+QwJCPdYZHu03F+9lBPFBBoEMsM3mhiuGGQoOCJBCrGHNwMBweOpXBmSXgAMLl2J0m+H8xXsZAQZ6qR6LctTYAAAAAElFTkSuQmCC",
	Ie = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAAAXNSR0IArs4c6QAAAJFJREFUKFNjZGBgYJAQUf0PokHgxZvbjDA2ujgjSOD561sweQZJUTWwBmziYMHi9n6GkhRvFA3IBvTM2crQW1nIAFcMUomsAaYTpBAEwIphbgaZDhJAdxJMHOQ0FM8gK4SZDPMDiA83Gd2N6H4Am4zua5gb0f0AsgElNJA9A3IrTAPW0ID5GhbOMA0YoUFMDAIAZbFq7O0cBCkAAAAASUVORK5CYII=",
	xr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAAXNSR0IArs4c6QAAADxJREFUKFNjZIACCRHV/zA2jH7x5jYjiA0mQAouHWhFV8Og51DNAFLICFMgphMG1oAMXl1Z9R+kcHgrAgCxXEU6WciMdgAAAABJRU5ErkJggg==";
const oe = ({
	children: A,
	className: t,
	isActive: a,
	onClick: n
}) => a ? e.createElement("div", {
	className: Y("bg-brown-300 px-1 py-2 mr-2 flex items-center", t),
	style: {
		borderStyle: "solid",
		borderWidth: "6px",
		borderImage: `url(${xr}) 30 stretch`,
		borderImageSlice: "25%",
		imageRendering: "pixelated",
		borderImageRepeat: "repeat",
		borderRadius: "20px 20px 0 0"
	}
}, A) : e.createElement("div", {
	className: Y("px-1 py-2 mr-2 flex items-center cursor-pointer", t),
	onClick: n
}, A);
var Jt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAQklEQVQImWP8//8/w35vg/8MCMDIVGJvBRZQi3EGYwYGhv9MIFJSR4Th1pK9cLVgQXQJFpAZc058g5rJxeDN840RAGMLE5KOSgWkAAAAAElFTkSuQmCC",
	Tt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAyklEQVQokWP8//8/AzqQFFUDifx//voWI4YkAwMDEzZBkIYV27eDNINNBNFQjF0TSNIpNJnh9IUbDDCNy8y4GKK1RMCGgQgWdE0gJ0FsSAbzQRojPD0ZorW44GowNOHTyMDAwIjTTzAngsD5c1fgToU5D6ufQH6QvLoRzN+3ei5cY3F7P1geJchhGrZ+gbh/6bU3MCeBbQYZAOKzEKEB7kcozQC2CZ8GqCYULzBKiKiSpAEeEKRoAAGQnxiXXnsDCw2saQ0FMDAwAABDbHouabU5uwAAAABJRU5ErkJggg==",
	Kt = "data:image/gif;base64,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",
	Lt = "data:image/png;base64,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",
	iA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAAl0lEQVQYlWP8//8/AwjYaxhBGAwMDAdvnGNkwAJYYArXrK2Ey4L42DQwoSsEgWX1jig2wRWjC5ybvYzhysl7WDUwoSsEAR1zJawawB4ECZiKc4AFXA3FUTSA6KjG/WBPo4QGugYYgGmAOwOk8/TLH2D27vMv4aaDAMgGDDeja4A5A8XN6ADZSSAAMgDFzdg0INvIwMDAAACxgV8SHdCTigAAAABJRU5ErkJggg==",
	Pt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAbElEQVQImWP8//8/g7Vr+n8GBGAEEUd3z2RgAkkoqCoxBIb7MbS1l4HE4QqZQERaUgjD+XNXGE5fuAFXYO2aDpEECWJTwAKyY/3KTWCjQApmzVsDtx2sE6oAxQSwoJq2C4OIpBJMMcLVDAyMAFE4MSgVw7THAAAAAElFTkSuQmCC",
	br = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAW0lEQVQImWP8//8/w35vg/8MULD1Cxdjz8FjDIz7vPT/q8U4w8QZbi3ZC5ZkgQl8vnARTIMVLdn7nwmuFArY9CzALBaQNpAKkEqYIFgCZiFIkoFhL1hQp6uaEQAaBiFlvrftvAAAAABJRU5ErkJggg==",
	Vt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAk0lEQVQYlWP8//8/Awjs9zaAMKDAcesFRmQ+C4gosbf6n2IhAhbgNdCHa0RWzARS5M3zjeH5lTdggee7joNptRhnFFuYGLCAzxcuYigGW40MeMS44CaD2JI6ImDFKCbCrMcGmHoOHmPc+gViCrJimMkwAA8emKfQAcjqOSe+IRTiUgyyDWQrikKYYmQ+SBEDAwMDADRdR2hcCqZzAAAAAElFTkSuQmCC",
	kr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAcUlEQVQImWP8//8/g32X538GBGA8WLYdzGNSj3X+v8Y7iUHVjhWMGRgY/tt3eYIlGdVinP5L6LLBJMDg9qHfYDkmNAEwgJkAkmS8vfkbhgKwnSCCV4EFRUE7byzETpBrpWztGVR9uRheXP6FcDUDAyMAgCApN4SlN1AAAAAASUVORK5CYII=",
	vA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAOCAYAAAAbvf3sAAAA/UlEQVQokWP8//8/AzJQj3UGC9xcvJeRAQtA0QBSbJvNDWYfnvoVRZN6rDOYxtAgocvGoGrHilUTCDD9KFeGc0CSLy7/Yrh96Dc21zCA1LLAOPu9Df5v/cLFwCDHCebDNJXYW/335vnG4Lj1AiNH512Ik0CKLXU+Mxy/wssA1oQEugsgGg/M+Q3WxLjPSx+sGARAGkBsdgshuA6QQocUVjibCSYBUwwCP0+8g2sAKQYphHsaq+/wAJwakG1B5jPBPAmiQc5CVwRyDrIacLCCFIKCDixxBdUmkBhIDmYYOFhBYY2sCKQAphgZ9Bw8xshUYm8FZqCbik3xfm8DBgDnH4ktnWMhBQAAAABJRU5ErkJggg==",
	Nr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAcklEQVQImWP8//8/w86CwP8MCMDoPmE9mMcEkzDwcGPgEpMEMf8fbssCSzLu89L/r5WbznDr3GUGNSNdMP3t1XOwHBOIRJYA0TATQJKMf44ew1AAAixgwtoKpOD/LQYGuAKwuSDX7vc2gLkV7mqt3HRGAFf8NnNSLAAVAAAAAElFTkSuQmCC",
	Ht = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAv0lEQVQokWP8//8/Awj4rSiAMBgYGDZFTGBkwAGYQML2XZ7/xRTuMYDwza2XcakFAxaQyap2rAy3D/1mANEgsN/bAG6b49YLKLaxwBgwxRK6bAwZl4UZbnTLwzUjawI76fDUr2AMsgUEbgR9YmA4DnGapc5nFBvhngYJZggJQxRDwc8T7+Ds41d4wc5jQnYfLsXIAEUDPsUwp8GdBHMWSAIXADkLxQaQG0GC+ACGk2CacGlEcRI6QA5OMGBgYAAAR95ccwapk4cAAAAASUVORK5CYII=",
	Mr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAASklEQVQImWP8//8/w7bAzv8MUOC1vpyRcWtAx39H1U8Mn5xkwMJnZ35iYNr84glMERywwFh8+2CSfAwsAeZPGIsOy8DNDDC/xggA8JcX7QkRiLIAAAAASUVORK5CYII=",
	Zt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAALCAYAAABLcGxfAAAAxElEQVQokXWRIQ7CMBiFX8l0NWKWE2BADrkEwSmABDRnQCPIToFYgtwkihNgK6Z7gZLX8JZuwBNd8/6v//vbmRACpPvmHIqZh1/l0bGNQ/uyKG8nI6Y/QHi+tXhWHqnk6dAkhdlxLHqskWEp41J3DkVjYzyLqdoKKOBQdx6lEijCnD9N4Z4ea1L2NcMH/CezWxzCeprHsfil2FWpGllMP5IMgWN48Kz75TGmCEiV+tfHxcQEbgSm3cbw4MdRTPp1V8EA8AZGgm9XiGkZHgAAAABJRU5ErkJggg==",
	Wt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABBUlEQVQ4jWP8//8/AzZg3+UJlnhx+RfDzcV7GbEqYmBgYMKlWdWOlQGEJXTZGNRjnbHbgs0AmGYQuH3oNy59+F0AA+XHHQgawIJsMwPUzzAXMBARBizozgbRIKeDNLK+eMLAoELAC8iakW2FAYnT74nzAshWkJ83v3jC4ISmaFtgJzwWQPLTj0+Ge4lRLcbpPyiq0G2H2awlaM3QZ8sHl99/mw/FEHBCQo5n5ACz1zD6v8PPE8PZyIawoGtCBuWa4QwMDJ/whgHedACyBWQbuu3IAB6I+AC6JhC49v4omMaZmWAg0zL3v6+EDIbLYIYQNABmCLLNoJghyQB0AIodEH3wxjlGADp6hv/Y0XLqAAAAAElFTkSuQmCC",
	Rr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAP0lEQVQImWP8//8/w+G2rP8MUGBbNY2R4VBr5v8X26f9hwEQn+nbq+cwRXDAAmO93DEdRZDxwo5dcDMZGBgYAYx+H9WhuAkjAAAAAElFTkSuQmCC",
	jt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAwElEQVQokWP8//8/AzI43JaFImBbNY3xcFsWiIYIgDTA8KHWzP8vtk/7jwxAYshq8CqGAWRNTAxQZ6gZ6TLgAiDnwJzKhFMVEni5Yzqcg6EBWRIbnwVEpFy/ySDBcp9hlZ4fVkVhlzYxvLj+i+EmyAb1WOf/ErpsDKp2rGAJdAASA8mB1IDUojgJXRNMMTIARxzMFhB4cfkXigJk8ZuL9zKCbQAxYAphCrAphtsAA1K29qjpBAqeHT4IVszAwMAAAF3jnkaLIw3vAAAAAElFTkSuQmCC",
	Fr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAVUlEQVQImWP8//8/AwiU2FtBGAwMjD0HjzGAJUCChRmWYNH+GcfBkozFdpZgwc8XLoIleA30wZJMUO0YACTBCFIBUglT3XPwGNgomGqw5SDBEnsrBgBOaSKMNjcLMwAAAABJRU5ErkJggg==",
	zt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABD0lEQVQokWP8//8/AwyoxzrDOTcX72VkwAPgGkGabLO54SoPT/2KVzMTA5pNIHD70G98loEBo1qME9wmmIYXl38RdCoLLgmQK3wffQezew4eYyyxtwKz/d0NGGyrpiE0gmwD2QQCIBeA+OUVGWB+ib3Vf5BmmNof5coMDKDAATkXhGFsu06P/6+urELBxXaWYPkny4rAelCiA2Z6igUXA6+BPpjPpmcBl+vM6meA2cyEy4+fL1wEa/p16QRWeQyNIBPnnPgGZr9dNBNFc2GGJdhFWDWCQg9dMwig24zNRoany4vhmkEY5Gx0gBE4IADSCALSkb3wAIPJgQIOZBhWjbDIhinU6NyDLPc/xYKLAQAyF6PdMgN/zAAAAABJRU5ErkJggg==",
	vr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAYElEQVQImWP8//8/w41yl/9zTnxjgALGnoPHGBj3een/V4txZvh84SJYHKqAkWnrFy6GW0v2wlQzpFhwgaj/TDCB51fewCVBACTBCNKFLskCs3DrF67/YNaJbwwpFlyMAJbAI6HwxXloAAAAAElFTkSuQmCC",
	qt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAPCAYAAADQ4S5JAAABAUlEQVQokWP8//8/g3qs838GJHBz8V5GEA+bOKNajNN/CV02BlU7VrjE4alfwbRtNjdc7Pah3wwvLv9iYGJAEoABkAEgjE0OrgFZAmQbzEZkxSAA98PnB38YVH25GLCB25u/MfAqsED8ANIAA1K29mAOTCNIIQg8O3yQEcNJi9VN/p/+z8YAwjAA44PkUJwEEnASFcTqHCErM4Z3x04x7Hv9niH25hlGJqyqkABIMUgTDLCA6DmM/xgYXr8HC6HbBDKZYeNOsJpYmAYMBXgA2EkHb5xjBNuCA4DkQGrgnoYBew0jMCflP8RrMENgijE0oGtEVojiaXRgKs6B3XEMDAwAzBV5mKwAMgEAAAAASUVORK5CYII=",
	Dr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAARklEQVQImWP8//8/w49y5f8MCMDI0XmXgfF7mRJYkMXkH1jqzxkmsCSYBAlCBWAK/kN4aJIgAGIxoqmGsKECIEmEAxgYGACf5BvPZ8BfwQAAAABJRU5ErkJggg==",
	Xt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAkklEQVQokY2QzQ2AIAxGi3JwB286gBeGcgKdwQ0cihWcQw5qTUmqyJ80aUKA18eHQEQwc4/gVLNsAjIl9qnDZjztjUMLkArBrHUWrFIHvj2AyEDNJdUFZE+BFqIncZcYPx9BhteGyYzWxBs5o1uS1wTGjMlMLhgY2yGAbKa/8GQ+dPUMjUKxIS5YBPlgMfSA6oIb/PFjjttxvHMAAAAASUVORK5CYII=",
	DA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAANCAYAAAB2HjRBAAAA3klEQVQokWP8//8/Az4gKaoGV/D89S1GBogYiM3AQkhjcXs/mG28vhpmECNMnokYjaYGGgxz5CMx1GDVjK5x1rw1YLZTaDKI+o9XMwwga4QBmAEgf+PUDPIjukYQMDTSYVixfTvYAAzNICcvM+Ni2PqFi+HJvpUYGpEBo4SIKjL///4kOYbnV94wNNxlYrj19gvcrzCNIK9EeHqCmIzImuEat33lYlhy9Q0DUrT8hzoVrhFMQDXj0wg3HEqjxDMxGkGBBBKDi8NTGCGNIIWgqEHmozgb3UnomjEAAwMDAMi1b/IMXEybAAAAAElFTkSuQmCC",
	Gr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAMdJREFUKFNjZIACCRHV/zA2jH7x5jYjuhiIDxYEaTgzyRcsz6ZnAVen51DNANIIMxBmCNwkkMSqQhcGJUVOuCaQASCNy8y4GLZ+4WJYeu0N2BAU62EmgjSDAMgAmMZoLRHsmpD9h00jhvOQPQxzKkwM2UYM58ECBeYHf3cDuFnIGjH8BNMAUg3yOAjAAgjmP5TQQ9cA8wMsSlA0gQRxaYA5GWabSd5mBnDE4dOAHKKgBADXBIoDmB9wJR2YjfDQQ08m2NIbshgA39p5nlvKwS8AAAAASUVORK5CYII=",
	lA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAA8klEQVQokWP8//8/AwhIiqpBGEjg+etbjOhiIMAC01Dc3g8WMDXQgEuCxEEakQxkfP76FkQTTMIpNBnFxBXbt4M1LjPjYtj6hYth6bU3IM2MLDAFMI37VjMwIGsGaYzw9GSI1uKCizFJiqoxRGd1gkyEWc+4b/VcsOT5c1cYTl+4Ada49NobsDyYgAUEkj9AFIpTDY10wH4F2QgylAlL4ID9IHl1I1wA2UaQF1A0IXsaBEDOhDkVGTDh0gDzA7IfMeIJhwZwIMGciBx6WDUgm4xuG9gmfBqQNcJSCKOEiCo4xKBy6DaAowBEQ73B8Pz1LQYA04+QQcAGlZoAAAAASUVORK5CYII=",
	Yr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAMdJREFUKFNjZIACCRHV/zA2jH7x5jYjuhiIDxYEaThxZjdYXl5eHq5OUlSNAaQRZiDMELhJIImlK2cwKCsrwzWBDABpXGbGxbD1CxfD0mtvwIagWA8zEaQZBEAGwDRGa4lg14TsP2waMZyH7GGYU2FiyDZiOA8WKDA/eNW3wM1C1ojhJ5gGkGqQx8E0NIBg/kMJPXQNMD/AogRFE0gQlwaYk2G2WZi4MoAjDp8G5BAFJQC4JlAcwPyAK+nAbISHHnoywZbekMUAM+15np1Bi8QAAAAASUVORK5CYII=",
	Or = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAABDElEQVQokWP8//8/A6lAUlQNpomRiRS9II0gvD9JDi6G1wU3yl3AtOO8R2BFII3Pr7xhiDr1Da6fhZCtIM0wG2Gan7++BXINWAzDgBJ7Kzh76bU3/2G2ggCSzXCAMwyQNW/9wgXTzEiUAeial157g1UzVgMIaAYH5lMbV5jy/4wSIqrI+sGaHec9QjH0+etbYANAUXhGXR4ubnLzIUogwjWv2L4dLhjh6YliGEgTyBAQjewFlNAGgVnz1jCcvnAD3Ydgl8A0w1Iiip9hwNBIB1uYwQyBYYgX0AMswtMTnjyL2/sZYYkGGwAZwBh16tt/BoZvDNFaImBTl157wwhKbcigt7IQnAJRAAMDAwBOs5MHXi17QAAAAABJRU5ErkJggg==",
	GA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAApCAYAAAC7t0ACAAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAACGgAwAEAAAAAQAAACkAAAAA1QqmwgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KGV7hBwAAA55JREFUWAnlWD1oVEEQ3pM0ahAlAYsgmNQS7EICEQTliognCFELU1iIiFcErRV7JcVZBMEUWlgJnmhxIAgGEuwk9peAWARyKOJfp/fNu2+dzO6+9+4s3SIzu/PNzDdz+/NIxQ04bp6Y/m1d779dr9i1MvOhMiCNYfJ7jUW9nOl1J8T6JVOaOZMvXpuWhO3NnwGJifG9sra0vC6yLJnCTqSSN1vv3crBc57IlS/PXa16XOYk2p2U6kyyE6nktXdHfeKxhze8/unqA683p7ZEL9uZoBNFyUfOX5IEnWdPfVIqtNV6tqbbElNRZ4QEE8ODDvzNbeW/Wh0JnPcHHUJn6JsigxjYN0MgoHf66ss3Ep8BWF2s8jwisNHXdkbnc90TJZ1gYjgyOXRUZCvPI0PbWPXvXmGc3Z3JCoUNY6h3jGQXY7eTPQNmsOwvAuXZadObVPvTjs7gNGEg/x6CdrWIi10JMiSkT4OCBCpx2teCdL7gdGhwUeUaG9NZeaoz9AlIsGoAYnuCjtLO+aylXGu67PhyTok4IKJj0wYZkCD7lEPt0QXx1+30AeuZrVV97Ze0koodkNBOWmflvEf0iSKONjd/SpZSnSGespAEK2cCXmIMoCVtxLrl/M7QN0nCVs4EdMQDZgcfMGI9mYLOBCSKKmfyueEfloOjLUmm1xn9+iKIvKJ8O2D8cHFbgrMaZmICJh+ZHKfJy87Gpuivvu0TSTIE2FcV67isKqm3g46p5COTE4R42dloi15EZvbMSe9zq76UHdHYTu8nOSNaYnO9zjAWO2PzBXuCDrbtNgETx6TFpsjQd9eewOK/JGdQK1M/E3CyJ7QD9sfCzGFnK9EY6vyY5RzSH0m9aHQQery2LclpCn4OGvIkCLzY2R9CuutliFhH/5Rbw6GZyw7JtLSYvLn2Y5wUPkoCAVaX7kq1txeui8Qc62VGv/5REp/XnrjZxTuucXpYCEBijvUyo1//5J5AoGNTE67h2iItgbOj33P5FPlr5yQJgkAkNniUtY3XtV5L+WtMIQkN1nrs7XDdozfIkMtKO/Ix02sxHfeJHTj/ZUbvC99Dg04QADJsOdo8euSAd9r5+DV+oXVJWJyOwdg+UE8JSGiAb3mkQl7FGh/T82IQn0uCoJiMXu0RsjFfuzYwibKdsAlj84FJ/D+dyHZy9h86vePZzjKdgB+PbepkIF5wTzBJnuR3h8XY7wRrT80HIoFgsUstr9oUAaz/AZ6u5EePXPExAAAAAElFTkSuQmCC",
	$t = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAiCAYAAABIiGl0AAAAAXNSR0IArs4c6QAAAz9JREFUWEetlV1IVEEUx//rZyomFpsfWbsvUokRVhKoKD74QSVJ+FSBRT5EPYiFRPVQPRSEVPQSQfYgRI9lmGFFSWIWSUislRGRW+ZHi5qEX5neOCNznR3v3Zm7NS93du45/9/5n5m560KYwzAMw+VyucJMR1iJBDVGDmI+bj+ik0rD0nCctDBcbcguI1KbHOs4Tli4u81AXvYSu6sXEXvfONZxlJBWUGicbyjGoax8RD49BSqg8YsXZ+vbMdTZ4UhLO5igOxuSsANbUTP0AI1pu80n2XcK1wJzqOoEP6yf0HauBBM0syIemYXRltyi6kG2/rwpnT114UowiXE4zcUCCFq1pwxjXa/xLDCOk2sS/q/jvKORy9wGvsUit3UCdfMJ7N3VyEn0H1mBruvzWvCQjsmpFVSswntjhv0kKB86cFuw2F4SrLkVYLqNh91wr5sNec6oG59apkI6VzomwqUfk0F7ef/cSpA4DbEIDqR11b1Wgt1Z0yjpiwray+5dSbaOVU55orLVPz+PYmYqERVfp1lOy/o4pG6OYfPeF8XsmZ3fbhZC8YH3ceE5lvdXtkfiA8NVSLt5DO+aB7Gq9V4QnOJVzpWO7XrqH7gMf/biR8XTOwdPxgkzVAWlQEswOY5JXjy5noJk2/0kOIsRoDxYBV8GJmiiNwqzE5PYXhCL26MDTOvA6gwEEB/yGskvQ8GDwBzKBd6m9yO2rgh46cPsqzFs/OA2tXkn/J3jbE0u0ueLYuu/+v9YHjRbxzzp+/EpJrD2Sjx4J+T2E7xvUyCoyC2DXrNIK7jtHlMWgSiJz8VW8is17PttOpOL5LlWHxPlB4TgukMs0q7FXEv5tyjvOwnKxchrKqjtdZIdEpyv7YuYw52FaBNOEL7GY1TfaW1w4YYc43S5B096RsyaCE6DoHyU5KTgYpsfHR97lJ1UBnAoiYtgq30nMA0duBLcVltpiMDukRnkpiz96RNIXqMCyq81h9RWgskxiROMAHzO3VFR4jqfq9qtBD+qrWTgC21+s7tUhBWYAs6Ue1hc2b865jSxAKtW6wK177F8iKiAx8LppvelOSlKh7KOstVWp1eEhwPVvsd2cJ29tMqltb+MGKYyLcLw9AAAAABJRU5ErkJggg==",
	_t = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAYCAYAAAAcYhYyAAABlUlEQVQ4jd2TMU/CUBSFTw2LgzJodMBEFxMnGk2TMrlgqoM/wIRFBwZ34kQIA5MSjYt/QAYHogtEBGNITUxJCqQkEKNLOzSQgpLC4KJ5Try0tIXBzbO0997zvtzb2wf8f7GcQP5SB8sJ5LrwQryMbnWfm7FZlRBLJZGOwwGKpZJoViVbzhWit/tY1jUcHh9hMbCK3Y1vPLz60NM19HQNertv88+MAxS5yDSkCo17umZ7AkBDqkCRi4wnxKoL5XNi7AkxVJGUsnEaR8IBvKWfEQkHaK6UjcNQRfq9GHjoXckRAPD752nONAcAgHV233bOFWKoIlla22ZYTiCPC7M0v/PxBUUuMqO6VwNULCeQTL5MDFUkP7ebxFBFksmXXf8f1xWP1O20Ya7MAVuXMM0Bup2hq2/idgAgJw9hmgPkZHeAJ4TlBBIM8TbQSMEQ77g7UzsBgFq9NbHugEy9odMg1jESUd7RQa3eQiLKY1x01ywnkLOrczyViri/K1BD4eaEvu8dnAKA7d7YINZRrCbreOOH/6l+AX9asguEogjcAAAAAElFTkSuQmCC",
	ea = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAbCAYAAACTHcTmAAABrUlEQVRIie2Uv0vDUBDHP0qRthHhiZuDm6NShbRFxMGCkD/CJZtDXRwcxMHJxSFQnOwiOHYNFHQQhxihiB36D2jngtAqDn0OmpA0P/qqk+BBSO7u3efCu+978G9B0zXkb/KxBcOGIZMKx+UTobXNJb9w9Bk2DFnbXBoLzcQF3VsHyxQUt8qhmHvrAHNjf256NLBeeAWguFX+hnwBvQZefiLTNWT/qiJ1DelUhRw2DOlUhQzGJ/7ToK0U10NvVYuFtt0WlinIZWcAyGVnsExB220pQWMHBV97Wtq1ff/+0vD3+EfmyceTVvBbpX4qDWyfV3zf2LsG4KGfXKMEDfpnyyVuMs/YnW4IrGtIlUb+4rtCSb5sbMu7Qkn2ryrSqQpfXt6auG1JldTawSzios/G0XwobpkCXUMmDS8VCpDrzPP2/hGRk2WKkDqUoW23FQsMgvfrvcjwUqFNJx8B7td7tB7TL5VU6E55QNPJR+LjLpXEE+WZ3ekCiyxkMz6s6eRDvhLUmywAdZud8iCUPz5cBeDk9AnoRepjRTuqO78BRCYeJ3ylkxBsonx6/oR9AsIAzJR3xqpWAAAAAElFTkSuQmCC",
	Ur = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAARCAYAAAAG/yacAAAAAXNSR0IArs4c6QAAAQ5JREFUOE9jZEAD4iIq/9HFXr65w4gshsIBabj46RGKnoMcHAx5bGIMyBrhmrBpgOlG1wjWBNIw6dcrsBr7Hz/QXQfn6/PJgW1kBGmI+/iQwYSTE+wMdOchmwCzEawJJgHTjM02kIYz378zLOKXZ0DxE0gTDBQzooQRQ+9/iNl4NeHyGIamF69vM+yYXsfgYaSAXY95EoOEqCqq85A1Sfq0MzzfUgnWDGdTTdPiZdMYXF1dGRhOzsN0nnkSWAzFebBIhmvE4iuQBnDkwuSQ4wubRpAGEMDQtKApkiGhbjnDy4QtDLvcHkGcysDAwOjawLA96B9EDpdNL6ChJuHTzgBi7zj3AKwBwyZszsSVrwBYAZKCZLHyWgAAAABJRU5ErkJgggAA",
	Jr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACaCAYAAAB7T6C4AAAB80lEQVR42u3cIU5DURCG0dtuA8MGUCgcaBwWBAkSySoQJBgkCmrZAIZgqEFh2EFXAEFR9vAnzGPKOcnoNnlf7hPT2/lo4vthd73J0+U5zAcIBsEgGASDYEAwCAbBIBgEg2BAMHQM5u5oe53M7HAxojk4jWbs7ZROly23EwbBIBgEg2AQDAgGwSAYBINgEAwIhmmDKd+ufj5Gs/56jaZcky23EwbBIBgEg2AQDAgGwSAYBINgEAwIhp7BnNxeRHN/dhUNThgEg2AQDAgGwSAYBINgEAwIBsEgGP5iMOnd3PgftkPHN/vRLM6fokmlnxd/z+I72U4YvJIQDIJBMAgGBINgEAyCQTAIBgTDtMGk/7CdTvXWuVq6jXfC4JWEYBAMCAbBIBgEg2BAMAgGwSAYegazev4YyaTSrXO6za2+k91l6+yEQTAIBsEgGBAMgkEwCAbBIBgQDILhfwWz6dvc8jvgL2/RpL9ScMLglYRgEAyCQTAgGASDYBAMgkEwIBgE85uq73KnW2fB4IRBMAgGBINgEAyCQTAgGASDYBAMPYPZun6fJbO6XI5k2ki3x8Vb5/SOdPrcnTB4JSEYBINgEAwIBsEgGASDYBAMCIZpg6necpdPuAWunvQ5OGHwSkIwCAbBgGAQDIJBMAgGwYBgEAyT+gFOBbAwlgsszgAAAABJRU5ErkJggg==",
	Aa = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABFBJREFUWIXFll1IW2cYx3+nqEuN1qX1o0ctxMPSCo1gom6rjsyu8WKUCo5avRgMRHSwDnpRB1th7GpjGxsBu0EteFF2sbJSob1bIysBV12tCnrRYhcDVmNFDa1Jo6n17CKcYz7e6Ml2sT+EnPO+7/M8//f5PPA/QzJy6OhxN4ePKGxtoYr2T7rqpD98Dxi5cwVJMqRSR44R43kmM0vzfrXe5cbhtANwsfu0fqappVe11xyTmlp6szIOBjxw9LgbQC2WFaw2BUAn0VBbrZ/74vPvsNcck2amH/Gnd8AwgX3ZsNUMT07MMDkxw/2ph9yfegjA1998xsz0I/Wkq45Gd49hnXuGIBFD129htSk4nHadRCJG7lyhqaVXxWBuQZYeAAjM+pPeReHIBoY8kGcySytBv1osx3Ng6Pot2jpak7wQ/z8LwGY0bJiA4TLMM5mJbUR0EgBtHa36s0Zk3Oclv8AiTY399u8JWD88lfQe+GU4IwlAr45xnxdzxevSs9wQ25Yd2awJ1H31PquPYyrAgYoc6fnCFnmTEoBa73Iz7vMKlWl7MUe8X2myuxER5sDq45h64vwhAO5dXtW6nwQ7SSeCw2ln3OclVfbtTw9KcEpIQlgFRXKONHxxKf5cmTt/4vwhYg5VlSsrpasej5CEw2nnqsdDlc2WJjvavyZs4fqtUlH6jouSOhOR1VdqaY2JwO113vuhTJroCgHieQAgV1ZKwSdPcA5aGO1fS5Id7V8TeiBjFZw75+KvvFy1tMaEZTYqrQfeYDMaZnMjIkzElaAfU36hVFBUAsDi4b91WdtclMvD94R2hCHoczXypgTXQs9Ynt7gUvC5ml9g5rX9BeoBS5kK8cxP/AEUFJWogJpfYE6SdR/Moc/VaJyAnLPN0+CWKttLuHe6DtlewotwRLXalKTaT0VbRytWm8KLcCRJduTpK1XO2RbKCKsguLVPPVMYI7wcIfz7KJ/MV2O1KfR0xTvdUIr7x31eimWFhtpqGmqrGRi8wUcP4KflUQDOFMa4vZ4nnBFpBDrH2qFvgZ+/rNpZvJS5/MZ9Xupd7qQZ4XDaCcz6+fbjMn3tSN8CnWPt/PpWcocUhmD++4qk95XgjnJt/Gqod7mFe4kyIp0aRCEQltnkxIzuYhEcTru+lzqmU3QnhSHjNFy8u055cyGLd9cB9Pbb03V219E7MHgjY6sWISMBzXh5cyFL10IUy4quOFM+TE7MEJj1UywreggSL1LeXGicgEYiERqJ3W6Y2qB2M74nAQDPnMIHcgirTdEzPdWIBu3WWmPyzFm4UOXPaByy/CTTFP/XM4nI6qNUw0rQn1R+ievZIs0DWtZr/6kolhUyfZRkCk1WBFKT5kKVn5vdljRBjUSmhLzZHY9/1gQ0Eqn48d2QkIQoFIln9/KoiEDawNBuIiKRybgmk+jR6PLLNN1pC51j7dpjWkv2zBmLscj10eWX0v7S3LRh9A87TNGaCu5smgAAAABJRU5ErkJggg==",
	ta = "./assets/scarecrow.0a741746.png",
	aa = "data:image/png;base64,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",
	na = "./assets/sunflower_rock.aa68db78.png",
	sa = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAbCAYAAABiFp9rAAACtklEQVRIS52WS0hVURSG102NLLFB9BgkElZkGfa40uimBIFhRBAlUZOgSSpNFByUIFgDKWdpERUERUREEYhBIKmTQu1BlmLdTHTQgyYNKkq78S/4D+sc9zn3sSf3nr32Wd/+/7XW5cYkg5WoPZWKOjb0+HIsXZrIAwR0dDRH5mlr69J4FDAUBAgB1fGySNDASFLjAIbBnCBADhyqk5aTdZrgWENnJOh2T6vGL17rlUf3e52wBSALsYCZqWlNVrKuNBQKYBjMCRrs6/GpAAQKsXDjdLDd+xoWqHKCbCJCXr4YU9D2HRWC71EKEQvWKiNQUEE6hTmBoMDa5VIYtDMnEO1CMizUijayK5A4aHfW1jEZlGGxPkwcVIgzOSsK9jPtjFKYsyIXjAqDsawVBVuYz0wM+8L2MlbkamG7Z+vFYbZ7WYFYcDukrpmye9eLrkp+/J+KnhtZJIUXPuqshg6sLbjtMGsbO4x7/Sf6JP/gVpl7+Mb7RKyg/lMs8peBLc2BtNZxlrjXNHlalUDFmeerlH1+11dZcm6L/D771q9o/43a1Ir1efL3TkKLbJWw8GHW3ay5oiqa937zNWFn42d99hQBMjM6K8XJhCw/MiXV803602NnxcILjg75LgQQVmv3Gh+o68lKtVJBlY0VqZKda70DxcM18qPqqcLsrLApAPn+YV5wDnsDeZfk3vikZ5O1jnbGAFk8/ktWH98gUITvm9s3aSLY+OrutOASiG2rL9VnnPlTXujt8/0Hyyb0YsGGiA8WSaxqT1kKL1kY1X259V6h79onnPDgRQB5tvSnr70Pl28U5FHrLIxqrNFQg2XttXEA4YC2++isd44ODfcn/e1NG/ECldAi3MqlnMlc5wDghZz/gqgQCgAgGLe26mgt68izFhAJYtBa6utZxwMUve4eC/2f+B+A4Aw4XGYwOwAAAABJRU5ErkJgggAA",
	ra = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAAAaoAMABAAAAAEAAAAZAAAAABm04sQAAAFZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Chle4QcAAAMDSURBVEgNnVVLa1NREJ48atpSiLHUB100KmrtTrOxC0X/gG7EZREVcaGguFRX1qW4sAsRFelGENy4ExcViwhKKW58Uolg8RELFmNsTZPr/Sb9Tuee3NrQgfOaMzPf+WYmNwmJkbGhQhCjlgOjE4k4fSu69HJG+49/lNrANXeden1OxqQQrBYsAkQmAIEgOKR4a304h2PVfDxXABFkCUBk0/ayJIeOQaWS7NzKraR7jrYEH2FE7waDBgB0mX2VkNYIr3Wt5k/rulC6q/VcCTAZ8Q4PAAGD3uEjCgCQ+aedasYVh7YQGKNemdJBQDWMmZoYMU0IAkHw9KkrImG9sM7fuNBguHiXkREBOwC+OrnHdeuvvzWp1usaAw0Uye/c5d4AtSCIWnkTOhFNggfAtj56R4GZyumL9yV/4rt6wXb8/HXda+rQBD6ITZPFYicipXiQsgxB4x4H271Xz6h7CiCD277q62jM16Z+vnAY0NU+tUm6r6o6nmUgL6nBw1J9MC5rss+koxzI58c5Wbv7t9olS4+kOJmTpmYgCEFhTR1fDx3ShjNSh/pAkD4wRZ3ZuU9ub9G7JiDVmokgAEYqtNXDe5wJgD3rZVyFIGiGJKbnHzbqy1hQa8xaQAdQKwAgsNNn+nRbTHTpyk9Wgp+dfFBWynC0LFyAcIMuWjDtbe/sHv7tl6YjHZ0s7JgSjFbEB7EMsZ8tdbswJEBFbI3ACkX2U+mnCXWxYAyKddfBWbFgTUB0JJh1xp732Ps/1mzPjPtrmXyYjfx/OaDu/m/y5X2XDgbzGUBvWeAerAE4t7MD2FpDNNfmwGM08W7pkw+w/wkC+51WeXlPO8+yQWOt6/8RCeUYRbThwRbWv8MZTMAQABB0ZOXmWc1I3IP1d2RZqdfiZMEQFME5WB8LMvN2g8SBwMb1OjqEbQ4HfEYgyD1fzdpBb+sHPeprQfh494OFE8UHoz53qKZbAuIAtu1v/qh+JRAYOUbqEU6296nD1305QYf5QhZW3wRkL7mPA+ddXFDe2fUfckaZibj7WYkAAAAASUVORK5CYII=",
	oa = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAGCAYAAAARx7TFAAAAAXNSR0IArs4c6QAAAIxJREFUGFdjZEADpsIc/0+//cGILAzmwCRA9LEn+xmsZBwZQAph4mDGySvZDOY6UxmOX/FgYGBSZGD4d5/BUmcHA0wcomgTH4O53yeGQ6v0GVg2OzD88T3AYBd2kQEmDrfu1CZOhj+r0xguzFrCYJAWA1cIshbuQJCJnGzsDIwM/xhAgl9//Qa7C+RmACDTQqV9SdFWAAAAAElFTkSuQmCC",
	ia = "data:image/gif;base64,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",
	la = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABgklEQVRIie2VsU/CUBDGf1VJmAmkkjgSEoREmQmJdHCos5MD4T9wJHE2qdHB/4A4MDnbwaFGiTOagCaG0UQaiYSNSEwdtKXQ9j2cXPim13f3vu/u3rsrLPHfUGQOajLjRNnsQU96fk1GXtdUAHLplLf//PYOgGHhyERW/kruR11ThRlGCvgPzZO70Uf5zyOQnprMOBcHBarNDm4GMuTSKarNTuidhN5BWJRRuH/5ENoDJbIHPcWwbO/7xLf277soZRMYlh35okIzsAc9xauronhRhjGIyEMzmMftaWW6PtNk7gEI+0DX8xydt7hsPwGwX9zk+LAMgGl2FxIQNomazDh3IVGbZhd7OKLRHku7WSoAUN6IUcomgOmrab1OPD+RSGSJ3E42LJtSNoGu538tP6WZfPbZKawD4pEhvGR7OBKZPbuoDAuVqFaMA9Boj2fWLkFfUCKhgKVvOdeTL4/Mj1oxzm5sFQDNfFxcwHFm59bN3nbkIKtcPcycVxTp72GJIL4BwCqUBBgkf1sAAAAASUVORK5CYII=",
	ca = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABpklEQVRIie2UPUhCURzFf1aCY4TyEhqiJOwDwlmEcGhwCYeGaChpa4pqEIK2wqGkqbUMGqQ1DArekAU1hARZjxBagnwkRlORxGvxPfx6971aWjzTvff87zn3nvsBbfw3HFYFktunmXFqqWA5v8tKPB6WABj2eozxh5dXABIympVJx2/FaxEPS8IdmhrUTmoU11dv16QpIsnt01KzY8wd3tE/s8pHA9/f0FcUhZT3mrnD1nG1PAN9lYqiAOD3++v6tbhJH+Aa6jHbQLOBWio4EjIaQDQaZWUxaXAXZ09s7y7X1btyxyRk1fRGtdyBWio49Fw93YPcpPcB8AzM19WdrC8IxUFwi3TEN6datk/WF6ymAhbvwHGVZG0ny1HuHoDpwAgbSyFbwoaGiJTcPu18K9w0nsnkuXwsk32uWL5mSwOAUJ+TYPWmXD6WAcg+V4w6kYlpRPpLTsgqwaEeIpHRKpMHoPJVZGKsFxB/GcJDVt/eRbTBi2KwFVEs4AJgL/dZ19YFioKIhAZyZFw7rXwbYrWIBVxMOjsBCGdu/2agm5hxIuE2bOMHExigydk0jlkAAAAASUVORK5CYII=",
	ma = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAUCAYAAABSx2cSAAAAAXNSR0IArs4c6QAAAFBlWElmTU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAD6ADAAQAAAABAAAAFAAAAAAC21OEAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgoZXuEHAAABwUlEQVQ4EWNkwALERVT+owu/fHOHEV0MRQCm6cU8UQYGl3YUtRJyKWA+NkMYQBr/fzvw//8mSwgNYoPwuygUMZgFcJOxagRpQtaIxIcZAHY2iPPilhkDw5H7DAw2inBDMfgwGaA6iaTXDEwwPjk0I9jWR3MI6/0xC6KGIw1MgwKQBczaU0lYM1xFJUPl5M9gHljzhCVMDB37XjIUFCeDBTU0NMD0jRs34FqQGeKCW4DcHwzwAANJHjyyhaE4q4/BxhUSaEd232fonVaErI9he10y2CJQfINtBjFgwc/JwcNwduUisAZRpQScGkESGKHd0gcJEJBkRZs/iAIDkI3oABJgUFHGE30M1RMOM6w+fw0sEmqoxdBaYIuuB84H+xnGAzn9UI8TjAunt227ynD01juGw09+MyCnbQzNIB22MqwM1mpCYM0gTSAA0ggDMAPgzgbZWuEkDg5JkEYvL22o2qtg+vevFwwOOhJgdsc+hv8gA1AC7OX7jzDDsdIweZhzYTRYMSy6Eg05wPz5538wILNBgiANL6AFA4rmfV76/3f9/ssA0oQOQIa4sTKDhZ22XQTrQ9EMkgEZgK4RxodpgvEBj8beUSbF5RsAAAAASUVORK5CYII=",
	Tr = "./assets/mysterious_parsnip.6afa5a08.png",
	Kr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAXNJREFUOI3tlDFLw0AUx/8pSYsUKUSQLhYpmE4hgx3SoVIyOGR0zthB6O7X6FRwcOzcD+AQrB3aQadMVhDRpQgGHEpplJ7D5ZIml6TB2Te9u3v3e//33nFADtuMmmQzapI8sWIeGFqq74MULh6ErPhC1uHqqs6pStrLDfyL/QNDs02NlHSZ2y/pMmxTSx3MboX+k+H8LKBiGckZWyowdcL11EmFMoaoWAZp98oADDIf2pFHu+6PUdLlCHTdHwPY52CMkViybWqk05UoYOaGMN/vdKXUPooAMBkswambuYgPha0pOFRJ79KSBcUySFUtYuF4XLZr9zNQBAB3N98AgEv5gItlDIH1oKoWAQAnZ1IQNBksI2AGov2i9nxPkywcD/OhLQRlsikxMABUag0cHr8E4HavjI/XOr7enoIYVhlrGfcVbT8hBq/UGgAQgLbbE+995t8WVx1Xk2SZQAA4Oj8l4h4F/qw8vN8+Zt7Z+WMzUF77BQL3kYrxAktcAAAAAElFTkSuQmCC",
	ga = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAsCAYAAAAATWqyAAAAAXNSR0IArs4c6QAABQVJREFUWEfNmH1MVWUcx78XEbmH95cb7wwCbQWC9AKVi+Vo2AZGL9MsXcYf9Veb4mwSK/8wRricaOufao3c1Jqul6vQkhSbjlqUIQq21KtEcoVBya5wIQRO+/0Oz+2eew/3nkPS5fnn3PM853l+n+f7e3meXRMWSDMtEA7MCWRDXrLsawMHz9sNr2t4AgEEHEQAbCuTWJAVjyhP0c794OSfu5uVpxFlDCkSMJDZXCAU6eibUClSkBKiUsQzjnwp5FORgIN4ukDsTPh+eXood21/NVy16V0fjvD7hd5xfgrlPOdrKaOpyIIDOfDJJmUz15v5IbJCbxF0ZVVqGU/Z+PL+WbPJpyIBBxE7Fi46UBuvdM3sTCjkpYznuA4lxBq6sibgIIK2KE7is0VQS6FTPOQcX6QSxbOfJk2agLNDTr+F0+8HZGl1ZBiDKEmrvylJDBx3jPq14/cDWqg6N4hBfu01Y8+nbyOrbCsbsDXvUVG592994S3cmz7G4/Vd037t+P1AgAgIetcDQt8JmDsGUjHjmspg5RpSbN3r0z+nK7bweCMFCADrnXJNwEDko3m89e17N6p2nhm/jN/rrNtgiUmAJTJJNT7ouIHBmwOoqdjN/deGLqnGd205wO+mp857hYRXx7GqDLl8VSRP8AfyYMZjKkM/95zRBdJ0yoE1DT0q26qXY9UPyOXrSnHuyBE2sPMLtSFhlQySIq8Uv47BW/3cbYlIxEen32WQpLhUpERkesXRjmfPcN+KtWvRdLgFa+rPuuyrQORf3mCXfPa+ImHDN1maQXnjz+s4vK8Pm2rU4/vrbFi3OYVBtFrVkzbuXv+a4nLT/e/MAnI0T3b3HwUp1QJKXWpXJqfQ7RzHM/dUonvwJ1Q9Uauy13DiTeRYHsKXvzUiRwpFdrBSecUa7tlDcehuy2cdESC0GMFogbR0WtlYaX4FtEBEUaP5vtJYE0Skq9UxykZWhiu39bYRPjPkwuTH0dH/PcqXbmAAagTUdPkgChIfRbv9O1Z+ZbhyRrWNKLf6isgwfmoBzQpCO6nvmtYEWRykXJIJhIKWGgUpgVC7Pc2Xai+Q6twgVtYQiPBtR6/Z89CSCSQzWqkpnu3asFI7BAz9pkOzwC3WDINonJ5yckQ6ipJLcPXmRTYYtSQO/aO9MAcrst8dcx9+tJ+E/VYvqyJA6ClOb90gmltVOhnEYk5ig5Q51BLD0hEnJTDc2KQSV5f+6nKB+FjPNaTr9HVbSF4Wm8u773Fcxo4QJ3ZOSEiQkjltCSRWSkCf4+r8g1ANIYMvjXciKzgItslpfBCczawESCBDY/34+7bTEIxhRZYnFCI7Ogetv1tdiuRbHuY4GXDaUVI5htZGCWlRWbgw0K7bPYZByDXkBoqPJYv//TeAFMh93obC1Sa0H5cht67nCut21fUZKoZBSBFqZJiAqJFBchmpRIp8+3EIksLT5s01clRoLCZKViHk5CkGoCCdyQ7ES4lIikh3AZJiRjLHiCKyuew5mNIyIP/RwzBU2Iac/ShKjoZtOJRBKH6uDHf/P8FKQUgKCIjUGAmfd9tZJXJd1rSMi1Nj86aICDY6yPjwK19q4b4MSySiJTNqT3ARQ13+i6jpPKQ7UA196BnyLZuflt/7ug3SIuCuWAWkOCcbpfu+Yki92SLWNRIjLhaCoBctEOqfgdFT2edc4r1gPK3NBeI/uYYmC2UEzFwhaP4/EcduS68gzZ4AAAAASUVORK5CYII=",
	da = "./assets/kuebiko.59c84ed7.gif",
	cA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAAAQoAMABAAAAAEAAAAOAAAAAPlYdg8AAAFZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Chle4QcAAAE2SURBVCgVY2AYKHD33P7/ILtZ0B2gKy0HlhDm5oVLHbh1lRHOATJgmkFicAmYxlPRLAz/9AMZODkPwvU4VXwHs0EG7d2w5D8/Py+DiaM/WC+YAGmeqC8IVmSp85lB/5kCw0WpB2A+a1Q2A9O95WD2rn85DKwsLAzOATFwi5mQNYNUgTTbZnODNYCI38umMvxTimQAaX74+CnDhLp+uByIwQQi8i++Z/gvrwFigm2edE8NzAYZlhOoDXaBG9MUhi3z1zHwc3KB5WAEI8zvMAFQGIAAu4UQ2GaQ8+M6OWHSYHrJycNwL8DDAFkFcgzICAohSzEgawZJgL2AogKJg64ZSQrOxGrA26+f4QqQGU/ev0Pmgtlwv6CHBUgW5BWQK2Aa0RMUSA3cABAHBNANAhmCTSNENRVIAM/hXWqFs+uoAAAAAElFTkSuQmCC",
	Lr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAVCAYAAACdbmSKAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAAANoAMABAAAAAEAAAAVAAAAAOuH6vMAAAFZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Chle4QcAAAIGSURBVDgRjZK/a1RBEMe/+15EED0Qi6QQI4jaBCHEQhtRQbQRUcwFi1QWKopFokTxP1ArBUFEESxyZxdSWCgxJIVVsBFU5EU8I17ij8RD8Iq7N8533tt37+4sHG7f7n5nPjOzu+fQYWdP7JcOCQ+nXrm81pPfHNzdL8Pbe/OSrSPVZ99/ysDAR+zaslmuHRv027aZOv1ezCAv/M/c1t7z18vGHBlstei1fLI2yDv+Feh9nK298fExebfyI693rd9+/wbGmaNYLArt5MBpqcci+rPRjJs6c5fsz++7JHHckDMjRbFrJFgqlfDs1E3M/JzqqnL1+ijqA8OYuHIR5fJTZ2cyUvmhcwUMYbQLMsHyJ5fdM6LlSpOT+DNxAwsfCji0s2YxL3XNJLSF+zXsuetw6/Y9iEAMjePs3VA7vNUCCRdmlmxQWPemjAZiXTkE0WKEIAizQGZlFQ/T4ROELkAULSIQwlqTgRy+PcJ5kDD74fmtvcrXVUxXl6gbaAv9eLCzskHMsPy7aiBhVstXZBImoDE2ufL0T0+wd2MfxuaTgON9rXYJrOgxiCkUYH5ulpqZB7lh1elqovN7YO+cfsXOBYSbpPL5I5xmunz0QisqXd158RjSrGNb/w6g8Svti85wg+jVy4NHT6TyZTUdazqviQvXi74LezPLUangwsyZxuiLNNvi/gL2oPbA7Odo0AAAAABJRU5ErkJggg==",
	YA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAJCAYAAAACTR1pAAAA6UlEQVQokYWQv2rCYBTFf59maKupqBREwcm2FOIqSB1Sn8BBV+e46ehbuNWhb9DFFyhI6dbJP6uLUyBIRAM2Dn5djJjPgGe7l/PjnnMFEfrsluX53BrMhOrRoqBmtRDegVThmApVH1N4/gHPP2A7KzDa1BqdixRChVL6Xeiat3HJvfWwnTU/o/dT7BiAZRoSIC79qMohBV7NMg3Zrz/z8bsE/qiVXJL36ZA5uDZd3NCvFwGkBmC7W17zCdglmMwA9rwUskdMh+8vKpknKhmlo2Ua8kG/vRoTwNnuGI7n4vScIPs1DcdzAfAPreVQSG+SEPAAAAAASUVORK5CYII=",
	OA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAARdJREFUOI3tkjFLw0AYhp8Lobg4NFAzZSmuDkLp0EVwcXRxkI6Fgr+g/6E/wElwFEFB90LAJUMIOHRxEBeneJAMDoV66TmkOT3TSsHVdznuvnsePvg++M/GmY3aejZq65/vYhMQYOusQCWCp0nB3sWr4dYKKtDttWCeohJnpaQmsECAeVqewS7q7qUmETWws7CNDR/8bUjfAVCRtCSigt3OovwMJQAGsjpp+KhIAvCcf+BWdZU4gFzeJPU4pma6nPAl0PqULIrNd2/QJ7u8AiCUOSfHR6bu6S5CXAOF0ZJFMaHM8XpdvEGf2/G5ER22mgYOZU4WxdzcN4HlFKbDQD8+7Kxoe332D97sKUyHQW3Lfsv3ZfpTPgG1Wnx81fTf/wAAAABJRU5ErkJggg==",
	Pr = "data:image/gif;base64,R0lGODlhEAAQAPUOAHM+OcSstTtXgBJOiaW80jpEYD4nMSkjMT6JSOU8RLhvUP///8uprNZGToFOYZhSWmJeecpPV5FIT9rIzipCZzlEYmJde7RhYs2yvTmJSikgMb1tUnM8OVpQas2ytOY8QWKBpNVEShBMi6S+1TkkMRhAczFQe7mtuU1GYsqwss9BS6BeZSQ+ZbNgZ9K4vR9DcVtXdciyuseprG2Am0Fdg1JQc81MUjFMc2qBnCA8YgAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAOACwAAAAAEAAQAAAEQNBJBYy9RmpZWVrDQAzZ5lRNkoRhuVXBJ4quVgksW3NGMYaj3QmDMfGMyGHSWFmamk6bMAmNKq0IwwFhdSC4zggAIfkECQoAAQAsAgAAAAsAEAAABkPAgAJgCBiPRmLKwGwmDSvVYjAgDIpEVSJBpWINp8TUSviiut2vwUq1fgNNZ4CIrNPrxzt+Xtzz/X97CAYHCH4IhntBACH5BAkKAAEALAIAAAALABAAAAU/YKAAhhGcaEBKT+meZJRMw0AMJukkSV3nBshgYbMBCzcfTuWi1G7Ak6sEM6VSpCvWqmV2q19vF2E4IL6IczcEACH5BAkKAAEALAIAAAALABAAAAZHwIACYCgGjkiirOUqGgPESCIBGxAGBqghllgMvlgtBHwlZImF2QscJjpZ1nb26JwTkfjjPZ+c87V/en58e3wIBgcIgQiKf0EAIfkECQoAAAAsAgAAAAsAEAAABkdAwIZDKpIASCTRc8F0jEpS6PMRmUaiIxHzWYi+WQDRAsaOtKQKqFQCo42kEhadBEDFx3qdqN/n+3iAUYKBgBkkGhmCGYqAQQAh+QQJCgAAACwCAAAACwAQAAAGR0DAhkMqFgFIANFzwdRuRyXJ9vmIRDQRSYr5LESj65ZouZpHY1IFVGqLpcZiSStNIqNEuz6vT/L7dYCBgH96GSQaGYIZioBBACH5BAUKAAAALAIAAAALABAAAAZJQMCGQyoaAUii54Kp3W6kJMn2+YiuuSgR81mIRlctyXItj8QVXGldEomNxpIYSQdEAcS6Pq+n8/t4d4B/fYR1GSQaGYAAGYuAQQA7",
	Vr = "data:image/gif;base64,R0lGODlhEAAQAPULAD6JSD4nMTYlLSkjMSkgKx8dKP6uNHM+OTAiLbhvUOU8RCogKyggKi0hKxgcKTEkKXtVKb1tMaRtMeY8QaRVMSkgKf+uMTmJSikgMXM8OTkkMb1tUo1iL6RvMs1pOYthMZwwObRtMb1lMTEgKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgALACwAAAAAEAAQAAAEPnDJdIK9QWpZRSmGoSjZtlTEF47lhqoiaZ5BCsatViEwO1eYy4w2HFaKvxySuNQpkccm5zkEBAYA6QKQXUYAACH5BAkKAA0ALAIAAAALABAAAAQ3sKUTmr2WisB7DsRSGIaiVBRRjOXZpCtpogESt3TAsPNbdR4fZkgZYorGT1K5RBoBgQFgCZgmIwAh+QQJCgALACwCAAAACwAQAAAEOXClE8K6eFHRqr8UUTSGoShWWBTlmQYia6JagDSyW1fk/F6eCsiSyVCKRiKythw2mUtAYABoAqrLCAAh+QQJCgALACwCAAAACwAQAAAFP+CSHEG5nCgpNE1pLiRRFJyhKAEcyIVh4zqe75YjIVhDIMnV+RVzJxeUhKqeqNYUNKvjXrdZbBYQGAC8gDM3BAAh+QQJCgAAACwCAAAACwAQAAAFPiCwZVqpAShKPlUFmapWOY4VTdNJzrWF6zKaxZcDrFoSItCkofyMpxQMmqrGrFUSNqXdUr1d7EWDuXgv5m0IACH5BAkKAAAALAIAAAALABAAAAZEQMAmoykWAUgA8VGpfEJHpabicFgsoIlGSrVaJlpu9QreLpsfT1lqLGbN2yQgSpTb6/YkPi/lI/d5gHIXGhgXfheHfEEAIfkEBQoAAAAsAgAAAAsAEAAABkRAwCajKRoBSOKoUvmIQJqkpuJwWCwTKIBItWInUW71OgFvNcvm00w0GrVEpBwQPc/v8bs8r7f3/X18dxcaGBd/F4d9QQA7",
	Hr = "data:image/gif;base64,R0lGODlhEAAQAPUAAGqFOVJxQTlVMWp5OXuNOXOJMb1tUnM8OTkkMRBMi2KBOTlZMTGVMRiJgykgMRCRrDmJSlquxf/iKTGZMUp5MVJxMUFZMRmLgTaYMUBbMTpZMSkjMT4nMfngK7hvUBJOiffhK016MF2uwRSSqTOXNT6JSHM+OVp1MVJ5SvbiKWqBQXORQUFtMXOVMUqBOT1iMGh6O32TPkx7PUFUMlRxME9tMDhlMFF2MGl/L1JwMGp7O1FwMH+VTFuFQgAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAEAAQAAAGTECA0GPiGI8coVJYzGAwnScmuQQUQ1BRdFq1ckKd0WcEIlGXV+hle1YWNc8tt1pEHrtePL6o7/L7aG2Af4BMgn2EgCUcGyWFQiWOgEEAIfkECQoAAAAsAgAAAAsAEAAABkZAgMfEARiPRuKMw2wmObYbpoOpFomhqYiKuXJCndFnBCJ5a9ML18uhTatdABHQdMqLSOQ8f9zz739PgYB/JRwbJYEliX9BACH5BAkKAAAALAIAAAALABAAAAZGQIDHxOEAjkgAMfMqOo/EECbWwViN0U5HVMVgOdLRZwQifTWyzqX7LcK6XqUR4CxC50kkMZ/c8+9/gIF+fCUcGyWBJYl/QQAh+QQJCgAAACwCAAAACwAQAAAGSUCAx8QpAo5IYiaHKxoBxBCmw8NYOVBOqDMSda5ZaeczApGwRM2ud/li0E6OzvrOIuNHInKfx/KTfn92goOCeoIlHBslhCWMgkEAIfkECQoAAQAsAgAAAAsAEAAABknAgOGAKCICSCTRUgGojEoEZSKJoCaTI5EieSQkWK2U2nikGOJFRbECZwNEI+IUhh+TUHtyH+XviX5JgIF6hIN+EAgOEIQQjIFBACH5BAkKAAEALAIAAAALABAAAAZKwIDhgCgWA8gA0VIBEFRHJYIykUQkrglCSpE8Eo+JllttSFKMLXFRURRaYrXRyBoTk8joHY/f85F+f4F8g31bfwEQCA4QiImNiEEAIfkEBQoAFwAsAgAAAAoAEAAABT/gZRxIaV4XaVUAMSAoSU1SJAWwLD3JM+WImaQhYQAXFUVB8UuZTAIgagpzTq9WbKyqJWm33ywWgnBAvpCzNgQAOw==",
	Zr = "data:image/gif;base64,R0lGODlhEAAQAPUMAJViM+U8RPrLLtefMT6JSLhvUHM+OT4nMbJUOLRkNikjMYpAN59SNohVM6FiNL5rNqJHOK5pNL5cOcRXOqRJOJRhMbRlMaxEOeY8QYMsOSkgMf/KKTmJSr00OZwwOb1tUnM8OYtAMTkkMdWdMbRVOaQ0OcVEOb1IOaQwOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAMACwAAAAAEAAQAAAEPZDJYo69R2pZgQggmG1MNQjfF4xblaghq1UICMvcscAiWWIY308orBB9xmMLd0wqc88ZU0g4KAhRBgGrjAAAIfkECQoAAAAsAgAAAAsAEAAABDcQFHOAvZa2w3s+zhCMY0UNghCogXkgLOkyY+weItkCFNB5vAoG0xteisZg8rNUJgkHBWFJmCYjACH5BAkKAAwALAIAAAALABAAAAU9IFMYx8GcKEMCQ+me5CA8QR2YZCIIAX+rB4TNhjssBj0isAQZFk+uEsyUSpGqVioWuJ12uVvCQUHoEsrbEAAh+QQJCgAMACwCAAAACwAQAAAFQCBTGEfJnCgJDFFpMuQgCFJgH/CRCDYf4CSEbfjLLQYTX5HkogyBuJMrSkJZT9VrKqrNdbFcbVZLOCgIXwK6GwIAIfkECQoAAAAsAgAAAAsAEAAABkZAwAckKooASCSxMrJcjErRaLPBnDCYI9FSxXS1IhK2mwUQQyOSCVsmGkUlLDgJgJqPdDoxr8fz739RgYB/HCIaHIEciX9BACH5BAkKAAAALAIAAAALABAAAAZGQMAHJCoWAUgAsTKykC5HpWi02WA2J4xIarFivlop6esNE0Ojp+m7JRqLKPM2CYgS6fg7PqnfS/1IfXuCdBwiGhyAHIl+QQAh+QQFCgAAACwCAAAACwAQAAAGR0DAByQqGgFIYmVkIV0uoqRotNlgrJ4o0WLFeDFaEcnbBQOIoZHz0jETjcZMGEkHRM/3Op2or/P7UoCBgn99HCIaHIIcioBBADs=",
	Wr = "data:image/gif;base64,R0lGODlhEAAQAPUAAKSuvVJpgxBMi4uNpFpdc6yyvb1tUnM8Of///zkkMZyJiykgMSlZg3uBlDmJSpyhtIuNnKShrKSltIuRpF9fcrhvUD6JSD4nMVVohXM+ORJOiSkjMYqPoJmJjZSltHN9lIOFnJyhrLG2wo6Llo16f298k1pkfH6ElyxYh6y0w4KDknuAka6zvwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAEAAQAAAFQiAgVtllnpeoimWHaBoipytQcm881/aFwUANbVX6BYW8EiUnQwxVJdSJ16NSS9bkM1vlQrdZrJcFplouG8sYYFFzQwAh+QQJCgAAACwCAAAACwAQAAAGQUBAJXMBGI9GIunCbCYvo5NGg6gWiSXEtIq4XjDTsMZrEk+9F9HWCiACms52EYl004/2u1z/5O/1FhcbFnwWhHpBACH5BAkKAAAALAIAAAALABAAAAZAQEAlc7kAjkgAsaMqOo9EDgKlQViNRIxma0VgL9qt+EtJibffIrX7PTqLUGMySZzT5XYl3l7P6/0WFxsWgIR5QQAh+QQJCgAAACwCAAAACwAQAAAGQ0BAJXMpAo5IYmeFKhoBRA5Cg0JYL9ALRsO1IrDELXcMvlBYqLGm7Kxes0gnFo6s0+1HIj453+v3d3YWFxsWgBaGe0EAIfkECQoAAAAsAgAAAAsAEAAABT0gYBxJmQAoSioNw5hqMiCCMCHISQa1gOeAXa+nSxAKLmLQVJLgiikAbBmtkqrRKza25Xa1WEdi4eg6ytsQACH5BAkKAAAALAIAAAALABAAAAZEQIDhkCgWAUgAUdFgMEBHZWKAEAgQIURCGrBaEVqu17slEgpOj7VsNH7CxCQyGpfL63YkPr+39+9beQAOCQsOgoOHgkEAIfkEBQoAEgAsAgAAAAsAEAAABUCgZBxJaUooqTQMM0RJmgyIICAIFJOB7SO7RM9nCxIKrQdAEDSZYBISaiqJRa3UqTSrxXK33GtYNnYkFo5yOhwCADs=",
	jr = "data:image/gif;base64,R0lGODlhEAAQAPULACo4WD4nMT6JSCBBa+U8RLhvUCkjMRJOif///3M+OTA6WTQ4UyM/ZyQ9YyU8YcVtcyBAajmJSikgMTkkMSk4WjE4WiA8YlJpg3M8OeY8QRBMi6Q8QYuNpLSVnL1tUs2NlFJqiiBBbCg7Xl9qgaSdpCU9Y0JTciY7X21+mIqUp6Rxe3uBlL2VnJyltJw4Qb1VWnswOaxlar2JlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgALACwAAAAAEAAQAAAEPnDJkoK9QWpZ1TkIQhDZtlTDF47lhqoiaZ5BCsatVgEwO1eYy4w2HFaKvxySuNQpkccm5zkUBAwC6UKQXUYAACH5BAkKAAAALAIAAAALABAAAAQ3EJQUgL2WrsB7Dg5zIAhBVNRwjOUJpCtpomDc0kHDzm/VeT2MkCLEEIsfZFJ5LAoCBoFSIEVGAAAh+QQJCgALACwCAAAACwAQAAAGQ8BFIREILI7IBVEhKjqPxMEBhEAQCMbo4VC9ZgNSrhWrDABCYm+5OOqSiUdnEWpMJuF2JD5f5tP9fXwCAQYCfgKGfEEAIfkECQoACwAsAgAAAAsAEAAABkXARSERKC6OSKKiZCoaF8TB4ZBCEAgBaEB6QFixWq73miUCTqgxmOgkfcvZozNORNqP9Xsyrtf28Xx6eXoCAQYCfwKIfUEAIfkECQoAAAAsAgAAAAsAEAAABkRAgAczKU4ASCSxYrmsjMoJRKNBsDKZI3FaRWC1UirCmwUQKc0WGWycqL7mYxIaT9qjdzsxn9zz639+eRETEhF/EYd8QQAh+QQJCgAAACwCAAAACwAQAAAFQCDgYVNZAihAVtbFdac6QZqGIE82ybSNZDpe7QbckSgtzqcoM5U2QVIKFZNOp9YrKqvlXr3YnRYQmUgiYzJ6HAIAIfkEBQoAAAAsAgAAAAsAEAAABkZAgAczKRoBSGLFcuHIYpPkBKLRIBAZV5RItWIz22n1mgEDiBSm82UmGo2wMHIOiJ7t9DkxT9/zpX+AgX58ERMSEYERiX9BADs=",
	zr = "data:image/gif;base64,R0lGODlhEAAQAPUNAIEuN/6uNI1JNeU8RB8dKHM+OSkjMT4nMT6JSDYlLVUnMbhvULJOOqZSNzEiLE0mL0MkLrBOOaRIObRZOd5dOYtIMTmJSikgMb1tUjkkMSkgKeY8QVIkMRgcKYMsMbRMOXM8Oc1dOc15Mf+uMTEkKVIkKaRZMZo+OM18NjkmLkIkLzUiLGsqNKBMOKhUN8l4Nj0jLcJXOiwhK6xVMaxMOTkgKd55Oe6dMaxVOTEgKUEkKd6JMZRAOc11MQAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgANACwAAAAAEAAQAAAEPLDJVY69R2pZE/lgtjWVAoYjeQBD64pbxbhvWglBrsNahV0pVTBYGdp4RmGyhzQWl5xmEHEwIKANxDUZAQAh+QQJCgAAACwCAAAACwAQAAAGP0DAonAAGI9GYurAbCYPqhVhOi0SWVSq9XAaeL/b1hcMIB5QgXR6C2g6y0Ukkiifx+tw/FOfxyMOBgh6CIJ4QQAh+QQJCgASACwCAAAACwAQAAAFPaC0FMchnahEJk7pnqTyQERNmCQw2DV+MIOg0CeICIO+UiPADPhOrhLMlEqRqlYqVqXFXrdcMOJgQIjN2xAAIfkECQoADQAsAgAAAAsAEAAABkTAxqJwKDaOSGLCISsaG0QFgQCbEg7QA2AwsF6zDK54gCUKXrFx2XlwBd5rJPtIRNrp2Hsyr8/28X9+fQgHBgh/CId9QQAh+QQJCgAAACwCAAAACwAQAAAGRUAABpQpZgBIJJFE0miMygynQ61Rj0TPZkvtYDOfrXjzrYhoIfHXmJmNRt8kAAogyu/2ezKvrx/7foCBfRYZFxaAFoh9QQAh+QQJCgAAACwCAAAACwAQAAAGREAABpQpFgFIAJFE0jiPygynQy1RM1HPZru5Rj9cLpZYEUkmIcpmbDSaRuwkEkqU2+v2JD4f5SP3eYByFhkXFn4Wh3xBACH5BAUKAAAALAIAAAALABAAAAZGQAAGlCkaAUhiLqdpajLJDKdDpeqgRM9mu+1gMx8u91vh4Xo72+ZrNN6+yDgACiDK7/Z7PK+v0/t8eoFyFhkXFn0AFoh9QQA7",
	qr = "data:image/gif;base64,R0lGODlhEAAQAPUAAM2RSv+uMVppi6x1MTkkMb1tUnM8OTGZMXOFaikgMTmJSkpxWmJ1YmJxWpShi72li72RYhBMi72BMZxhMbR5Mf///3OZe5llMz4nMT6JSP6uNHM+ORJOibhvUCkjMVppib6ljWdwXr6TYJKgjDaYMZxlMb2BOWKJc7R9MV15asmRSj1aTqFuOL6cdqh7SV9yXnyIdaiijIxcM7Z/PKx9SmKBapSui2JpWlFtXLZ7Mqt1N7F/PGJ1YFJ3ZQAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAEAAQAAAGSkCAsLPBGI8YoVJYvGie0OQSUBRBo1MqBlThfCpg6bI4qnw44IpYWQyR3vA1E4nMau32Ij6r34/le31+c4NsgHYZGB4ZhQAZjH5BACH5BAkKAAAALAIAAAALABAAAAZEQEBngwEYj0aiDMNsJjGumWY6LRJbVKoVE6twPpXwFlb5cMKVLeZFare3gKYTQETa6/YjPk8v8vt/gHwZGB4ZfxmHfEEAIfkECQoAAAAsAgAAAAsAEAAABkZAQGeDwQCOSADxwio6j0SRRqWpaoxEUMVaxWJGFc6nQvaGUh8OueItrkhwkvfoLEKNySQxr8fzlX58e3+AhBkYHhmGin9BACH5BAkKAAAALAIAAAALABAAAAZIQEBngykCjkjiRZcrGgFEkUazm2owUAyowrFes6PK51MpY4khXo9TrpydGBxp/kbCj0SkHo/dJ/t+WYF8g4KBGRgeGYMZi4FBACH5BAkKAAAALAIAAAALABAAAAZJQEDBQCgSAEgksTSQoIxKAiRANVGPxEclIqAGsARHRRCpmMENxuJkroCNBMThAE4CoACifa/fJ/t+eUeBgoSFgQoECQqECoyBQQAh+QQJCgAXACwCAAAACwAQAAAFROBVGERZXuhFToMkUadKQEEdAAEhP1UkVDUdyVERRCpIIaHBWCwsSZmphDgoU6gYCcvdclPer0yMCn/NWAUhoSAr2uIQACH5BAUKAAAALAIAAAALABAAAAZKQEDBQCgaAUjiZCBpUghJAiRApdKgxEclIqhUAliCoyKIeCvhBmOxqNnQAKLReAsj7wBoXI+/E/t4f4BRg4SFgoAKBAkKhQqNg0EAOw==",
	Xr = "data:image/gif;base64,R0lGODlhEAAQAPUMAK01PXM+ObiLkLhvUD6JSOU8RCkjMT4nMY4yOpOHjP///7NgZ5wwOaw0Ob22veY8QaydpIswOTmJSikgMb1tUr00OZSFi3M8OTkkMb2JlNW6vbSlrLRhYqQ0OaQwOZQyOrY2Pr2fo66ipot5e5SBi6aJjpoyO6Y2P7Z2fLBKUqufo4MxOceusqqcoaY0PK+jqLg2Pp0zOwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAMACwAAAAAEAAQAAAEO5DJEY69R2pZUflgtjEVAIYjeSznJ26VoMz0q1UJXacVdqUqILAi5NmKQeTtWCQqOUwg4WAgPBkEKzICACH5BAkKAAAALAIAAAALABAAAAY+QMAgcAAYj0bi6sBsJg+mU2E6LRJTVKr1gMpWAcSSYkzeHlTk8RbQdIKLSCQxLofT3/dnHn8nHAwEeQSBd0EAIfkECQoADAAsAgAAAAsAEAAABkJAxiBwODCOSAYR8Sk6j0RAAVSoFozEhdWKPQgU26vykAgpzuduUYRWdI/OItSYTBLrdjp+vJ/3+XsEBwYEfQSFe0EAIfkECQoADAAsAgAAAAsAEAAABkRAxiBwKDKOSCIi5ioaGURAoQCbFg7Qw8JqxRIFCgXXe0i0WOEw2flKk5FObBZJPxLr9DveLt/r/X11BAcGBHsMBIZ7QQAh+QQJCgAAACwCAAAACwAQAAAFPyBAXViJAShKRkzTmSrWPHRFnyRH7w+OZYrgzmeBODRBhc+E2QR9KQAMQIpaq9YUNks9cbtfMFeCmUi+kjM3BAAh+QQJCgAAACwCAAAACwAQAAAFQSBAXVhZAihARkzTeKeKNU/9VA8mc7atkxmFUFH7YSwQh0MjNJpKG4UxhYqRqNgrNqXdyryo7lZMlWAmErAk7Q0BACH5BAUKAAAALAIAAAALABAAAAZFQADlgikaAUhihNFodjBJTONBpTKgRE61isVkFGDwo0uCOM4aRddoHHWRcAAUQIzb63Y4Pk+f8/d5gHESGBMSfAASh3xBADs=",
	$r = "data:image/gif;base64,R0lGODlhEAAQAPUNAGWJXj4nMeU8RHM+OT6JSDaYMSkjMbhvULiLkJKgjEBbMf///6A6Q6Q7RD9pNjltMaNFTUtvM5w/SKxIUE+ESKpFTqI8RUBkNk9xR0NyO3uUdaJHT6NDS0FUMqWVjnM8OTlpMaRESqxIUkptMTlxMaxASjmJSikgMTkkMUFZMeY8QTGZMZShi5w8Sr2JlGKJWr1tUkqFQaRASpw4QaxMUlJ1SgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgANACwAAAAAEAAQAAAEPrDJM4K9QWpZVflgtjUVAIYjGSSL0C6LuFUI7MKyVjFC7+ccDCalIhIrxhQyOQMml8xgVOckEgIGwrRB0DIjACH5BAkKAAAALAIAAAALABAAAAU9IHAMAWCeJtkFbJsGWFbMc0lqNG0H3iL4i8VuE/wFdwGOYLncAVouAAlFnVJP1qu0pN12vVpCwEDoEsraEAAh+QQJCgAMACwCAAAACwAQAAAFPyBzDEHAnChDKlfpniRQUEVdmGSy2DUeIAtBcLHwSSpDoq9kETgFvpOrBDOlUqQr1qpVcbXZrldMCBgIZHQ3BAAh+QQJCgAMACwCAAAACwAQAAAFQiBzDEHJnCipOE9pMiRQFNFcBHCQLIJ954iFUCDEkSSQCbGYczUEUCPu5JqSUNjTNZuacnNfrZe75RICBkKYoP6GAAAh+QQJCgAAACwCAAAACwAQAAAGSEAA7IMqogBIJDH1ID2MStRrRY1Rj0TWQrWgrrAo12LLXYBbslJpbAYQjSiZSgVOAqDuo91O3PP1fnmBUYOCgSYoJyaDJouBQQAh+QQJCgAAACwCAAAACwAQAAAGSEAA7IMqFgFIADEFIpEeRyXqtaquRiuUlLVQdataomvRJS/CqFaoVBKR0cZiSIVOIqNEuz6vT/L7UoBIf32EdiYoJyaCJouAQQAh+QQFCgAAACwCAAAACwAQAAAGR0AA7IMqGgFIYgpEaj5QSdRrRaXWoETWQrVdrLAo16I7BrdCpTRtATYaZ2CkHAAFEOf4O16u39vrfn17gnMmKCcmfgAmiX5BADs=",
	_r = "data:image/gif;base64,R0lGODlhEAAQAPULADpZMf///3M+OThyMbhvUD4nMeU8RDaYMSkjMT6JSEBbMTllMTlnMUFUMjltMTphMThzMWSPXjaIMWuCZOY8QTmJSnM8OTkkMUFZMWKJWrSVnMVtc82NlJShi6Q8QTGZMTlxMTlZMb1tUikgMZSoj1J0SqahoDpnMXubdYOVe8WVnKS6pKR1c8VhaoMwOb2JlKxlapw4QQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgALACwAAAAAEAAQAAAEPnBJIoq9RWpZ1TlBYBjZtlTDF47lhqoiaZ5FCsatVgEwO1eYy4w2HFaKvxySuNQpkccm5zlMFBAJ6SKRXUYAACH5BAkKAAAALAIAAAALABAAAAQ3EBBRgL2WtsJ7LotzBIFhVNRwjOUJpCtpomDc0gXDzm/VeT2MkCLEEIsfZFJ5LCYKiIQyIUVGAAAh+QQJCgALACwCAAAACwAQAAAFP+BCCEWxnOhCKk/pnuRwREFgGGZ8HPWdFwMJz4ZTFQCQoc9YmvSKpJOrBDOlUtErKqs1dqtfbzdRQCS+iXM3BAAh+QQJCgALACwCAAAACwAQAAAGRcAFQVAoLo5IouJUKhoXxMHhQAoYDAVoQXoIWLFarveaJQIYqDGY6DR9y9mjM05E2o/1ezKu1/bxfHp5egkFCAl/CYh9QQAh+QQJCgAAACwCAAAACwAQAAAGRECAyHIpXgBIJBGzyKSMygvo8wmoKJQjcVoNYLVSasCbBRBDzRUZbLywvuZjEhpP2qN3OzGf3PPrf355FRcjFX8Vh3xBACH5BAkKAAAALAIAAAALABAAAAZFQIDIcikWAUgAEbPIdDRH5QX0+QQCG8pFSrUGKFpu9QreEkPNDqcsNRY9YWISGZXP5/Y7Mq/n3/14W3oAFRcjFYOEiINBACH5BAUKAAAALAIAAAALABAAAAZGQIDIcikaAUgiZpHpvGCX5AX0+QQClFiUSLViKdtp9UoBA4ghprNlJhqNrjByDoie7fQ5MU/f86V/gIF+fBUXIxWBFYl/QQA7",
	eo = "data:image/gif;base64,R0lGODlhEAAQAPUKAJOHjL63uikjMXM+Of///7hvUD4nMT6JSOU8RJmJjadvdaGWmsOYnLuOk6iJjo16f6mfo5yQlbKWmjmJSr22veY8QbR1e7SVnKyhpJSBi72dpL1tUjkkMZyJi6yNlL2JlHM8OSkgMbR9g6lvdcuOkrOVmsBscqiMkamMkc15e6R9g6yFi5SFi8V9g7ShpLR5g8WVnM2hpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAKACwAAAAAEAAQAAAEPFDJMoy9RmpZE/lgtilVQCDoJ27lmRKr1qKIOpIGAIZ3hV03XDBYGfZiRmFShjQWl5xm8GAQHKCKwzUZAQAh+QQJCgAAACwCAAAACwAQAAAFOyBQDAZgnib5GGybGpFEzHNJBgSi18Cd7wSbAfJD8EgGB+1Yarl6JRSKJJ1Gq1DsS5vFHgyCg/YgxoYAACH5BAkKAA4ALAIAAAALABAAAAQ50JVhjLvY0bSqv1RAMERJWCGBrCVqiCvSagbQxDNVKeZJX54KyJLJUIpGIvK3ZC6Py4NBcGgeqssIACH5BAkKAAoALAIAAAALABAAAAZCQEVhYCgqjkhiAlUqGhXEAAFhIlgNUIMUwb1mt10Clgg4kcJjp2FkFWeR6iMRSZdj68k7/r3n7+d7BwYCB30HhXtBACH5BAkKAAAALAIAAAALABAAAAZEQMAGxClyAEgkseP5iIxKDoVQqbQIhCNxWq1gtVJq9QsgslSflDdbNhZXZGISAG3P7/J7Mq+39/19fHcTHCETfxOHfUEAIfkECQoAAAAsAgAAAAsAEAAABkRAwAbEKRYBSACx4/lYXkclh0KoWGEEjpRqrRCy26r1qyWympYYWWosusDEJDIal8vrdiQ+v7f371p5ABMcIROCg4eCQQAh+QQFCgAAACwCAAAACwAQAAAGRkDABsQpGgFIYsfzsYgunCSHQqhYCZgokWqtEAjaafUKBhAzTMtHUyYajZkwcg6Imu30OTFP3/Olf4CBfnwTHCETgROJf0EAOw==",
	Ao = "data:image/gif;base64,R0lGODlhEAAQAPUKAIgwOeU8RCkjMXM+OT6JSLhvUD4nMa01PSZZEY4yOpwyO5oyO6Y0PIMxOZQxOos0Maw0OeY8QSBZEDmJSjkkMaw4OSkgMb1tUnM8OYswOZwwOZw4OaQ4OZQ8MYc3NY48M6o6Op0zO7Q0OYMwOaQ0OZQyOpo4OKE5OYU3NQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAKACwAAAAAEAAQAAAEOFDJMoy9RmpZU/hgtinV8SHhSBomigbiVp7pWAFgLWOYuvq+ClAlHO6MRyQnhiwiCQYBQakgTI0RACH5BAkKAAAALAIAAAALABAAAAQ2EJRhgL2WNsN7NgsTjGNFHSNCmgaqqgHrpCtAGQpZ2lXn8ZggJYgZEj9HZNJIJBgEhCQheowAACH5BAkKAAoALAIAAAALABAAAAZCQEVhYDAojkgFMVEqOo/EQ+AUqAaM0SrCijVIt9ur0gAwBcJiYhFlTRsVziL0nUQS68k7fr7n9/V4BAYCBH0EhXtBACH5BAkKAAsALAIAAAALABAAAAZBwEVhYCgujkhiIsQoGhfEQyDwmQYMUIMUgbBio9buNQtQgMRjotPjzSKdWDdyLqcfifZkPI/P1+kEBgIEfgSEeUEAIfkECQoAAAAsAgAAAAsAEAAABT4gcGFUSQEoSmba9pgqBUWRxNEnOUs0Dug0CS+So7A2nV7RRNH4SCkA7HeKRqHWFDZL5ca8Xe6EYpl4J2ZuCAAh+QQJCgAAACwCAAAACwAQAAAFPiBwYVRZAihAZtq2PadKQVEkRVxEyfR967zaD7hqbSq1HclU0hB3KUCMFK1Sq6krVrZFabHf6IRimXQn5m0IACH5BAUKAAAALAIAAAALABAAAAZCQMAFQykaAUhiRrNpaihJCiQSkVBJUOLUao1kpdSuF6BkNkVjotE4+iLfAChZDn8T6/A7Prrn9/V4ExQWE30ThXtBADs=",
	to = "data:image/gif;base64,R0lGODlhEAAQAPUNALhvUCkjMf///+U8RBJOiT6JSD4nMXM+OYqPoLNgZ7iLkI4yOl9fcj5MablMVJU3QExefEFTcac9RrZ2fIMxOUdXc0FScZ1IUKGNmJ0zPENUclNkgZ43QLpMU0JUcr1tUjmJSikgMXM8OTkkMb2JlKQwORBMi0phg+Y8QYuNpDlMakFVc4swObRhYpw0Qaw0Ob1MUkFZe6Q0OTlIYqRIUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgANACwAAAAAEAAQAAAEPLBJcIy9RmpZ1/hgtjVVAoYjaShC64pbhbhvWjFErsNahV0pVTBYGdp4RmGyhzQWl5xmsGAIFKCNwjUZAQAh+QQJCgAIACwCAAAACwAQAAAFOyACHAZiniZJGWybGpc0zHNJTjRtG5jg/7vKD4ggGSyEZHKHaLmKJRSKJJ1Gq1DsS5vFFgyBgrYgxoYAACH5BAkKAAwALAIAAAALABAAAAU9IAMchsGcKEMuT+meZDI4Qz2YpCLYNW4ggqDQ14AIg75ShMAk+E6uEsyUSpGqVipWpcVet1xwwRAoiM3bEAAh+QQJCgAMACwCAAAACwAQAAAFPyADHEbJnCi5cFlpMmQyDN08GLChCIJ95wieUIAjNTSbYdFl8BCeSxTzREJZqbhrKqvNdbFfb7dgCBS+hXM3BAAh+QQJCgAAACwCAAAACwAQAAAGRUDARzQqjgBIJJHlesmMylELRYVRj0SSYEtFYUeprVjwVa1iJ/HXOFqZTN8kAAogyu/2ezKvrx/7foCBfSAjISCAIIh9QQAh+QQJCgAAACwCAAAACwAQAAAGRkDARzQqFgFIAJHler1KR+WohaqiYKiRlCToCqpaYsrrDY9Uq1js1DUbiyuTOYmMEun4Oz6p30v9SH17gnQgIyEggCCJfkEAIfkEBQoAAAAsAgAAAAsAEAAABkVAwEc0KhoBSCLL9WrKRslRC0Wl0qBEkmC7RWFHKS73q1rFzifB12icfZFwABRAjNvrdjg+T5/z93mAcSAjISB8ACCHfEEAOw==",
	ao = "data:image/gif;base64,R0lGODlhEAAQAPUNAL2tpfKsRBJOifrLLikjMXM+ObhvUD4nMZOHjOU8RD6JSJmJjf///7ighKaOcb2geaqDb6CKgK6ih3Z3bsahfqqRd42Dd6mRd6VZWzlZg5wwOTkkMWp1e71tUqSVg+Y8Qb2upJSFi6yRc5yJi//KKbRxYhBMi/auQb2RezmJSikgMXM8OaxMWkFVc82Je6Q8QXt5e1ppc3ssOTlVeyA8aiA8YpSBi7RIUqw4QQAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgANACwAAAAAEAAQAAAEQLBJU469R2pZV2BCKGRbUwHMAIbkdg6BypbmgapJ3moV8uU6WgVzodWMxgpSuFsenbzmUgnlSI2KA0FRbSi4zggAIfkECQoADwAsAgAAAAsAEAAABDvwmXKevZauw3s+QMMIpFBRADOM5AkOwdo+FKIySe4eDp4nrkfHQ6tgMJQj0qgsNj9PZ1NxICieimszAgAh+QQJCgANACwCAAAACwAQAAAFPmBjFMfRnGhDLlHpniTASEItmPEwMDZ+yIFdzYd47BJIXwmCTKpMDVcJBk2hSNYUNkvldr3brOJAUHgVZm4IACH5BAkKAA0ALAIAAAALABAAAAVCYGMUR9mcKLlUVmk2JMAMk2Af8AEMAWMLuNhs4APmEBcKI8EMug4YZsKJep5IqOwVp01xuznwVhwGKw4EhVihBocAACH5BAkKAAAALAIAAAALABAAAAZIQEBntSluAEgkcSTywIzKDYhBYsRMpiMRRDqRsFnAlspgYLWbkAjl+rjRxs3rLT4mofWkPrrXE/tJf4B5g4J9KRsqKYMpi4BBACH5BAkKAAAALAIAAAALABAAAAZIQEBntSkWAUgAcSTycFpH5QbEIDFMGdNGCiKdrCYtt8r4hLfEkAhVYn0+aKNRA5cmkVHifa/fJ/t+doGCgYB7KRsqKYMpi4FBACH5BAUKAAAALAIAAAALABAAAAZLQEBntSkaAUjiSOThzGib5AbEIDFMplqUCCKdrNjttMr4fEximwhVuuE+YqNRJkbaAVEA8c7f8+1+f3p5goF/hncpGyopggApjYJBADs=",
	no = "data:image/gif;base64,R0lGODlhEAAQAPUBALiLkKI1PsnDxqGWmp0yOykjMXM+OT4nMeU8RLhvUD6JSJmJjb63urNgZ////6g8Raw8QayhpLSutL22vbRhYpyJi6Q0OXM8OTkkMb1tUikgMTmJSpQwOb2JlOY8Qc3GzayhrJwwOaw4QZYxOqQwOamfo416f6E/R7uhpbZ2fKAyO7arrsrEx6o7RKI1PayhpqE1PqyipgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgABACwAAAAAEAAQAAAGRMCAMGE4GI8HoVJYXDie0OQyUGRAo1PqAXB9SpfFBmJM/iqLI3I5W0Qes1o4vChnm+tx/Plep+uZfHAKBwUKfwEKhnhBACH5BAkKAAAALAIAAAALABAAAAY+QEDCcAAYj0ai6cBsJg+llWM6LRJRVKr1kMpWAcQTYkzeHlTk8RbQdIKLSCQxLofT3/dnHn9XHAoKeQqBd0EAIfkECQoAEAAsAgAAAAsAEAAABT0glBjHAZ0oRC5D6Z4k4whO7ZgkYNv40SC7m+pAeCCOx14pgET0Tq4SzJRKkapWKna4nXa5W8WhoOgqytsQACH5BAkKAAEALAIAAAALABAAAAZEwEDCcCgGjkji4hUrGgNEhsPBmjoO0APAasUSGwgE13sYwVrhMNnpSpORTmwWST8S6/Q73i7f6/19dQoHBQp7AQqGe0EAIfkECQoAAAAsAgAAAAsAEAAABT8gkF1YiQEoSlbRJJkqNjn0R59kR+8OjlGe4M7HsVggQY/PhLEEfSkADECKWqvWFDZLPXG7XzB3g9FsvpszNwQAIfkECQoAAAAsAgAAAAsAEAAABkVAQOaCKRYBSACxEplMJEclZuKoOj4OjLRjtWqJFI/YU/1iOKQ0RGw2FkkecxIZJc7v9nsyr5f2kXx6gXMbGBobfxuIfUEAIfkEBQoAAAAsAgAAAAsAEAAABkVAQOaCKRoBSGIlMmlKMEnMxEGlgqDETrWKxVA8YLCjy7GYLSJP12gMdZFwABRAjNvrdjg+T5/z93mAcRsYGht8ABuHfEEAOw==",
	so = "data:image/gif;base64,R0lGODlhEAAQAPUNADpZMXM+OSkjMbhvUBJOiU56MPfhK////z6JSD4nMTaYMeU8REBbMTllMVF2ME9tMFRxMEFUMppQOLh2TXJ8O1FwMGdrMj1iMIyHMYVyNHSCSUFZMaQwOaxIOcVIOb1IOTGZMVJxMZxhMXN5MfbiKb1tUjlZMTmJSikgMRBMi3M8OTkkMUp5MeY8QZRpMbR9MaRQQaQ4Ob00OZwwOaxEOaQ0OYMsOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgANACwAAAAAEAAQAAAEP7DJEZK9SWpZmVJLuGRbUxWKYYjkdhoHsY6lmaAqW1fAJ9KlCuZSsxWLleOupeQwm8mmJio1VhEJAaLaQGybEQAh+QQJCgAAACwCAAAACwAQAAAFPiAwBAlgniYZJWybJo2jLPRSkoViGPWdFIYDgWcDkB46YpGUgMx6xlLLFUVZSVYUNvvidr3bLCIhQHgRZm4IACH5BAkKAA0ALAIAAAALABAAAAU8YDMESdKcaEMyV+meZKFgS72YsaHbeCIfBEOtB9DshipXxnZLnlwlmCmVIlGr06tTu9VatYiEAMFFkLUhACH5BAkKAA0ALAIAAAALABAAAAVBYDMESdmcKMlUVmk2ZKEY02IncFIYh2EvuNiM4APmABVK0UhySX5B3MklJaGuJys2Jd3mvNnuVrtFJAQIMCLtDQEAIfkECQoAAAAsAgAAAAsAEAAABkVAQEm1Kq4ASCRxExq5jMoVC0QiwVqtI5FFOqSwWcCWWsVqV6bmC3w2rmJm8TEJlSfvUfydqE/y+3aAf3onKygngCeIfUEAIfkECQoAAAAsAgAAAAsAEAAABkRAQEm1KhYBSABxExqJOkfligUikVqf1krKIh1SVy23GhYTTU2Rp2U2GjntJDJKlNvr9iQ+L+Uj93mAcicrKCd+J4d8QQAh+QQFCgAAACwCAAAACwAQAAAGR0BASbUqGgFI4iY0EtFmq+SKBSKRWq1alMgiHVLX1nZaDYsBRBPTKTsTjUbbGEkHRNH3Op2or/P7UoCBgn99JysoJ4InioBBADs=",
	ro = "data:image/gif;base64,R0lGODlhEAAQAPUAAEFhgxBMi5Q4QbSyveY8QbSutL22vTkkMb1tUnM8OZyJiykgMTmJSpQ0QUo8Wv///4uNpLhvUD4nMZmJjYqPoEBghk89XJA0QSkjMRJOieU8RHM+OT6JSJQ2Q7CwupI2Q763uo84R66vuJA3RYuNnI6Llns3SD5ReG98k6qkq5Q2Qo16fwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAEAAQAAAFQCAgRptknpKoiuX0vHC6AiUFxzMtVVnvy6uSxffLlS6apBKoKqFOOV00WpoamVZptom1VresbpQjwXDAAM45GwIAIfkECQoAAAAsAgAAAAsAEAAABj9AQGQjARiPRuJKwmwmJaXUYzotElFUqlVyyni/W9MXDCBKVJp0egtoOstFJJIon8frcPxTn8dzJBgcehyCeEEAIfkECQoAAAAsAgAAAAsAEAAABkJAQGQjkQCOSABxAio6j0TKQ/SoPozESsZaxUosmbDYexmJw95iR8PWeI/OItSYTBLrdjpeqcff93yAHBIYHIKGe0EAIfkECQoAAAAsAgAAAAsAEAAABkRAQGQjKQKOSOIEBCoaAUTK4+GZPiRQSSWTsV6zFq44gyVePqFx2SnpaN5rJPtIRNrp2Hsyr8/28X9+fRwSGBx/HId9QQAh+QQJCgARACwCAAAACwAQAAAFP2CEJEd5RChKKoZRmOoBPfRAnyQQ7PSDH46dMPBrGAXCn+nQIBB+qQgsQopaq9YUNks9cbtfMJdxWDC+jDM3BAAh+QQJCgARACwCAAAACwAQAAAFP2CEJEdZRmhEKkZbnOoBPfQzPEcMBHxA5yRHrwc8NI4NAa9oKjUIxRQKRpJaq9YUNhvjorZZsJRxWDC8jDM3BAAh+QQFCgADACwCAAAACwAQAAAGRMABInEoGgdIosLANBQOyQPkQaWSoERAYLt9YA8OLvfbKJcFga/R2Pgi3wPogAiv0+vvO34u3+vxf3AMBwsMewMMhntBADs=",
	oo = "data:image/gif;base64,R0lGODlhEAAQAPUKAD6JSHM+ObhvUD4nMTaYMU99R624qSkjMf///1ZnSFR7TEFUMk9xR1lxUGiRYtXb01V1TFJ6SmeSYcDKvcHMvcLLv7TCtL1tUmKRYmKJWlJlSlJ1SlJ5SjGZMay6rL3KvXM8OTmJSkp9QTkkMSkgMbS+tMXOvbS6rLTKtAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAKACwAAAAAEAAQAAAEPVBJEYa9Q2pZE/lgtilVgRDnKW4l6hKr1oJfzA0GouvwSGIY308orBB9xiPLdkwqb08ZUwgYHABRBQCrjAAAIfkECQoACQAsAgAAAAsAEAAABDgwiTCSvZauwXsejEKMY0UVCJGm5lCoMNEaJNkOBqKzCZV0nl4Fg/ERL8ajUPlhLpWAwQHABFCVEQAh+QQJCgAKACwCAAAACwAQAAAEOlCJMIa6WNHUqr9UgThESVhhiRArOhRsfGqD8ZilWz1IP1MXTwVkyWSARgwySWMSnU0mYHAAOAFWZgQAIfkECQoACgAsAgAAAAsAEAAABT+gIgRDqZwomUBRaSpkgRASYQ/wUBDIPOMxG++WM0woQgLQNaj0lDkU80RCWam4ayqrjXa93WoXMDgAvoBzNwQAIfkECQoAAAAsAgAAAAsAEAAABkVAwAU0Ko4ASCRRs8lwjMqRCNFBYDqdI1FUxVK1Iw62mwUQPZaPaQw2jkpf8zEJlSfvUfydqE/y+3aAf3ohIyQhgCGIfUEAIfkECQoAAAAsAgAAAAsAEAAABkRAwAU0KhYBSABRs8mIOEflSIToVDGdkVRktVa1RG5nPAaPPJaPuiw1Fi1ZaRIZJc7v9nsyr5f3/X18dyEjJCF/IYd9QQAh+QQFCgAAACwCAAAACwAQAAAGRUDABTQqGgFIomaTEWU4o+RIhOhUEZsoUWTtdrTTjngM9lg+aNQXQDQaT2CkHBBl1+dyIn6u30v9f4B9eyEjJCGAIYh+QQA7",
	io = "data:image/gif;base64,R0lGODlhEAAQAPUMALhvUBJOif///ykjMb63umJUXHM+OT4nMeU8RB8dKGdXXT6JSDYuOC8tODEtOL+TmDQuOmtvgzAuOb1tUjkkMTEsOb22veY8QRgcKRBMiykgMWJVWjmJSnM8OXthamplc4uBg5R5e1pQWouJlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAMACwAAAAAEAAQAAAEP5BJYI69R2pZVRLgl21MRQhIKiTjZqJBALbaG8ssWR7FFwo0Dgaj2xWLlaMuqXQFlcymUFp7FheHwYLKWGybEQAh+QQJCgAKACwCAAAACwAQAAAEO1ABc5S9lpbDez4EI4yJUFGEgKxCcoJqEIxvIcizq1BHM7amXaXjEWKOlCMmqfw0nU+mcnEYLJ6LazMCACH5BAkKAAoALAIAAAALABAAAAU/oAIYx6GcqEIWTumeJCE8gpAIZiwgvJ0fMkQgUPsVIENi4leK1G6/k6sEM6VSpCvWqlVxtdmuV7w4DBZkdDcEACH5BAkKAAoALAIAAAALABAAAAU/oAIYR6mcKFkwRGkqJCEgciIc8CEjvJDgMUFgKLjlChIC8Zdz1YwklAuXQ1lP0WuKqq12vd2sdnEYLL6LczcEACH5BAkKAAAALAIAAAALABAAAAVBIDB1VEkBKEpulWWZKmUJ12VhwknOV3YJGJ1MkCkKcoBVy5IBCk0ynDAFgCVPVCopq8Vyr99YGPzlUDScMCf9DQEAIfkECQoAAAAsAgAAAAsAEAAABT8gMHVUWQIoQG6V5Z4qZQlX7QlUPF9ZJmA50qznw8VYrhkwZip9jKQUChaVSqtWFDa7tXavuSyAQ9FwxOOzOAQAIfkEBQoAAAAsAgAAAAsAEAAABkZAwKRDKRoBSOKmYmmGKEmKRXCpCkBQ4vSSyQgwWamg6xWEl03LCAwgGo2iMHIOgLbt9DkxT9/zo3+AgX58HBQaHIEciX9BADs=",
	UA = "data:image/gif;base64,R0lGODlhEAAQAPUAAAAAACkjMT4nMXM+OU5SNWhdNCZcQvd2IotYU7hvUD6JSO+FJNi4Lf/eH//5TnyXinnd8v///1RUNm5wOLdpLIxyRHucjVlpPXJwOFdXN2xuN4CNPXqnpXVaMWN0O2JzPn+inI3BtWJoO36moYC4uYC+x2BXOH7Fz4C6vYC6yQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAEAAQAAAFSyAgJoNgnoKoiuXTHBAURekKlAwyNDFUr6XFYOBQFH+qUqFRPBCRLAHBoDAYGgboDYWyRb3gbdhbGtvK5qQ2jE6L3QpBQOEGKOjmEAAh+QQJCgAAACwAAAAAEAAQAAAFTSAgJoMgnihaWkLrpmJZMQcERZGZlgwyNDaITiWgDAYORXJ4KkkayQOSGWtNFAZDw0AFlACuF+wLK5PLuy76jG6qze+UQhBQtFEK+z0EACH5BAkKAAAALAAAAAAQABAAAAVOICAmgyCIaIqWD2O+qlgyyAJBUXSq5TIMjRtklyoVGgOHQklcCQgY5SHZlL0uBkPDUAWURC9TzNsdk82xL7pYHqvXVrhIIQgo5ADFfR0CACH5BAkKAAAALAAAAAAQABAAAAVPICAmg2CKaCqWD7OYpwqUDDJwUBQJcrkMgwZkyFOVCg2HQ7EspkoEzUZxGDicqBIsY2gYsCsnDByWmWfkc+ncS5vX7KdbpRAEFHGUAh8PAQAh+QQJCgAAACwAAAAAEAAQAAAGVECAMDEQGAXCpBJQfDAWoONSWGQgBo1QJIJcFheDgQNC7iqLhYZDoVibk0WCxvM5iN/Uo7HTMOCZb1JTRVOFgIaDf4aEiGeKhYyNAAoCAQqSQmySQQAh+QQJCgAAACwAAAAAEAAQAAAGVkCAMDEQGI3CpLL4YCxGJKRSWGQgBg1IKSKYAoqLwcChgEC602KhQT6Q0UsBQeMRMcbwZPFoZBjyVIBSaYBeeoWGX4iGRYlejY5xkUkKAgEKk0IKmJFBACH5BAkKAAAALAAAAAAQABAAAAZWQIAwMRAYj8JksvhgLEaolEC5FDAQgwYEcppSi4vBwKFwQLzKYqFBPgwU6CpB4xEVGI64sHg8mvQARVQAgIGFg4aIiIKKX4eDjI1VkklwAQqUQgqYkkEAOw==",
	lo = "data:image/gif;base64,R0lGODlhEAAQAPUQAD4nMeU8RIVGNZNPNrZoNrN+Ma5iNbhvUPrLLikjMfN8O/6uNHM+OT6JSLZ0M9m1k8NIQ9BXPLxFPNFSPcBOO7lHQsZLPc1MOb1EQTmJSikgMdVVOc1QQf/KKb1tUnM8OTkkMZRMMc1QOeY8Qf+uMfZ9OaxhMbR1Md62lINEMbR5MbRtMcVIOcVMQcVEObpFQsZSO7h4M5lPNoZAN6JfNLByM7RpMdVZQdVZObR9McVMOcVIQcVQOQAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAQACwAAAAAEAAQAAAFRCAkHgxgnoCoiuUQvHC6QiWBIEu+yGtZKAFcjqcqGRwP4W5GAwhgMWYJdWI2rdYSVkrcXr3F7lYLZomtDUCiUYY02N4QACH5BAkKAAIALAIAAAALABAAAAZDQMGBARAYj0biDMBsJgE0WGA6LRJjCMRiu7ACaoqAduuVOR7jroAIeFGr62LTGUfaiXYkPv/k9/17eQ0ACQ1+DYZ8QQAh+QQJCgATACwCAAAACwAQAAAFQOB0MAAwnehEDlLpniSBREEdmGShIEu/4ACDI8DrAQWQR/GnckFst+bJVYKZUikSNnvdSr1fr9bbACQa4AbaGwIAIfkECQoAEQAsAgAAAAsAEAAABUNgdDBAGZ0oOVBWaUYkgSBTYAMwUCjB4i84ksHxQPyCAEEFYvQhXRBbAIly4XKo7ImkzXK72yv4OxZrG4BEAxxprMEhACH5BAkKAAAALAIAAAALABAAAAZJQIDnAyqCAEgkMaQT6YxKkK3TIeFGoyMxVxpVSSQtyHRCfcMAYgqzu4HRRCNohxUnAdD08X4n8vt7f3qCUYSDghkgGhmEGYyCQQAh+QQJCgAAACwCAAAACwAQAAAGSECA5wMqFgFIADHEEl1cRyVo1emQSJsRSKoqjazXLdF0QoFJYlAK0+K0wlJjsaWVJpFR4n2v3yf7fnaBgoGAexkgGhmDGYuBQQAh+QQFCgAAACwCAAAACwAQAAAGSUCA5wMqGgFIYkgnulxcoCTI1umQrrwoUVUaWa9akOmE+pLCKcyOc9mcAUSjcRdG2gFReP5uJ/Lvfn9SgoOEgX8ZIBoZhBmMgkEAOw==",
	co = "data:image/gif;base64,R0lGODlhEAAQAPUMAJNeY3M+OT6JSCkjMRJOiY5bYz4nMbhvUIqPoIRkdv///+U8RIuNpDmJSikgMaxlaqx9i3M8OTkkMeY8QZRdYpxpc7R1exBMi71tUqRtc4Nlc4tZYrR9g7R5g6h9iKNqcpNVXplseotte4NVWqFpcId6i6Zvd4lgbIZKUKZsc7F6hap+ip9ocJ5ocKxkawAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAMACwAAAAAEAAQAAAEO5DJE4y9RmpZwfpgtjFVopyouFUI4b6qVqLpSBoFGNoVdtk3ILAi5MWKQaTsWCQqOUygwDAQPBkCKzICACH5BAkKAAAALAIAAAALABAAAAY+QMAhYAAYj0YiysBsJg0n02I6LRJLiqzWaigRvmDuSbsFEA0katVcbDrZyDgxjpzTn3d83k4XGAYCeQKBd0EAIfkECQoADAAsAgAAAAsAEAAABkJAxiFgMDCOSAYRACo6j8SEwrOoLoxEBEHB5WINUoJY/C2Eul6l82O9qo/OItSYTBLrdjr+vefv73sCBgMCfQKFe0EAIfkECQoADAAsAgAAAAsAEAAABkZAxiFgKDKOSCKA5SoaGcSEQrFaWA1QA4JAmE6x0SmXCzYUWiqvouxMWRdlpBObRdqPxLs9r8fT+3yAf3cCBgMCfQwCiH1BACH5BAkKAAAALAIAAAALABAAAAU+IIBFUikBKEpSlfWYqqQpNDRNJ8lcPK3kMh/vAty0OD6gSZK5AVMAGIAErVKrqSt2etpyvd9tQ+JoeBvmbQgAIfkECQoAAAAsAgAAAAsAEAAABT8ggEVSWQIoQFKVZT2nKmlKrUCTJDNXf9U6Es3WC0o2LUsHKDOVMjlZChUjTa/WayqrlXa9Xe61IXE0vo1zNwQAIfkEBQoAAAAsAgAAAAsAEAAABkNAACYiKRoBSCKlYmk+JEmJRkGliqBExmW7VWClVerlu2E2OV4A0WgcfZFwAFQ9j8OJ9jg+H+X3/Xt5DRIODX4NhnxBADs=",
	mo = "data:image/gif;base64,R0lGODlhEAAQAPUKAIYxObhvUOU8RD4nMSkjMT6JSHM+Of///6RJUIAvOLpLU34wOJ0yO5xHT71haJ9KUnswOaROVjkkMeY8Qb1tUjmJSrRIUpwwOYMsOb00OcU0Oaw0OaxMUnM8OSkgMYMwOaRIUsVhapxIUr04QaQ8QaxIUr1MUqQwOZFGTqBLUqBIT3UvNoowOJpNVMJNVKI2Pp1KUXkwOX8zOqhJUalMVLxOVgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAKACwAAAAAEAAQAAAEO1DJYIa9Q2pZgfhgtikVIhygIG4len6rVr7hSA5JCtsVdtk3ILAi5MWKQaTsWCQqOUxgYUAoPBUFKzICACH5BAkKAAAALAIAAAALABAAAAY/QEDAMAAYj0biasBsJgeslGA6LRJVggNVYB0gtNkqgIgKU7uD1pY7LjadbaScKEfS6098Xn+vFwYEBXoFgnhBACH5BAkKAAAALAIAAAALABAAAAU8IBAYwwCcKEAuTOmeZCM4Qi2YJHIc9q0ODxvPR4IohjWcK9JTnlwlmCmVIlGr0+tPK+VutYUBocAtkLUhACH5BAkKAAAALAIAAAALABAAAAZCQEDAMCgCjkiibEYrGgFEmOBQE1gH0AHiYO1io9Ow4DuIzVzdcdb58maRTuwbSZ/Xj8R7Uq7P6+11BQMEBX8FhXpBACH5BAkKAAAALAIAAAALABAAAAZCQAClIylKAEgkEcKxcIxKiWhymIwmkyMRVMVitVKqOAtYNkNesFFC+paPSeg7SY/W6cR7Mq+f9/l3FRIeFX0VhXpBACH5BAkKAAAALAIAAAALABAAAAZDQAClIykWAUgA8VOyWE5HpUQzOUwmpolEqrFWr1si1QuWYpqWTJloLJ600iQySpTb6/YkPh/n9/l7dhUSHhV+FYZ8QQAh+QQFCgAAACwCAAAACwAQAAAFPiBAdVJpAij5cZa1XVIqadMx3TBAanZ9xzvfbQKUYFiuDFFnamKKqCggxpRaSVYpNivjdr3bbEXiqXgrZm4IADs=",
	go = "data:image/gif;base64,R0lGODlhEAAQAPUMAHM+OTA4UhJOiSBBa1NhVoaCQZZ8LykjMbhvUD6JSPfhKz4nMSo4WKSOLaeQLaiSLTE4UqyRKSk4WvbiKRBMi1JhUpR9Kb2hKSBAaoOBQTmJSikgMb1tUnM8OTkkMYttKT9VXyZAZIpvL6SNKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAMACwAAAAAEAAQAAAEO5BJBJa9S2pZg/hgtjHVAIYjuRDnJ25Vocz0q1UGXacVdqUqILAi5NmKQeTtWCQqOUxgYnFIPBkJKzICACH5BAkKAAMALAIAAAALABAAAAY+wAECsBgYj0ZiYMFsJheMkGA6LRJBVKp1IcpWB0SDYkzeLhrk8XbQdIKLSCQxLofT3/dnHn9PLA4JeQmBd0EAIfkECQoADwAsAgAAAAsAEAAABDnwIbDWu/jRwKq/1CCIQmlRRKkK51IoK6stRqPcd1s5uNJengrIkslQikYicrYcNpnLxOKQaCaqywgAIfkECQoADgAsAgAAAAsAEAAABDvQIbCqu5gGxqp11CAI4riACzGuwkkVisK6i9E0cUx7T05jnhMKQ7xQisQj0ihcKp3NYmJxSCwdCesyAgAh+QQJCgAAACwCAAAACwAQAAAGQkAAp+MpegBIJBEiaRqVHgxlKqUciZWp1gogZiZg7dVjGZnBk7HREwGPk4Bn9wiHE+t2On6+h/b5exoeGxp9GoV7QQAh+QQJCgAAACwCAAAACwAQAAAFPiDAdV5ZAihAQlIrnaqHUTQ1e3FV1ziZTcAJreexXI4XINFUikyIKRSMFK1Sq6krNrZFabHfqMaz0XQ15m0IACH5BAUKAAAALAIAAAALABAAAAU+IMB1XmkCKAlJLOulHkbNs/SSFU3fXjb9PwrPcikWJzyT6cNDOQEvAOlJnVKd1qs0qs1evU+NZ6PRAjRlbQgAOw==",
	uo = "data:image/gif;base64,R0lGODlhEAAQAPUOAD4nMSsxS314hY5bY1hLWFNRZI9kb7hvUFppieU8RD6JSHM+OSkjMf///6NqcVdOXGhmdp1pcnt5g815ezmJSikgMVpIWlJQYmJhc7R1e+Y8QVppi5RhaikwSotlar1tUotZYnthc3M8OTkkMaxtc5xpar19g5F5hKxka0M0Q1VPYVlUZWVhcYVhan9qeJ9ob7KBildRYW1ndnNMUpRpc2pMWoNVWqR1e6Rpc1pVYqxlagAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAOACwAAAAAEAAQAAAEQdDJs4C9QGpZSQhNImabUxUNAjYNuVXCh4iJq1UGq7elCQw0mo2DwfR8x2Ml2VsyX0Om80mk3qJHBYChsDoU3WcEACH5BAkKAAIALAIAAAALABAAAAZEQMFhARAYj0ZiCsBsJgGqVaCRqBaJrAZi2mhcAadAAFFNfFvdtFdABKDKVnax6ZQj78Q7Mq9/9v1/fHoKAAwKfwqHfUEAIfkECQoAEgAsAgAAAAsAEAAABUCgdCwAIJ2oRBJP6Z5k0UBNYpukECBB4+MAQ2NnSwAHEZ8SWHIUjSqTxFWCSVMoEjal3Vq9X3B3qwAwFGAF2hsCACH5BAkKAA4ALAIAAAALABAAAAZHQMdhASg6jkgiISYrGh3EQgPhSlgBUIAgwG14sUSDF2FNgAGDF8z7zTpR5TPSic0i70ci/q7f5+t+fYGAeAoADAp+DgqJfkEAIfkECQoAAAAsAgAAAAsAEAAABkhAwEc0Ko4ASCTRcsHUjMrRpbHp0DSaI1HS6WwaYO3IA25gswDirJSZlMXGEQkrTgKg6aPdTtzz9X55gVGDgoEUIxUUgxSLgUEAIfkECQoAAAAsAgAAAAsAEAAABkpAwEc0KhYBSADRcsGEOEfl6NLYdBomzUgq6XQ2mkZjS/SIxRqtFFTKZCZistFIUhOTyOgdj9/zkX5/gXyDfVt/ABQjFRSIiY2IQQAh+QQFCgAAACwCAAAACwAQAAAGSkDARzQqGgFIoiWHCd1wo+To0th0Gg1dlCjpdDYaTWM78mDPGjKolGlPxgCi0WgjI++AaFyPvxP7eH+AUoOEhYKAFCMVFIUUjYNBADs=",
	po = "data:image/gif;base64,R0lGODlhEAAQAPULAJYxOj6JSK01PfrLLikjMeU8RD4nMbhvUI4yOsc5QXM+OaY0PIMxOaEzPJ8yO5oyO7ZHO6U/Or1WOogwOaAyO50zO6w9O6Q+O7lGPJQyOr1tUuY8Qb00OZQwOaw8OXM8OTkkMYswOaw0OZwwOaQ0OSkgMf/KKTmJSqxEOaQ4Ob1ZObREOaQwOb1IOaw4ObQ8OQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgALACwAAAAAEAAQAAAEO3DJo4y9RmpZUflgti2V8A3hSBrm4H7iVp7pWAEJCKsVdqkrILAi5MWKnCOSiNQwm0FowEAIQBcBKzICACH5BAkKAAAALAIAAAALABAAAAQ2EBxlgL2WMsN7Ns9SjGNFCeNAmgY6vCVAOekqcw0ZU0Dn3ZggL3gZEoFH5NEYDBgIgWQgeowAACH5BAkKAAkALAIAAAALABAAAAU8YHIohpGcaEIiWemepFBgRV2YcT3YuCEPwFoPYCnshCrXxXZLnlwlmCmVIlGr06tTu9VatQEDIcANkLUhACH5BAkKAAAALAIAAAALABAAAAU9IHAoRgmcKIlUS2kCpFAU0lwYsCEPg43HM97sZ5hQIL1hzhXx5VAu3BNFnVZPpGtKqs1qrdWAgRD4BsraEAAh+QQJCgAAACwCAAAACwAQAAAGQ0CA5gMqggBIJDE0QqGMSpBoszGpqEfi1GSibrJSKhcLWJJSKy/YCCKRiUkAtHyMx+H2JD5P50f9fXwnICUnfieGfEEAIfkECQoAAAAsAgAAAAsAEAAABkRAgOYDKhYBSAAxNEI5j0qQaLMxbVobUHRq6lK1xGmVmo0yXa7XN2osssrEJBIal8vrdiQ+v7f371p5ACcgJSeCg4eCQQAh+QQFCgAAACwCAAAACwAQAAAGQ0CA5gMqGgFIYmiEapJASZBoszFRR1Di1MSlZqVUqxegJHnOnM3XaOx8kXAAlDyPw4n2OD4f5ff9e3knICUnfieGfEEAOw==",
	Eo = "data:image/gif;base64,R0lGODlhEAAQAPUNAEBbMUJtMikjMbhUPnM+OT4nMeU8RP////SytjaYMT6JSDpZMbhvUElfMkhfMl1lP9vRzuXb3evm5+7l5uTg4uTR0E1hNVFjOODW1uPg4tvW2Obc3ubj5O/t7jllMUNgMkpeMkFUMkllMjtgMVBgNVthNFBfNePf3+nf4OLX09rPzFRiOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgANACwAAAAAEAAQAAAEPrBJRoq9RWpZQUpHeGRbUwXJYIjkdiYrErbaq7KlWSyfOOYVzCWnIxIrRiAtWWTWlkmkkwMlKgoCxbSh0DIjACH5BAkKAAAALAIAAAALABAAAAZBQACDUAAYj0ZiqMBsJgseUeJAPRSJgcTAUL0WslwE1fvRcscAYgE07aaLTecbSSfSkfb7U7/n5+8KBQIKfAqEekEAIfkECQoADQAsAgAAAAsAEAAABkHABoNQKDSOyAYRMCo6j8RAgnSoHozRxMBgxRakXETVuyhtu0qnyXpNH51FqDGZJNLr87tbv9fb9QoFAgp8CoR6QQAh+QQJCgAPACwCAAAACwAQAAAFQODDEEX5nCgJNFZpPmSQDNVhF3AhG4Z94LHZAXHLLRyXXpHkwviAuJMrSkJZT9VrKqrNdbFcbVarKAgUXwW6GwIAIfkECQoAEAAsAgAAAAsAEAAABkVACINQKBYgSCQR0HiojMpCIDEwoA6HI3FqwGK1UqoB8YUQF45Vygs2Fk5lYhICNR/nczk+qd/b/VGAf34KBQIKgAqIfkEAIfkECQoAFQAsAgAAAAsAEAAABUBgxRBFWVZoRQLNA0WnWgTJYBzSUcj0jRw6Xu0G3JEWDtekKDOVKEFSChWTTqfWKyqr5V692J22oigIFGMyehwCACH5BAUKABEALAIAAAALABAAAAVBYMQQRWlGKAk0D7RxRVoEyWAcRxaT9I3gu1ntBoyQFo7WpnMImkyaIGoaiRmt1CkpS91yZV9w2MtVFASKsCL9DQEAOw==",
	wo = "data:image/gif;base64,R0lGODlhEAAQAPUTAJWdrLhvUD4nMf///z6JSOfw9vrocvD1+cHZ6fnHWPX4+9nn8SkjMXKozmGHqJifrGKHqHM+Oa6stHGRrXWVrG+Oq4KgrIOjsG6Qp36gs26QrXeXrIKkuHCPpIGhtHqarmaGpXGQpGyQsIOhroGhsKGkr6WnsWmQsW2OrFyCpYCFlXOTsGGAnnaWrG2RsHOSr4CkwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgATACwAAAAAEAAQAAAFReAkBpFgnoKoiiXUvHC6TiVQDMZwIPJaSrhEbtBTlR63nGJRZAkcsNiMhkJNqddrKTvdcn1NrvfrJBvDV4KAQTBPCO1vCAAh+QQJCgAAACwCAAAACwAQAAAGRUBAICIAGI9GYkrAbCYFqlVjOi0SS4WBYXBAWAUmbWI7+J6yW8XiK0BRqwAioOmMF5FIOf6o39v9T4B/fgQCDASABIh+QQAh+QQJCgATACwCAAAACwAQAAAGScBJICIQTI7ICRECKjqPREDB06g2jETJYGAYHBBYwaNgSHQHYceHO1AswsWO9ao0TpxFqD2JJPKTfn96goOEgX8EAgwEhASMgkEAIfkECQoAEwAsAgAAAAsAEAAABkvASSAiKE6OSCKkIioaJ0RAYTBqWAVQgWRgMAwOCCzxMU14B2KBo0LyKhZpZ8jaSCOd2CxyfyTy935/fXmCgYWEfAQCDASCEwSNgkEAIfkECQoAGQAsAgAAAAsAEAAABURgFkRCKWQoSkIVhZmqABSDYTXNSUp1MhwIneBBMxgGA6GjdRkoFkKTYIITpjKwDOnK3XJT3q/2JB6XzWKCgEEoE9riEAAh+QQJCgATACwCAAAACwAQAAAFQ+AUREJZTuhEQhW1YacqAMVgDFkjyJKdGAfEjvSo3QaDocDR2nAUC6WppNHJUqgYCcvdclPe71U8Foe5BAGDQCawxSEAIfkEBQoADQAsAgAAAAsAEAAABknARiAiKBobSCKkQtm0XIKkAFAYGAaHV5QosSauiK3gUb0qBmIH0wlbiI1GlhhJb0QbxLo+r6fz+3h3gH99hHUEAgwEgA0Ei4BBADs=",
	ho = "data:image/gif;base64,R0lGODlhEAAQAPUMAEpOZuU8RHM+Of///2lQaT6JSL09TCkjMbhvUD4nMURMZRJOib7AyVJSaUxQaElQaUtPZ8DFz7/BzUJKY0VKZFFOYcPFzldOZ8DCzLy9xsbBylFOZFJOZlNPZ8s9SkZOZ01QaExPZ0pQaQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAMACwAAAAAEAAQAAAEPpBJJJK9SWpZwVjB8mUbUxFi8C3kVhlBLLfama40lyhfOJYmDAYYJBIrRiAy6coll0xdtOYkFhKHwpRR0DIjACH5BAkKAAAALAIAAAALABAAAAU9IIAICWCeJlklbJsmF7YEy7CUJFEH9g2QhoBwiIPtesWEZVbzkQAt16+EQj2rpyt2un11udtC4lDoFsrbEAAh+QQJCgAMACwCAAAACwAQAAAFQSCDCEnCnChDAlnpniSxcMEyLCZpBAO/4KqELEAk5hIKTe8GJJU2tdvx5CrBTKkUKavFcoPfaxj8LSQOhXAh/Q0BACH5BAkKAA0ALAIAAAALABAAAAVCYIMISdmcKAkwUGk2JLEMxrwkcOIF/LDcOdmAx8ORFIxOwAckuWo+I+7kmpJQ2NM1m5pyc1+tl7vlFhKHQrig/oYAACH5BAkKABAALAIAAAALABAAAAVAIIQISZlAKEoCTGOYakIsQ+AMy0kaQY/nENKs1gvoEoqW4Xc0JR64YwoCC56mUxI2e91avTHw11tIHArgAtobAgAh+QQJCgAOACwCAAAACwAQAAAGR0AHQpAoFh1IBxHAaBhCR2WCsBgEBqJFQmoIeAMLrZRqtQa2REXTAAqjjcaPmJhERun1Oj6P3PP9eYB6W3wOBQkHBYWGioVBACH5BAUKAA4ALAIAAAALABAAAAVCoIMISWk6KAkwjQFFSZoQyxAMCxWTRuD7i92sdlsEhAqWSxJ0kEymiRBFdcSc1yqVpK1yuzJwWPztFhKHgrigBocAADs=",
	Co = "data:image/gif;base64,R0lGODlhEAAQAPUPAOU8RI4yOq01PT6JSOxnbu55f/3v8IgwOfjDxvKVmSkjMXM+ObhvUD4nMf///75MVL5MU/bv7/Ls7f319urg4vfAw+zZ2+zc3rE3QL85Qe3j5O3l5sZOVtJOVsVNVb9NVe/e3+rf4bpETMlQV+3n6O/c3vvl5urb3fLl5uzh4s1JUfDa3MA6QwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAPACwAAAAAEAAQAAAEQvBJtpq9TWpZA3AgAGTbUwkAkiAiuZ0AURBtaTaoAeijXR2fUK9UwVxsNySyovS5mpwnlAnVUKtJ7KChGGAfAy80AgAh+QQJCgAPACwCAAAACwAQAAAFQODDLM1jniYZNGybNoLnzABQkgKAJEh9wwBCgeB7kA4AQ7JIanxmDmap5TKWUCgSNnvdWr0v8Nc7aCgG4AHaGwIAIfkECQoADwAsAgAAAAsAEAAABkfAB2PRaDyOyAcxICo6j0QBAORwAADGKACRQFyzDSmhQPgqG4eRAbDGnouhqpl4dBahxmSSrkfy+2eAeIKBgAMNCgOCA4qAQQAh+QQJCgAWACwCAAAACwAQAAAFQqDFLE1pnSgZPFJpWqQAIJEDAA3cyESC3LkYoFIgAHUHyARgOJJcFBtOh3LlqKgsVnsicVPXr/e71Q4aigF5oP6GAAAh+QQJCgAOACwCAAAACwAQAAAGR0AHY9EoNhxIJDHwuJCMyoYAgEiUAIAjcUoomLBaKcAAIIAdxAPEgiJn0cbi6UxMOqBwu76uT/L7eYCBgH96Aw0KA4IDioBBACH5BAkKAA4ALAIAAAALABAAAAZIQAdj0SgWHUgHMfC4bFJHZUMAQCQQKkBDSiUUCAAtF2Agh7fEA8SiWZ2lxiJLTEwio3W7Pa9H8vt/eoF7W30OAw0KA4aHi4ZBACH5BAUKAA4ALAIAAAALABAAAAVEoMMsTWk6KBk813ZxTdoIAJIgQBaTNFEQAMBuBjAUg8MDxKKxdIQOksmEGaKujlhUi72SutgvWDYml8XgQUMxKA/a4xAAOw==",
	Io = "data:image/gif;base64,R0lGODlhEAAQAPUAAAAAACkjMT4nMXM+OR9Sfi1GdYk3OOU8RLhvUD6JSMWtLtnIMvfhKxJOiSRVfcpCSMKqLdrHL+LMLsZES8pCScmzLuLPL8hDSc1IT8u2LtW/LOPPL8xHT9fBLctCSc5GTdFIT8M6QdNHTd3JLwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAEAAQAAAEPBBIgIa4WMxtFfugtgHWAoYjKRBN64qcULhvahlHrsOTlWEpVTBoGdp4RmGyhzQWl5LnMiEIJKCAxNUYAQAh+QQJCgAAACwAAAAAEAAQAAAFRCAgAsggjGgKmJDgvuoqRBJj22dqOvedo6ZCY0j8jUwGYlFlEjwOUKhRZAK8YMxpjKrdVre6buwLPopTCUEgUR4l2OAQACH5BAkKAAAALAAAAAAQABAAAAVIICACyCAIY6qaSnW+qmgujMXcDLoKRIPfupSp0CgagyOTYWIsImUvymF6eAJMotcpdrVyu98YNiz0csdkaFqUEAQSa0ACHg4BACH5BAkKAAAALAAAAAAQABAAAAVIICACyCCcY5qaSqadqAqYC8NsNiPIJtE0OR1PUPgZGzuVyXDBHJMrmOByqEJHppFUNrtysd5vV6wMf7NkcFqUEAQSa0ACLg4BACH5BAkKAAAALAAAAAAQABAAAAVJICACyCCcwqiOppJ1GrqK5sLc252uJtH8N8ZOZSr8jo0hS2CgcDhHJQ11ohwOUoBJJZttZ+AvmJcdi8dLNFk9SggCCbYoEUeHAAAh+QQJCgAAACwAAAAAEAAQAAAGUECAEIAYCI7HoVJoVGQ6HU1yCTAuGFjGhiGgGgmNcAPbXRoLYnFZaTR4Ph9QeD00Io+eA525n5r3VHWAgVWDgUaEXoaKiUoJAgEJjUMJkolBACH5BAkKAAAALAAAAAAQABAAAAZMQIAQgBgIjsihEmBUZDpQjWApNC4YWOxoujQSGmAwg6s0FsJh8tBouHzeooa6iqyH5kw8Pk/t8/1de31GgIGFZYJLCQIBCYdCCY6AQQA7",
	yo = "data:image/gif;base64,R0lGODlhEAAQAPUOAIgwORJOiSkjMbhvUHM+OT4nMeU8RP///z6JSDdNceji5jA6WZKmnrNgZzJPdrI2PrE2P7I4QLo4QLY/R0BVdytBZS9AYptibp1IUDxRdbQ5QrM7RDJJbu3n6bM4Qefn6ujm6bQ+Ruzm6jFFabQ+R7s4QEpggi1FagAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAOACwAAAAAEAAQAAAEQdDJQYq9RWpZVwiHIWabUyVfOJZmoRwHAx/kVjXi8QW1VgG5XY+DwbBax2MlyVoybUOm80mk+qJHREGAsDoQ3WcEACH5BAkKAAAALAIAAAALABAAAAVBIDAQBWCeJrkUbJsWSRUcRl2SSjDXxl1chwMjePBhagddwFd4GJI6H6DlApBQ2Cv2pN1aS95vWOxFFASIMCLtDQEAIfkECQoADgAsAgAAAAsAEAAABUGgMxBF4ZyoQy5V6Z5kEmSHYZukcgT1rRYNw4FxKOIKAI0wwDyWNrvm7+QqwUypFCmrxXKnX/B3+0UUBIgwIv0NAQAh+QQJCgAOACwCAAAACwAQAAAFQqAzEEXpnCi5VFxpOmQSBJ1hF3ChHLxt4KSGjcE7AAsAiOcwCxxdn+YR5cLlUNgTKYvdcrXWr1ccziIKAsTXgVB/QwAh+QQJCgAOACwCAAAACwAQAAAGSEDHgFAoFhxIJHFRSYCMykIiEDiEDIYjUXE4MLBZB7GB7Xa1BQAkIqIG0MbCiIpOOqDio91O3PP1fnmBUYOCgQgFAgiDCIuBQQAh+QQJCgAOACwCAAAACwAQAAAGSkDHgFAoFh1IB3FRSShIR2UhEQgcDCVDQao4HBhXrbRhMByshy0RAIkoTFW10XgKyJPIKBHP3/OTfn9SgkiBf4Z4CAUCCIQIjYJBACH5BAUKABcALAIAAAALABAAAAVG4DUQRWleKLlUiTI9RVokQXAYhhSTynEwPsOu0MAdaochABJRUByBoclkGaKul9iFhO1yu9cveKsdi8FnLKIgQIwvCPc4BAA7",
	Bo = "data:image/gif;base64,R0lGODlhEAAQAPUAADp4Q1M/OnM+OWPHTbhvUBk8PqBdWikjMRcUJD6JSD4nMfZ1eiAeKSwqLl22SSw4MyQlKiweKy8hLFirR165Si0xMDp6QyghKygnLCUpKzIpLiwpLS0sLiMaKDJBNkZTOCw1MF69Si9GNjp5Q1ukRyxDNU1qPFy2SQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAEAAQAAAFQyAgEoJinoqoimWADDCCpCtQGgOSvAu9lpeEUDir2RQYXWFXrJUiMmbzh0IZj9drKWvccqlfcJjlC3vDCcUhMQYIwyEAIfkECQoAAAAsAgAAAAsAEAAABUAgQAgKYJ4mqSlsmypBM8wIUpLGgCTIsNyKTGI4tAFIm12BZyQpOLtas9RyHUsoFCmrxXKv31cY/E0oDonwMBwCACH5BAkKAAAALAIAAAALABAAAAZHQABBoFAAjkgAMfApOo9Ew8AxGCAQRiIjgeAOFlkFo5soY5WKDihR4J6JRY/7bQQ4i9B6EkncJ/t+eYGCg4B+CQoHCYNlg0EAIfkECQoAAAAsAgAAAAsAEAAABkdAAEGgKAKOSGKg4SgaAUTDABGaIhRQBSPBRQwWWCIDwe2GFZGGqJBAXLPOkftNRDqxWaT+WN8n8X55gYKBfX4JCgcJg1yDQQAh+QQJCgAAACwCAAAACwAQAAAFQiBACEqpAChKBo1DmapiDEgyIchJMkmPDAudglEr+ISRxsOSwAlNiooTQEoBYNST1VrdprrebDg2FocTikNi3BuHAAAh+QQJCgAQACwCAAAACwAQAAAGTEAIQaAoFiFICDHQcDhOJgWSaBggEggSQkpkJL6JwYKrYFwL361SEWk8ACWEmmgsXubSJOS41vuJfnqAgVN5hIOHhn4JCgcJhBBfkEEAIfkEBQoAEwAsAgAAAAsAEAAABULgRAhKaU4oGTRO2yipYgxIggwLTDJJ3yM6BaNWsAEnpEjjAXhAjiSTSRJEWScwZPZqJXGv3m9MPCaHvwnFIUHukUMAOw==",
	Qo = "data:image/gif;base64,R0lGODlhEAAQAPUNAF9dNeU8RCkjMTaYMT4nMXM+ObhvUIk3OD6JSJF8MmV3Mc6LM/6uNNSSM96XM75JP7pDPr9DP+6lM75FP+CZM+yiM3t5MmJqM5JvMr5CP8yKM9KRM+2lM7pHPr4/P+miMwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgANACwAAAAAEAAQAAAEPLBJU4i9RGpZF/tgtjVVAoYjSShD64pbBbhvWh1BrsNahV0pVTBYGdp4RmGyhzQWl5xmEEEQIKANxDUZAQAh+QQJCgAAACwCAAAACwAQAAAFOyBgFARgniapEWybEljFzHNJWjRtE9fg/7vDDwggETKBZHIHaLmKJRSKJJ1Gq1DsS5vFIggChBYhxoYAACH5BAkKAA0ALAIAAAALABAAAAU9YGMUBNGcaEMuW+meZMJwTM2YpDLYNU4Ag6DQd+gIg75SJsAM+E6uEsyUSpGqVipWpcVet1wwgiBAiM3bEAAh+QQJCgATACwCAAAACwAQAAAFP+BkFEQ5nSi5NE5pTmTCMNLMEDChDIN95wCecIAjHSCPYdFFiASeSxTzREJZqbhrKqvNdbFfbxdBECC+iHM3BAAh+QQJCgAVACwCAAAACwAQAAAFQGBlFERJVChKLg3lmCqRMLREn6Qy7DSDE4CdcPA7QCYP4c9EiAQCv1QFViFJr9ZrKqutnrpecLiLIAgQYAS6GwIAIfkECQoAFQAsAgAAAAsAEAAABUFgZRREWVZoRS4NRTmnSiRMzUgMIStDP9Q6EsDnCxIOkMnk0TOaSpGAMYWKkajYKzal3cq8qO5WTEUQBAgwIu0NAQAh+QQFCgABACwCAAAACwAQAAAFQGBgFERpBii5NFTrECmRMDT9waQy7DuDEwAe73eATI6Pwc9k8vxQ0AAsQIpaq1YoNkudcrdZcBRBECC4AcSZGwIAOw==",
	fo = "data:image/gif;base64,R0lGODlhEAAQAPUAAMpCST6JSCkjMT4nMeU8RP///xJOibhvUMOzNSRagXM+OYk3ONnKxzBEUT9YZTpNU/fhK8ZES9NHTcE9RCJJajNHUjVHU85GTchDScM6QRVEbPDq6StFVT5QZspCSCVNcCNNci9TdcxHTzNHUzRJVs1IT8tCSchESzVIUjpHUdFITwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAEAAQAAAFRSAgHspgnoOoiqUGGTBBpCtQIjCUFAW9tq+EQeZTlTa8ZK9mGyxk0BmzhDoxm9drKTstcrFfo5e7DbPG18BAEDADAu1vCAAh+QQJCgAAACwCAAAACwAQAAAFQCBwKANgnibJDWybDhxizARRkrIBJUVxDx2IIWGo/Ra9pA9AGnhq0B+g5WKWUCgSNnvdWr0v8NcbGAgC4ADaGwIAIfkECQoAEgAsAgAAAAsAEAAABUKgdCjDIJ2oRDZI6Z4kYjyGQRAm6UAGlBSF3IBRMCRsONVgEQE6hSXA7SY8uUowUypF2nK1XmU4OxaHAwNBYBxYh0MAIfkECQoADwAsAgAAAAsAEAAABkjAx0ExKD6OSGIDMSoaH0SEwUAyEAgD6MABMUAShUKWyAgnrFjtAlMKh8fOAeCaJiLjRztyr+Xv9X59gYKBgHwBAwIBgwGLgUEAIfkECQoADwAsAgAAAAsAEAAABknAx0ExKA4eSCSxgfiAjMoBwmCAhAiEI9EBMSQShYJ2wAgXDNjxAnMRmcfGASD9ICYf0Prxfrfzk35/eoJRhIOCAQMCAYQBjIJBACH5BAkKAAAALAIAAAALABAAAAZKQMBBMSgWAUgAsYFAUVJH5QBhMEASJ8JA6oAYEoZCYUtkiMUErXSBuVxUYrLRaFITk8joHY/f85F+f4F8g31bfwABAwIBiImNiEEAIfkEBQoAAAAsAgAAAAsAEAAABUUgcChDaQIo2SAVZUlDOiCGASXFFJMOZCQGQmE3YBSORwJxgbk4JUMAyWTKEFFYQEy6zWJJ3iw4LCOXzeNwYCAImANucggAOw==",
	So = "data:image/gif;base64,R0lGODlhEAAQAPUTACkjMXM+OT4nMeU8RLhvUI3p89u7oL/OmzaYMT6JSDhyMebSn7l4QtSqoMXz+KpWQ0BbMTpZMf///154U+Tn4ezq5+To4ufp6GN5VO7j4+nq6ZwwOezn5eHn4ePk3evj4u3u7Org4Ozp5+zd3G2PafX19eTm3lNuSmN/VGN6WDllMUFUMpgxOuve3p42Pp0yO+ni4qE3PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgATACwAAAAAEAAQAAAFRuAkEoFgnoKoiiWESPAwpOtUKsjCNDK93gjHw9Cr2QS4Q+FQrJUir9jMWEKdjEcstqSl+rqsL5gLVpHLWXRCAEigJwk3OAQAIfkECQoAEAAsAgAAAAsAEAAABkZACCEggBiPRuJKwGwmBSqUZDoYFIkKxILRqF4FWcfD4IUQVYhD4VAmClJTSbvYdJqLSCQxr8fz739PgYB/CQIACYEJiX9BACH5BAkKABMALAIAAAALABAAAAZHwAkhIBBMjsgJEXIqOo9EBcIkkQwGxihiwWhcswKp42H4KgUR0qFwMBOLparbOHEWofQkkqhP8vt4gIGCf30JAgAJggmKgEEAIfkECQoAGQAsAgAAAAsAEAAABUJgRgRCmZ0oCWFUaWakgiyVNAwCLMgO09y5GOLwMAB1kYmlcDiSXBcbTody5aioLFZ7InFT16/3u9UmBIAEOaH+hgAAIfkECQoAEgAsAgAAAAsAEAAABkdACSEgKAokSCQRgvGIjEqBArFgjAaDI3HqeDSwWiniUDCAJcTIpAM6nIlGQeh9TELR9aSeqO/z+0l/gHiDUYUJAgAJh4uDQQAh+QQJCgASACwCAAAACwAQAAAFQ6BEBEJZSqhEQpjHfacqKMjCNNsgyLTzGAMdD3EoHII7UmTS0WSQMlMpl9ylJDHSdavdprpeWRgF9pavCQEgMU6wwyEAIfkEBQoAEgAsAgAAAAsAEAAABktACSEgKBolSCIE4+G0XIKkQIFYMBqDV5RIdTwMg8F2ijgUDuFxZNLRwGJiCdFoZI2ReElUvs/jiX55gIFShIWGg4EJAgAJhgmOhEEAOw==",
	xo = "data:image/gif;base64,R0lGODlhEAAQAPMJAD6JSLhvUHM+OT4nMf///xcUJH5+fikjMR0aKQAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAJACwAAAAAEAAQAAAEPjDJIIa9Q2opiilE6GVb0oEoUZBbh6jwWpoFGIqs1n2xkXMYzMz0GwKNswqypFzqisamkzhNAAYHQBWgXUYAACH5BAkKAAkALAIAAAALABAAAAQ3MAUxkr1WFDO6z0VIjFulIUSRpqaovq0xzoXZvSmXUIn37RUMhie8EItAZCaIPAoBgwNACZgiIwAh+QQJCgAJACwCAAAACwAQAAAENzAFMUa6OIliSv3XVhAkwVkbYq6eVoywiXJj2VIVa6BW8lWhXgZDGWaKxmBSuUQaAYMDYAmYJiMAIfkECQoACQAsAgAAAAsAEAAABDcwBTFqulgUU0i1idZ1xDaEBVKuxSkS8OhuZOx+w2jcGH5RmODvJMwQi6FjEYhMNgGDA+A5RUYAACH5BAkKAAkALAIAAAALABAAAAQ3MAUx6kgYi2IKIZZWeB7BXRtirgU6fqzbrSZqVaZhZ0mYULwgMJgZEn+XI1K5PAIGB4ASID1GAAAh+QQJCgAJACwCAAAACwAQAAAENTAFMWpNOIliCvmXVngkN4gIQarn5n1f0XIrq1mWeWdYSPHAHzAjHO6MR2MRCBgcAEgA1BgBACH5BAUKAAkALAIAAAALABAAAAQ3MAUxqk1YFFOIL0NWdCRhhBpClGCidd6HbmxLWdbphljPU71ghiccFnvA4065PAIGB4ASID1GAAA7",
	bo = "data:image/gif;base64,R0lGODlhEAAQAPUUACkjMXM+OZCDJOU8RHkuZZNIKzlGQj4nMbhvUDaYMT6JSLdvKfngKzFFfmJvQFo4cWY1bG4xaUBAev+eAE4+ZbZDNTxDYcZFNr9JM9JYMcpLMz5HYz5GY0FHZElRYtFXMbtDNz5HZKR5Jnl5MrE+OaJaKcRMNEdMYVVGZVZDVD9KYT9IY0lTYVJAZlFAZlo8aGI5amI3ak9BZ8RSMwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAUACwAAAAAEAAQAAAFRCAlIsFhnoeoimUxvHC6UuUy3bi8lgLj/zpVyZEoGoOsg6EheUAiBCQNhZolrdhp1lrazrpeoTQLDmvNigNAYaYo2N4QACH5BAkKAAIALAIAAAALABAAAAZDQAEicBAYj0Yi6cBsJg8l02A6LRJFk6zWehgxvmDuKUEucw8hyQMSIXAFTaeAiKzT68c7fl7c8/1/ewoHAAp+CoZ7QQAh+QQJCgAFACwCAAAACwAQAAAGRsACInA4FI7IArECKjqPxMXkM6gOjEQBY8LlYg+OBGM8/lo8iXT6W+w8IBHC9+gsQo3JJDGvx/OVfnx7f4CECgcACoaKf0EAIfkECQoABQAsAgAAAAsAEAAABknAAiJwKBaOSGIFcykaC8TFZJIZWA/Qg4DBmE6xREciweWCD5YVazw+O1uQCOGMdGKzyPyRqM/z+3t3gH+DgnoKBwAKgAUKi4BBACH5BAkKAAUALAIAAAALABAAAAZIwAIicCgeCkgksYLRXIzKw2JCzQwGR6KAwaVOsgdHYsxlgC0rFWqcABsPqQgBnCxAC8S6Pq9P8vt4R4CBg4SACgcACoMKi4BBACH5BAkKAAUALAIAAAALABAAAAVCYIEER1kWaEFWmKZdp3osUz1lwyELTM/UOpIjQUz0ggcLZ7PhEJGmEoWATKFiJKs2q01xuzIw6tslWxUHgEKsWINDACH5BAUKAAMALAIAAAALABAAAAZIwAEicCgaB0hiBaNpXg7Jw2JCpc6gRAFju51gD46EWMz4WlYy1wuW+BqNsS9yPoAOiPQ8Pj/f8+92f358g3QKBwAKfwMKin9BADs=",
	ko = "data:image/gif;base64,R0lGODlhEAAQAPULADA6WT6JSHM+OT4nMRJOif6uNCBBa7hvUCo4WOU8RCkjMT1IWSBBbCg7XjlKX+2gNLY5PS9DXyQ9YiU9Y+OeOPKeNslPPO2dNb1LO81LPqE1OzQ4UyU8YSM/ZyQ9Y0VPW+qhNeOfOjBDX+qbNuiiOeKeOe+fNgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgALACwAAAAAEAAQAAAEPnDJI4a9Q2pZASFFkSTZtlTGF47lhqoiaZ5DCsatViEwO1eYy4w2HFaKvxySuNQpkccm5zkMDBQB6SKQXUYAACH5BAkKAAAALAIAAAALABAAAAU7IHAIA2CeJrkNbJsOXEcURZKUpEHM9Q3kO5oNBwv2iAMPb/grtVxNlJQkRVGrL2xWe60GBoqANiDGhgAAIfkECQoADwAsAgAAAAsAEAAABDrwHTHGu/hR0Kq/lEE4RZEkVkgQ5ZkOImui2oAwsltXS0tTF08FZMlkgEYMMlljEp1NZmCgCDgDVmYEACH5BAkKAAsALAIAAAALABAAAAZFwMVBMCgujkgiYCIqGhdEA4EQKiQSA+hASihYsVqu95olIiSfMZjoBH3L2aMzTkTaj/V7Mq7X9vF8enl6AQMKAX8BiH1BACH5BAkKAAsALAIAAAALABAAAAZFwMVBMCgOFkgkETCJlIzKgYFAKJgSiSNxWi1gtVJqwZtdEBGSCIkMNg5GX/MxCZUn71H8nahP8vt2gH96AQMKAYABiH1BACH5BAkKAAsALAIAAAALABAAAAVA4HIIQ1ku6EICU0Q9pzoYBFEUVjLItF0kOl7tBtyREBJXpSgzlSBBUgoVk06n1isqq+VevdiddhEYKAJjMnocAgAh+QQFCgALACwCAAAACwAQAAAFQeByCENpLigJTBF1YUM6GARRFEkSk7SN6wte7ZbbDRCS1iUDJJlMGiNquogFrdQpKUvdcmVfcNjLDQwUgXAg/Q0BADs=",
	No = "data:image/gif;base64,R0lGODlhEAAQAPUNAEBbMf///y5QeT4nMXM+ObhvUBJOiT6JSCkjMZKgjIqPoGWJXjaYMU5pjDltMURbfE6FRz9pNkVfgjhyMUJbfVFqjHuUdY6XlldedkNyO09xR0FUMkBkNk+ESExlhUFbfDtRc1J1SgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgANACwAAAAAEAAQAAAEPLDJQoa9Q2pZAftgtjXVAoYjOSRB64pbpbhvWglGrsNahV0pVTBYGdp4RmGyhzQWl5xm8DBAHKCNwzUZAQAh+QQJCgAAACwCAAAACwAQAAAFOyBQEANgnia5DWybDlrGzHNJWjRtD1fg/zvBDwggDTCGZHIHaLmKJRSKJJ1Gq1DsS5vFHgaIg/YgxoYAACH5BAkKAA0ALAIAAAALABAAAAU9YFMQw9CcaEMCXOme5MJ0TM2YZBLYNT4ogaDQJ/AIg77Sx8A0+E6uEsyUSpGqVipWpcVet1zwYYA4iM3bEAAh+QQJCgANACwCAAAACwAQAAAFP2BTEEPZnCgJRE5pNuTCMNDMDPCQBIF95wqeMIAjCR6VYdE1oBieSxTzREJZqbhrKqvNdbFfb/cwQBy+h3M3BAAh+QQJCgAVACwCAAAACwAQAAAFQGBVEEM5VChKAtHkmOqwMDREn2QS7DSDD4qdMPATPCQN4c80oBgMv1QFViFJr9ZrKqutnrpecLh7GCAO4AO6GwIAIfkECQoAFQAsAgAAAAsAEAAABUFgVRBDWVZoRQLRNDmnOixMzUDMICdBH9Q6ksLnCw4ED4mk0TOaShSDMYWKkajYKzal3cq8qO5WTD0MEAfwIe0NAQAh+QQFCgAGACwCAAAACwAQAAAGRUBDgTAoGg1IIiAyaToGycGCQaWGoMREYLtlYAcKLvcreEjOjcDXaAR9kXAD1ECM2+t2OD5Pn/P3eYBxBwMIB3wGB4d8QQA7",
	Mo = "data:image/gif;base64,R0lGODlhEAAQAPUNAO+HjD6JSOU8RP///8s4QOtiabiLkCkjMb03P7hvUHM+Oce2uj4nMc6+weLO0My8v/Ln6NjJy9XEx/Ll5tHAw8W2uvjw8dfFyM69wdBJUNPEx+bT1evT1OLS1ODP0dDEx9vIysm7vsi2uspSWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgANACwAAAAAEAAQAAAEP7DJpJi9TGpZkRgCIAjZ1lQEWAhruaEfO7paZQx4TnPMkuumEwYTFBaLlWMwqXztlMwmT1p7FgOMQ4DaCGybEQAh+QQJCgAOACwCAAAACwAQAAAEOtAlxZy9liLGe2YEMgiAIFQUMRYCizKGsJrvMtz4yzT4/Todj4OCKRKLlyNyWFkync9lgHEIOAPWZQQAIfkECQoACwAsAgAAAAsAEAAABT7gkigMs5zoQiJb6Z4kMXACIAhmfBcCnzOGwaB3+z06wuSv5EkOfidXCWZKpUjWazWr2max3G44wDgExmduCAAh+QQJCgALACwCAAAACwAQAAAFQuCSKEy5nCiJIFBpLiQxCAJAMzBDCEMh+DiSYTDzCYKMh8RBJCJdkSYS5cLlUNgTKYvdcrXWr1cczgYYh8B3EVB/QwAh+QQJCgAAACwCAAAACwAQAAAGSEBAQsEoMgBIJBGBmCCMSgZhICggBIIjkSCgVrMAomFALmC1jIfkAyIP0EZGiIxOAqDho91O3PP1fnmBUYOCgQEMBwGDAYuBQQAh+QQJCgAAACwCAAAACwAQAAAFQiCQKExZAihAIsiEZKfKEINQCIjAyIRQF7cdyTAo1nQyDEWjuRSFJlPFAk2hYiSrNqtNcbsyMOrbJVsDjENAHFiDQwAh+QQFCgAAACwCAAAACwAQAAAGR0BAQsEoGgFIIgIxQYwQjCSDMBAUrFAAkSCoXgVRomFAJoO1DAxFw74Mwsa4CI6sA6Jou56ot/P7UoCBgn99AQwHAYIBioBBADs=",
	ua = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAkklEQVQYlWP8//8/AwhEZ3VCGGhg6bRyRrAISGFUZsf/7tlb/qMDkBhIDqSG0col7X9guB+DqYEGNgMZTl+4wbB+5SYGJqyyWABcIUgnCNibKIMxshgIsCDrnTVvDcPpCzpg9vlzVxgMjSBsDIUwBXitJujGo7tnMoJ8hQuA5EBqQMEDYjBYu6ZjDXCQImvXdAYAbBhOfnh6S6sAAAAASUVORK5CYII=",
	Ro = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAALCAYAAABGbhwYAAAArElEQVQYlWP8//8/w8sd0xnEPTIZDrdl/WdAArZV0xhhPLBCEAApUjPSRVbHcOvcZbhiJnRFTLIiYNNBACQGs4WFAQ38e/yG4eXj6ejCDIyHWjNRrISZBnI3shPAVsMAyFpsbLDV3149Z2BgQJj4+upqDGvhngEZDQIg98EAjA2SAxkGtxpZMbIilHDc723wn8XaCquVf44eY3DceoERHuAgxdgUghQxMDAwAABPklf+6RBD+AAAAABJRU5ErkJggg==",
	pa = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAJ5JREFUKFNjZMABwovK/4OkVvZ1MoJoMAEDMEkQf0VvB1g4orgCrBisEKagIDYUq/kTFq9mYAQpwqUApMvCwBhsKlghyJoTF86imAZSAAJNM6YzXLv9EKIw0NmaIdzLF6wYpmDlts1ghTcfPUFVCBNUl5OBmwxTBPY1yEQtVXkGkAKQBEwhiA0CIGvhwQNTjO5lmCJ48CAHEbpiWIADAED4UIVE7IyNAAAAAElFTkSuQmCC",
	Ea = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAAAeoAMABAAAAAEAAAAeAAAAANicGRsAAAFZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Chle4QcAAAEdSURBVEgNY2SgEiiVFfyPzajux+8ZsYkzYROkh9iAWcxCjO9wBSOy3tprZ5G5CLaWMTwKkIN9wHw8YBajpDhcQdpwKB4RdBSwGuwWwnUPmI8HzGIW5OAt2WQODwoeAQ04mxLGX5E8JO0jOqiRwoGBU2UanPvlThacTUywowYpXCvD/UJ1BIeBB84esMQ1YBajlNV/tjvBg4LTcx+czfBmEpyNK0iR9cIV42EMmI8HzGKUoEYOGeSgu7/rKVxK1m0DnI2L8RhJ/eUbKNUBXMuA+XjALEYJauQgknWThgcLMQxkvcjBe/EhN1btA+bjAbMYJckhV5Ex7l+wBhGyIHKQIovjCt7Rxh5yKMHZyMEOFySDgRy8yNoHLHENmMUAR11Dn9WGo7kAAAAASUVORK5CYII=",
	JA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAAAXNSR0IArs4c6QAAAKJJREFUKFNjZEADs00c/sOEUs8cYESWRuGAFAYI88PlN7z9yICsAa5YTdvlfynnHwZ0xd3fWRhuXd0DVgcmQAqvX9qF7iI4X1PPDayBkZBCmA6QBrDi6fNnwk1xMFYEs0GSINuQaQzFIIUgDf8f9DIwXlwG1vhfP4pBy28npskwxQwbjVH8oFkrjNsZWBWTFBowu0AehbGvN79lAFkLA7BwBgCV3k7wpUCa5wAAAABJRU5ErkJggg==",
	ce = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAKCAYAAAB4zEQNAAAAbUlEQVQYlWOUEFFl4BOX/8+ABj69fMjIApK44GUGl+FUUWJgSEtmUNdx/c+EruP7nXsMDLPmgtkokgbbTiEUMDAwsCALogOQJCMDAwOKvTAA1onNaBBgVNN2AdHoXgGZhnAQyFh0o3HrZGBgAAAwAB1whvvKHwAAAABJRU5ErkJggg==",
	Fo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAx0lEQVQ4jWNgoBVQ03b5r6bt8p+QOkZcmgOOiTMwMDAwbLB6yXDr6h6s6hgYGBiYcEm8vfaJCHfiMYBYgOE0NW2X/7ZzOOH8wynfMTQhewnOgAVYwDFxFOcLa/FhGIAcLiwwzbBAQ9b85MhrDBfA1MEAC4yBHmhPjrxmuL+Ah0Ex4QsDAwMDg4yNKFZ1LAwEwP0FPFAa4hLk8CHKAHQXoAO4AU+OvMaqkCgX3Lq6h5FhASzZvsbrgsMp37FHIwwQSv/4kvXAAABe3VMKz02+7gAAAABJRU5ErkJggg==",
	vo = "./assets/gold_rush.f8378b97.png",
	Do = "./assets/prospector.0b3fb2f9.png",
	Go = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAAAQoAMABAAAAAEAAAAQAAAAACaIX+wAAAFZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Chle4QcAAADvSURBVDgRtVGrDsJAENwS/gWNxPR/0Eg038A/4JDYKhIEhGAwoOEHIJijM7m5HNsHGDZpbm9mdtqdmv2hQo9ngxs4cbifVoAaQmBtnDew13Fr1WLqTQIwcL4aBpfrw9abg9cRA9dV+Sejz++a8XjSYDdPdg0lXDNcoW/vb3nQoGVvhoYs8HgTYMqDBi2hFeV8qc+12BcJqBvNCFQgukMbytGYM9V5j/ODI1Fj+o0g8cgozMpJ1JjFPnFRS0MZQMy9cWJgd3sCY6GXic8jN6DYD0cPGkYTQTyH+Q3B6M1x70QjD3K1Jq88GODaE/1P3BuUFYxSxwscvAAAAABJRU5ErkJggg==",
	Yo = "./assets/barn_manager.8f0b5bf7.png",
	Oo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMCAYAAAC0qUeeAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAAALoAMABAAAAAEAAAAMAAAAACFDqAgAAAFZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Chle4QcAAACgSURBVCgVY2SAAnERlf8w9ss3dxjR+SA5FhABksjebM/w69dvhmuHPzIcncCAwQcZwARSDAIghcgAnQ+SA5sMYoBMRAbofJAcI0wBshutC7SBTrkKk2IAOQHEweHmqwzofhgAN8u5KzA82vkAw83woAO5CeaRyq9fGEAaptuIwDWAGPCgQxbd+4mZwezTd4a9DMzIwoigQxZFDkaQOMxGAHtTakRQZu+kAAAAAElFTkSuQmCC",
	Uo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAAAQoAMABAAAAAEAAAAIAAAAAHYYg68AAAFZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Chle4QcAAAChSURBVCgVY2AgDP4DlYAwQQBThEzD2CDNIDYyH2wgE5gESkRl9oCY6DTDt7Ka/1AMYoPVQPWAKUaYppykYGRxONtg9Vw4G8bg6moBMUF6GVhANoM0h0QkgPgY4KwQhhBMAOQdRpZl00vAAmtWLIBJoND7Q/wYHMUwTAG7HKgQHiYgv4MDCZ1eJq/7HxcGGQD2B9RKsJOgpsJsgNFQJRgUIwBDLEnRFUitugAAAABJRU5ErkJggg==",
	Jo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAANCAYAAABGkiVgAAAAAXNSR0IArs4c6QAAAVtJREFUOE9jZEADEiKq/2FCL97cZkSXh/HxqUPRBFK4zIyL4WxgK1hvb2UhAzaDQeqK2/vBaozXVzNEnfqGog7DUKfQZIa0pBCG0xduYDUY2UBTAw2GWfPWMOxbPRe7oSDFIANhAJvB2AyEqUc2GOxSdAPRDYYFA8xQmAvRwxtmMCNI4Yrt28HePX/uCka8pDxcDg8zWJjPkY/EUGdopMMAsizC05MBxVCQSmSDn+xbyWAqzsHgzfMNbDAoErd+4WI4/fIHg4xTONxgkIEgADcU5n2Ya2EGg7wCAmrCPAwNyv8YJHVEGBznPQLzb739ApYDxQG6gaDUAo99WDCAFIO8AEtKIPEYbREGL+5vcIOR5UCOQdeDkaRACpA17U+SA7sQn8HIekBsvDkGZODzK28Ytn3lYlhy9Q1Og9FjDa+hoIiBGQhyPXJQoOciZINxGgqLQHSvwfI8vnIBAIo56K5W2wqRAAAAAElFTkSuQmCC",
	TA;
(function(A) {
	A[A.LEVEL_1 = 0] = "LEVEL_1", A[A.LEVEL_2 = 50] = "LEVEL_2", A[A.LEVEL_3 = 150] = "LEVEL_3", A[A.LEVEL_4 = 350] = "LEVEL_4", A[A.LEVEL_5 = 700] = "LEVEL_5", A[A.LEVEL_6 = 1100] = "LEVEL_6", A[A.LEVEL_7 = 1400] = "LEVEL_7", A[A.LEVEL_8 = 2e3] = "LEVEL_8", A[A.LEVEL_9 = 3e3] = "LEVEL_9", A[A.LEVEL_10 = 5e3] = "LEVEL_10"
})(TA || (TA = {}));
const ie = {
	"Green Thumb": {
		level: 5,
		conflicts: "Barn Manager",
		profession: "farming",
		perks: ["Crops are worth 5% more", "Increase mutant crop chance"]
	},
	"Barn Manager": {
		level: 5,
		conflicts: "Green Thumb",
		profession: "farming",
		perks: ["Animals yield 10% more goods", "Increase mutant animal chance"]
	},
	"Seed Specialist": {
		level: 10,
		conflicts: "Wrangler",
		requires: "Green Thumb",
		profession: "farming",
		perks: ["Crops grow 10% faster", "Increase mutant crop chance"]
	},
	Wrangler: {
		level: 10,
		conflicts: "Seed Specialist",
		requires: "Barn Manager",
		profession: "farming",
		perks: ["Animals produce goods 10% faster", "Increase mutant animal chance"]
	},
	Lumberjack: {
		level: 5,
		conflicts: "Prospector",
		profession: "gathering",
		perks: ["Increase wood drops by 10%"]
	},
	Prospector: {
		level: 5,
		conflicts: "Lumberjack",
		profession: "gathering",
		perks: ["Increase stone drops by 20%"]
	},
	Logger: {
		level: 10,
		requires: "Lumberjack",
		conflicts: "Gold Rush",
		profession: "gathering",
		perks: ["Axes can be used on 2 trees"]
	},
	"Gold Rush": {
		level: 10,
		requires: "Prospector",
		conflicts: "Logger",
		profession: "gathering",
		perks: ["Increase gold drops by 50%"]
	}
};

function mA(A) {
	return A.gte(5e3) ? 10 : A.gte(3e3) ? 9 : A.gte(2e3) ? 8 : A.gte(1400) ? 7 : A.gte(1100) ? 6 : A.gte(700) ? 5 : A.gte(350) ? 4 : A.gte(150) ? 3 : A.gte(50) ? 2 : 1
}

function wa(A) {
	const t = mA(A.skills.farming);
	if(t >= 5 && !A.inventory["Green Thumb"] && !A.inventory["Barn Manager"]) return ["Green Thumb", "Barn Manager"];
	if(t >= 10 && !A.inventory["Seed Specialist"] && !A.inventory.Wrangler) return A.inventory["Green Thumb"] ? ["Seed Specialist"] : ["Wrangler"];
	const a = mA(A.skills.gathering);
	return a >= 5 && !A.inventory.Lumberjack && !A.inventory.Prospector ? ["Lumberjack", "Prospector"] : a >= 10 && !A.inventory.Logger && !A.inventory["Gold Rush"] ? A.inventory.Prospector ? ["Gold Rush"] : ["Logger"] : []
}

function ha(A) {
	if(A === 10) return;
	const t = A + 1;
	return TA[`LEVEL_${t}`]
}
const ye = te(),
	Be = Me(),
	Z = {
		Sunflower: d(g({}, ye.Sunflower), {
			image: We
		}),
		Potato: d(g({}, ye.Potato), {
			image: Vt
		}),
		Pumpkin: d(g({}, ye.Pumpkin), {
			image: vA
		}),
		Carrot: d(g({}, ye.Carrot), {
			image: Ht
		}),
		Cabbage: d(g({}, ye.Cabbage), {
			image: Zt
		}),
		Beetroot: d(g({}, ye.Beetroot), {
			image: Wt
		}),
		Cauliflower: d(g({}, ye.Cauliflower), {
			image: jt
		}),
		Parsnip: d(g({}, ye.Parsnip), {
			image: zt
		}),
		Radish: d(g({}, ye.Radish), {
			image: qt
		}),
		Wheat: d(g({}, ye.Wheat), {
			image: Xt
		}),
		"Sunflower Seed": d(g({}, Be["Sunflower Seed"]), {
			image: Pt,
			secondaryImage: We
		}),
		"Potato Seed": d(g({}, Be["Potato Seed"]), {
			image: br,
			secondaryImage: Vt
		}),
		"Pumpkin Seed": d(g({}, Be["Pumpkin Seed"]), {
			image: kr,
			secondaryImage: vA
		}),
		"Carrot Seed": d(g({}, Be["Carrot Seed"]), {
			image: Nr,
			secondaryImage: Ht
		}),
		"Cabbage Seed": d(g({}, Be["Cabbage Seed"]), {
			image: Mr,
			secondaryImage: Zt
		}),
		"Beetroot Seed": d(g({}, Be["Beetroot Seed"]), {
			image: Jt,
			secondaryImage: Wt
		}),
		"Cauliflower Seed": d(g({}, Be["Cauliflower Seed"]), {
			image: Rr,
			secondaryImage: jt
		}),
		"Parsnip Seed": d(g({}, Be["Parsnip Seed"]), {
			image: Fr,
			secondaryImage: zt
		}),
		"Radish Seed": d(g({}, Be["Radish Seed"]), {
			image: vr,
			secondaryImage: qt
		}),
		"Wheat Seed": d(g({}, Be["Wheat Seed"]), {
			image: Dr,
			secondaryImage: Xt
		}),
		Wood: d(g({}, pe.Wood), {
			image: iA
		}),
		Stone: d(g({}, pe.Stone), {
			image: ua
		}),
		Iron: d(g({}, pe.Iron), {
			image: pa
		}),
		Gold: d(g({}, pe.Gold), {
			image: Ea
		}),
		Egg: d(g({}, pe.Egg), {
			image: Ro
		}),
		Chicken: d(g({}, pe.Chicken), {
			image: JA
		}),
		Cow: d(g({}, pe.Chicken), {
			image: ce
		}),
		Sheep: d(g({}, pe.Chicken), {
			image: ce
		}),
		Pig: d(g({}, pe.Chicken), {
			image: ce
		}),
		Axe: d(g({}, ue.Axe), {
			image: DA
		}),
		Pickaxe: d(g({}, ue.Pickaxe), {
			image: Gr
		}),
		"Stone Pickaxe": d(g({}, ue["Stone Pickaxe"]), {
			image: lA
		}),
		"Iron Pickaxe": d(g({}, ue["Iron Pickaxe"]), {
			image: Yr
		}),
		Hammer: d(g({}, ue.Hammer), {
			image: Tt
		}),
		Rod: d(g({}, ue.Rod), {
			image: Or
		}),
		"Sunflower Statue": d(g({}, ae["Sunflower Statue"]), {
			image: aa
		}),
		"Potato Statue": d(g({}, ae["Potato Statue"]), {
			image: Aa
		}),
		Nancy: d(g({}, be.Nancy), {
			image: ga
		}),
		Scarecrow: d(g({}, be.Scarecrow), {
			image: ta
		}),
		Kuebiko: d(g({}, be.Kuebiko), {
			image: da
		}),
		"Christmas Tree": d(g({}, ae["Christmas Tree"]), {
			image: $t
		}),
		Gnome: d(g({}, ae.Gnome), {
			image: Ur
		}),
		"Gold Egg": d(g({}, De["Gold Egg"]), {
			image: Jr
		}),
		"Farm Cat": d(g({}, De["Farm Cat"]), {
			image: _t
		}),
		"Farm Dog": d(g({}, De["Farm Dog"]), {
			image: ea
		}),
		"Chicken Coop": d(g({}, De["Chicken Coop"]), {
			image: GA
		}),
		"Golden Cauliflower": d(g({}, be["Golden Cauliflower"]), {
			image: ra
		}),
		"Sunflower Rock": d(g({}, ae["Sunflower Rock"]), {
			image: na
		}),
		"Sunflower Tombstone": d(g({}, ae["Sunflower Tombstone"]), {
			image: sa
		}),
		"Goblin Crown": d(g({}, ae["Goblin Crown"]), {
			image: oa
		}),
		Fountain: d(g({}, ae.Fountain), {
			image: ia
		}),
		"Woody the Beaver": d(g({}, ae["Woody the Beaver"]), {
			image: la
		}),
		"Apprentice Beaver": d(g({}, ae["Apprentice Beaver"]), {
			image: ca
		}),
		"Foreman Beaver": d(g({}, ae["Foreman Beaver"]), {
			image: ma
		}),
		"Mysterious Parsnip": d(g({}, be["Mysterious Parsnip"]), {
			image: Tr
		}),
		"Carrot Sword": d(g({}, be["Carrot Sword"]), {
			image: Kr
		}),
		"Pumpkin Soup": d(g({}, xe()["Pumpkin Soup"]), {
			image: cA
		}),
		Sauerkraut: d(g({}, xe().Sauerkraut), {
			image: Lr
		}),
		"Roasted Cauliflower": d(g({}, xe()["Roasted Cauliflower"]), {
			image: YA
		}),
		"Radish Pie": d(g({}, xe()["Radish Pie"]), {
			image: OA
		}),
		"Green Thumb": {
			description: ie["Green Thumb"].perks[0],
			image: Fo
		},
		"Barn Manager": {
			description: ie["Barn Manager"].perks[0],
			image: Yo
		},
		"Seed Specialist": {
			description: ie["Seed Specialist"].perks[0],
			image: Oo
		},
		Wrangler: {
			description: ie.Wrangler.perks[0],
			image: Go
		},
		Lumberjack: {
			description: ie.Lumberjack.perks[0],
			image: Jo
		},
		Prospector: {
			description: ie.Prospector.perks[0],
			image: Do
		},
		Logger: {
			description: ie.Logger.perks[0],
			image: Uo
		},
		"Gold Rush": {
			description: ie["Gold Rush"].perks[0],
			image: vo
		},
		"Australian Flag": d(g({}, R["Australian Flag"]), {
			image: Pr
		}),
		"Belgian Flag": d(g({}, R["Belgian Flag"]), {
			image: Vr
		}),
		"Brazilian Flag": d(g({}, R["Brazilian Flag"]), {
			image: Hr
		}),
		"Chinese Flag": d(g({}, R["Chinese Flag"]), {
			image: Zr
		}),
		"Finnish Flag": d(g({}, R["Finnish Flag"]), {
			image: Wr
		}),
		"French Flag": d(g({}, R["French Flag"]), {
			image: jr
		}),
		"German Flag": d(g({}, R["German Flag"]), {
			image: zr
		}),
		"Indonesian Flag": d(g({}, R["Indonesian Flag"]), {
			image: Xr
		}),
		"Indian Flag": d(g({}, R["Indian Flag"]), {
			image: qr
		}),
		"Iranian Flag": d(g({}, R["Iranian Flag"]), {
			image: $r
		}),
		"Italian Flag": d(g({}, R["Italian Flag"]), {
			image: _r
		}),
		"Japanese Flag": d(g({}, R["Japanese Flag"]), {
			image: eo
		}),
		"Moroccan Flag": d(g({}, R["Moroccan Flag"]), {
			image: Ao
		}),
		"Dutch Flag": d(g({}, R["Dutch Flag"]), {
			image: to
		}),
		"Philippine Flag": d(g({}, R["Philippine Flag"]), {
			image: ao
		}),
		"Polish Flag": d(g({}, R["Polish Flag"]), {
			image: no
		}),
		"Portuguese Flag": d(g({}, R["Portuguese Flag"]), {
			image: so
		}),
		"Russian Flag": d(g({}, R["Russian Flag"]), {
			image: ro
		}),
		"Saudi Arabian Flag": d(g({}, R["Saudi Arabian Flag"]), {
			image: oo
		}),
		"South Korean Flag": d(g({}, R["South Korean Flag"]), {
			image: io
		}),
		"Spanish Flag": d(g({}, R["Spanish Flag"]), {
			image: lo
		}),
		"Sunflower Flag": d(g({}, R["Sunflower Flag"]), {
			image: UA
		}),
		"Thai Flag": d(g({}, R["Thai Flag"]), {
			image: co
		}),
		"Turkish Flag": d(g({}, R["Turkish Flag"]), {
			image: mo
		}),
		"Ukrainian Flag": d(g({}, R["Ukrainian Flag"]), {
			image: go
		}),
		"American Flag": d(g({}, R["American Flag"]), {
			image: uo
		}),
		"Vietnamese Flag": d(g({}, R["Vietnamese Flag"]), {
			image: po
		}),
		"Canadian Flag": d(g({}, R["Canadian Flag"]), {
			image: Co
		}),
		"Singaporean Flag": d(g({}, R["Singaporean Flag"]), {
			image: Mo
		}),
		"British Flag": d(g({}, R["British Flag"]), {
			image: ho
		}),
		"Sierra Leone Flag": d(g({}, R["Sierra Leone Flag"]), {
			image: No
		}),
		"Romanian Flag": d(g({}, R["Romanian Flag"]), {
			image: ko
		}),
		"Rainbow Flag": d(g({}, R["Rainbow Flag"]), {
			image: bo
		}),
		"Goblin Flag": d(g({}, R["Goblin Flag"]), {
			image: Bo
		}),
		"Pirate Flag": d(g({}, R["Pirate Flag"]), {
			image: xo
		}),
		"Algerian Flag": d(g({}, R["Algerian Flag"]), {
			image: Eo
		}),
		"Mexican Flag": d(g({}, R["Mexican Flag"]), {
			image: So
		}),
		"Dominican Republic Flag": d(g({}, R["Dominican Republic Flag"]), {
			image: yo
		}),
		"Argentinian Flag": d(g({}, R["Argentinian Flag"]), {
			image: wo
		}),
		"Lithuanian Flag": d(g({}, R["Lithuanian Flag"]), {
			image: Qo
		}),
		"Malaysian Flag": d(g({}, R["Malaysian Flag"]), {
			image: fo
		}),
		"Colombian Flag": d(g({}, R["Colombian Flag"]), {
			image: Io
		})
	};
var je = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAALCAYAAABCm8wlAAAAo0lEQVQYlWOUEFH9z4AHsICk9ifJMTy/8gZFlaSOCIPjvEcQBXNOfGNgYOBCNQYsxsAAsgJE/1+xfTuKfISnJ0O0lggjA0hBsZ0liP4PAyD2gdN3wOIsz1/fYpAUVWN4/voWo6SoGszBjCBi6bU3DIz//0PEQJLPLtuA2VK6R8CKQJrBCsCSs/hR3CCV9hGsCBwOIG9iA3BvoocBMsAfkgwMDACLZkKUzRSogAAAAABJRU5ErkJggg==",
	KA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAOCAYAAAAWo42rAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACHSURBVChTY6AYiIuo/AdhKJeBCUqjAJCCq7F/oTwIwFAIUnRnEh+UhwAoCnEpAgG4QpCiu6csweyfp98zaC9mZnj55g4jWAAIwAphiv6fuAoWhAGQOAiD2GAdMA4IIFuNbDLYRBAD2RoQQLceLgkyFWYaTjciA2yKQABFIS5FKADZhxQABgYAAc1KLFMF+tUAAAAASUVORK5CYII=";

function Ca(A) {
	const t = Math.ceil(A % 60),
		a = Math.floor(A / 60 % 60),
		n = Math.floor(A / 60 / 60 % 24),
		s = Math.floor(A / 60 / 60 / 24);
	return [s && `${s}days`, n && `${n}hrs`, a && `${a}mins`, t && `${t}secs`].filter(Boolean)
}

function To(A) {
	const t = Math.ceil(A);
	return t < 60 ? `${t}secs` : t === 60 ? "1min" : A < 60 * 60 ? `${Math.ceil(A/60)}mins` : A === 60 * 60 ? "1hr" : A < 60 * 60 * 24 ? `${Math.ceil(A/60/60)}hrs` : A === 60 * 60 * 24 ? "1day" : `${Math.ceil(A/60/60/24)}days`
}

function LA(A) {
	return Ca(A).slice(0, 2).join(" ")
}

function Ia(A) {
	return Ca(A).join(" ")
}

function ze(A, t) {
	const a = Date.now() - A;
	return a > t * 1e3 ? 0 : t - a / 1e3
}
const ya = A => {
		const [t, a] = i.exports.useState(!1), n = i.exports.useRef(null);
		return i.exports.useEffect(() => {
			var r;
			const s = (r = n.current) == null ? void 0 : r.scrollHeight;
			s && s > A && a(!0)
		}, [n.current]), {
			ref: n,
			showScrollbar: t
		}
	},
	Ko = "148px",
	Ba = 384,
	Lo = A => A in Me(),
	Qa = ({
		tabItems: A,
		selectedItem: t,
		setDefaultSelectedItem: a,
		inventory: n,
		inventoryItems: s,
		onClick: r
	}) => {
		const {
			ref: c,
			showScrollbar: m
		} = ya(Ba), [u] = SA(), h = Object.keys(A), [w, E] = i.exports.useState(!1);
		i.exports.useEffect(() => {
			const x = h.find(b => {
					var N;
					return !!((N = B[b]) == null ? void 0 : N.length)
				}),
				S = aA()[0] || x && B[x][0];
			S && a(S)
		}, []), i.exports.useEffect(() => E(It({
			item: t,
			inventory: n
		})), [n]);
		const B = s.reduce((x, S) => {
				const b = h.find(N => S in A[N].items);
				if(b) {
					const N = x[b] || [];
					x[b] = [...N, S]
				}
				return x
			}, {}),
			Q = x => Object.keys(B).includes(x),
			p = (x = "") => {
				const S = x.split(" ")[0];
				return LA(bA(S, n))
			},
			C = x => {
				r(x), x && Z[x].section && u(Z[x].section)
			},
			f = Object.values(B).every(x => x.length === 0);
		return e.createElement("div", {
			className: "flex flex-col"
		}, !f && e.createElement(Ae, {
			className: "flex-1 mb-3"
		}, t && e.createElement("div", {
			style: {
				minHeight: Ko
			},
			className: "flex flex-col justify-evenly items-center p-2"
		}, e.createElement("span", {
			className: "text-center text-shadow"
		}, t), e.createElement("img", {
			src: Z[t].image,
			className: "h-12",
			alt: t
		}), e.createElement("span", {
			className: "text-xs text-shadow text-center mt-2 w-80"
		}, Z[t].description), Lo(t) && e.createElement("div", {
			className: "w-full pt-1"
		}, e.createElement("div", {
			className: "flex justify-center items-end"
		}, e.createElement("img", {
			src: je,
			className: "h-5 me-2"
		}), w && e.createElement("img", {
			src: KA,
			className: "h-6 me-2"
		}), e.createElement("span", {
			className: "text-xs text-shadow text-center mt-2 "
		}, p(t)))))), e.createElement("div", {
			ref: c,
			style: {
				maxHeight: Ba
			},
			className: Y("overflow-y-auto", {
				scrollable: m
			})
		}, h.map(x => e.createElement("div", {
			className: "flex flex-col",
			key: x
		}, e.createElement("p", {
			className: "mb-2 underline"
		}, x), Q(x) ? e.createElement("div", {
			className: "flex mb-2 flex-wrap"
		}, B[x].map(S => e.createElement(Ee, {
			count: n[S],
			isSelected: t === S,
			key: S,
			onClick: () => C(S),
			image: Z[S].image
		}))) : e.createElement("p", {
			className: "text-white text-xs text-shadow mb-2"
		}, `No ${x} in inventory`)))))
	},
	Po = {
		Seeds: {
			img: Jt,
			items: Me()
		},
		Tools: {
			img: Tt,
			items: ue
		},
		Resources: {
			img: iA,
			items: pe
		},
		Crops: {
			img: We,
			items: te()
		}
	},
	Vo = {
		NFTs: {
			img: Kt,
			items: g(g(g(g({}, ae), De), be), R)
		},
		Foods: {
			img: Lt,
			items: xe()
		}
	},
	Ho = A => Object.keys(A).filter(a => {
		var n;
		return !!A[a] && !((n = A[a]) == null ? void 0 : n.equals(0))
	}),
	Zo = ({
		onClose: A
	}) => {
		const {
			gameService: t,
			shortcutItem: a
		} = i.exports.useContext(G), [n] = M(t), s = n.context.state.inventory, [r, c] = i.exports.useState("basket"), [m] = i.exports.useState(Ho(s)), [u, h] = i.exports.useState(), w = B => {
			c(B)
		}, E = B => {
			a(B), h(B)
		};
		return e.createElement(P, {
			className: "pt-5 relative"
		}, e.createElement("div", {
			className: "flex justify-between absolute top-1.5 left-0.5 right-0 items-center"
		}, e.createElement("div", {
			className: "flex"
		}, e.createElement(oe, {
			className: "flex items-center",
			isActive: r === "basket",
			onClick: () => w("basket")
		}, e.createElement("img", {
			src: Ut,
			className: "h-4 sm:h-5 mr-2"
		}), e.createElement("span", {
			className: "text-xs sm:text-sm overflow-hidden text-ellipsis"
		}, "Basket")), e.createElement(oe, {
			className: "flex items-center",
			isActive: r === "collectibles",
			onClick: () => w("collectibles")
		}, e.createElement("img", {
			src: We,
			className: "h-4 sm:h-5 mr-2"
		}), e.createElement("span", {
			className: "text-xs sm:text-sm overflow-hidden text-ellipsis"
		}, "Collectibles"))), e.createElement("img", {
			src: Ie,
			className: "h-6 cursor-pointer mr-2 mb-1",
			onClick: () => A()
		})), r === "basket" && e.createElement(Qa, {
			tabItems: Po,
			selectedItem: u,
			setDefaultSelectedItem: h,
			inventory: s,
			inventoryItems: m,
			onClick: E
		}), r === "collectibles" && e.createElement(Qa, {
			tabItems: Vo,
			selectedItem: u,
			setDefaultSelectedItem: h,
			inventory: s,
			inventoryItems: m,
			onClick: E
		}))
	},
	Wo = () => {
		const [A, t] = i.exports.useState(!1), {
			shortcutItem: a,
			gameService: n
		} = i.exports.useContext(G), [s] = M(n), r = s.context.state.inventory, c = aA(), m = () => {
			t(!0)
		};
		return e.createElement("div", {
			className: "flex flex-col items-end mr-2 sm:block fixed top-16 right-0 z-50"
		}, e.createElement("div", {
			className: "w-16 h-16 sm:mx-8 mt-2 relative flex justify-center items-center shadow rounded-full cursor-pointer",
			onClick: () => m()
		}, e.createElement("img", {
			src: Qr,
			className: "absolute w-full h-full -z-10",
			alt: "inventoryButton"
		}), e.createElement("img", {
			src: Br,
			className: "w-8 mb-1",
			alt: "inventory"
		}), e.createElement(Ce, {
			className: "hidden sm:block absolute -bottom-7"
		}, "Items")), e.createElement(U, {
			centered: !0,
			scrollable: !0,
			show: A,
			onHide: () => t(!1)
		}, e.createElement(Zo, {
			onClose: () => t(!1)
		})), !s.matches("readonly") && e.createElement("div", {
			className: "flex flex-col items-center sm:mt-8"
		}, c.map((u, h) => {
			var w, E;
			return e.createElement(Ee, {
				key: h,
				isSelected: h === 0,
				image: (w = Z[u]) == null ? void 0 : w.image,
				secondaryImage: (E = Z[u]) == null ? void 0 : E.secondaryImage,
				count: r[u],
				onClick: () => a(u)
			})
		})))
	},
	k = ({
		children: A,
		onClick: t,
		disabled: a,
		className: n,
		type: s
	}) => e.createElement("button", {
		className: Y("bg-brown-200 w-full p-1 shadow-sm text-white text-shadow object-contain justify-center items-center hover:bg-brown-300 cursor-pointer flex disabled:opacity-50 ", n),
		type: s,
		disabled: a,
		onClick: t,
		style: {
			borderStyle: "solid",
			borderWidth: "5px",
			borderImage: `url(${pt}) 30 stretch`,
			borderImageSlice: "25%",
			imageRendering: "pixelated",
			borderImageRepeat: "repeat",
			borderRadius: "15px"
		}
	}, A);
var fa = "./assets/nft.fc43adde.png";
const Sa = () => e.createElement("svg", {
		className: "fill-white hover:fill-brown-300",
		"aria-hidden": "true",
		height: "16",
		viewBox: "0 0 16 16",
		version: "1.1",
		width: "16",
		"data-view-component": "true"
	}, e.createElement("path", {
		fillRule: "evenodd",
		d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"
	}), e.createElement("path", {
		fillRule: "evenodd",
		d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"
	})),
	jo = ({
		text: A = "",
		copyFieldMessage: t
	}) => {
		const [a, n] = i.exports.useState(t), [s, r] = i.exports.useState(!1), c = () => {
			navigator.clipboard.writeText(A), n("Copied!"), setTimeout(() => {
				n(t)
			}, 2e3)
		}, m = () => {
			r(!0)
		}, u = () => {
			r(!1)
		};
		return e.createElement("div", {
			className: "mb-4"
		}, e.createElement("div", {
			className: "mt-2 bg-brown-200 p-1"
		}, e.createElement("div", {
			className: "flex justify-content-between p-2 gap-x-2 align-items-center"
		}, e.createElement("span", {
			className: "text-[0.55rem] sm:text-xs m-auto break-all select-text"
		}, A), e.createElement("span", {
			className: "cursor-pointer scale-[1.5]",
			onMouseEnter: m,
			onMouseLeave: u,
			onClick: c
		}, e.createElement(Sa, null)))), e.createElement("div", {
			className: `absolute mr-5 transition duration-400 pointer-events-none ${s?"opacity-100":"opacity-0"}`
		}, e.createElement(Ce, null, a)))
	},
	zo = ({
		farmURL: A,
		isOpen: t,
		onClose: a
	}) => {
		const n = () => {
			window.open(encodeURI(`https://twitter.com/intent/tweet?text=Visit My Sunflower Land Farm \u{1F447}
${A}&ref_src=https://sunflower-land.com`), "_blank")
		};
		return e.createElement(U, {
			show: t,
			onHide: a,
			centered: !0
		}, e.createElement(P, null, e.createElement(U.Header, {
			className: "justify-content-space-between"
		}, e.createElement("h1", {
			className: "ml-2"
		}, "Share Your Farm Link"), e.createElement("img", {
			src: Ie,
			className: "h-6 cursor-pointer mr-2 mb-1 justify-content-end",
			onClick: a
		})), e.createElement(U.Body, null, e.createElement("div", {
			className: "row justify-content-center align-items-center"
		}, e.createElement("div", {
			className: "flex d-none d-sm-block col-sm col justify-content-center align-items-center"
		}, e.createElement("p", {
			className: "text-sm whitespace-normal"
		}, "Show off to fellow farmers by sharing your farm link (URL), to directly visit your farm !")), e.createElement("div", {
			className: "flex col-sm-12 col justify-content-center md-px-4 lg-px-4 align-items-center"
		}, e.createElement("img", {
			src: fa,
			className: "w-64 md-mt-2",
			alt: "Sunflower-Land Farm NFT Image"
		}))), e.createElement(jo, {
			text: A,
			copyFieldMessage: "Copy farm URL"
		})), e.createElement(U.Footer, {
			className: "justify-content-center"
		}, e.createElement(k, {
			className: "text-s w-1/4 px-1",
			onClick: n
		}, "Tweet"), e.createElement(k, {
			className: "text-s w-1/4 px-1",
			onClick: () => window.open(A, "_blank")
		}, "Visit"))))
	};
var xa = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAC+aNwHAAAAAXNSR0IArs4c6QAAAbFJREFUOE9jZKAQMFKonwGvAfu89P/DLHDadhGrWqyCMI2O6+XhDtwf+BDMRjcIwwCQZscpHxh+zGBm4GjWgRvwo/YKA0fGX4b9OQIohqAYANMM0/XnDCMDi6MYw5/9rxhYTOC+QTEEwwBLnc9gm0CaK6ZIwl3QkfMcbAjIZcev8MJdATcAbDvUz382XkLRDDMFbIi/HpgLChNQeGA1gOHTC4aSYGaMGO5Z+5eBgU+CsAFkuQBkLMgbZIcBzABQFJIdC8iGkJUOYDbjS4lLa+UYbh/6zXCofAc4AjBSol2nBzzFNBx8DvcOTCNI4MXlXwy3luzDNACkWdWOFa7p8NSvDBK6bGANIBoGsBpwqDXzf8r1m3CFIIOQDUBOFHM01RnsqqcjXADS/O3Vc4a8t59QbEK2cZ+XAZh77/53BpBaLjFJsCGMMM0gARAAuQIZwLwwSZiPQcdcCcMQFAOUFDnBCq6cvAe2Aeallj+KYFuJNgDZEJhrYIajewMcEMjeQFaIkZuwhQFMETGGoAcgRkJCD1B0FyCHPkwOIyXCDMHmfFjUIcthLZVBhmAzAJZ4kOUAHyUvN1gzGlkAAAAASUVORK5CYII=",
	ba = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAC+aNwHAAAAAXNSR0IArs4c6QAAAQ9JREFUOE9jZKAQMFKon2HUAIbRMGAYcmFg1+nxH5T0D5XvgKdgjKQMU4SuECSuascKzjq3D/2GG4JiALIimMKqZxwMbVI/GECaQRpB4MXlXwy3luwD60UxQC3G6b+ELhtYEUwDSDFMDJZzsRpwqDXzf8r1m1gVgwwAaYKBOZrqDHbV0xEuAGn+9uo5A5eYJAPIEGQA07zPywAsfO/+dwaYWpAhjMiaQQqUFDnh+p22XQC7CGQ7sgEgBTBDUAxA1gyyCeYlkAEgZ8PkkV2B0wCYc2HOQTcc7gJwfCOFAbJCbOUlRhjAFBFjCLpmjHSAHqDoLkAOfZgcRlKGGYLN+aBohsU/TgNgYYLNAHTNIDUAH22wKPsAbKUAAAAASUVORK5CYII=",
	qe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAOCAYAAAD5YeaVAAAA0UlEQVQokWNU03b5z4AAjAxowMTOhcHQSIehJMWbgQkkdfPKboZZC2aAmP+hGAWcP3eFITqrE6IYBOxNlAlqAjsDpAgdHDxzlyEtIQOuDuQcBpBifODA6Tv/QWrUtF0QzsAFQM6DOY0Fn8KeOVsZZk+YAOfjVQwKLlBIgMCZQ3tQnQEyCR0snVYOFwIrBvkcpBAWnuggLSkEEXTgYEEDMBNhhoCcgeFmkCBIMzYbQCaDgwUmYGLnwnjm0B4U26AGMDL+/w9Rh24SSAOyAQwMDAwA19d6NggJUOoAAAAASUVORK5CYII=",
	ka = "data:image/png;base64,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",
	gA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMCAYAAAC0qUeeAAAAn0lEQVQokWP8//8/g6SoGgMS+A8inr++xciABpjQ+P9XbN8OUggy4D+6YhZ0hfYmynABZA1gmyREVEH4/4HTd/7jAiA5kBqCCmEApA7dzXgBWPGseWsYDp65i1MdTA7uQZAGBoYQuAejszoxNLGAfAnytVNoMlwDLsAICg1Y0IE0wMC+1XPR9TAie5ARmwIkjGIy3AZYJCAng+evbzEAAPSsfL0j0pGKAAAAAElFTkSuQmCC";

function PA() {
	const {
		authService: A
	} = i.exports.useContext(X), [{
		history: t
	}] = M(A);
	return(t == null ? void 0 : t.event.type) === "CREATE_FARM"
}
const dA = ({
		onClose: A,
		onBack: t,
		title: a
	}) => {
		const n = !PA();
		return e.createElement(U.Header, {
			className: "justify-start"
		}, e.createElement("div", {
			className: "flex w-full"
		}, t && e.createElement("img", {
			className: "h-6 mr-3 cursor-pointer",
			src: gA,
			alt: "back",
			onClick: t
		}), e.createElement("span", {
			className: "text-base ml-2 grow"
		}, a), n && e.createElement("img", {
			src: Ie,
			className: "h-6 cursor-pointer",
			onClick: A
		})))
	},
	qo = ({
		onClose: A
	}) => e.createElement(e.Fragment, null, e.createElement(dA, {
		title: "How to Farm?",
		onClose: A
	}), e.createElement(U.Body, null, e.createElement("div", {
		className: "flex items-center"
	}, e.createElement("p", {
		className: "text-xs sm:text-sm p-2"
	}, "1.Harvest crops when they are ready"), e.createElement("div", {
		className: "relative"
	}, e.createElement("img", {
		src: xa,
		className: "w-12"
	}), e.createElement("img", {
		src: qe,
		className: "w-4 absolute right-0 bottom-0"
	}))), e.createElement("div", {
		className: "flex  items-center mt-2 "
	}, e.createElement("p", {
		className: "text-xs sm:text-sm p-2"
	}, "2.Visit the town & click on the shop"), e.createElement("div", {
		className: "relative"
	}, e.createElement("img", {
		src: ka,
		className: "w-14"
	}), e.createElement("img", {
		src: qe,
		className: "w-4 absolute right-0 -bottom-2"
	}))), e.createElement("div", {
		className: "flex items-center"
	}, e.createElement("p", {
		className: "text-xs sm:text-sm p-2"
	}, "3.Sell crops at the shop for SFL"), e.createElement("div", {
		className: "relative"
	}, e.createElement("img", {
		src: le,
		className: "w-12"
	}))), e.createElement("div", {
		className: "flex justify-between items-center mt-2"
	}, e.createElement("p", {
		className: "text-xs sm:text-sm p-2"
	}, "4.Buy seeds using your SFL"), e.createElement("div", {
		className: "relative"
	}, e.createElement("img", {
		src: Pt,
		className: "w-8"
	}))), e.createElement("div", {
		className: "flex justify-between items-center"
	}, e.createElement("p", {
		className: "text-xs sm:text-sm p-2"
	}, "5. Plant seeds and wait"), e.createElement("div", {
		className: "relative"
	}, e.createElement("img", {
		src: ba,
		className: "w-12"
	}), e.createElement("img", {
		src: qe,
		className: "w-4 absolute right-0 bottom-0"
	})))));
var uA = "data:image/gif;base64,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",
	Na = "data:image/png;base64,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",
	Ma = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAC+aNwHAAAAAXNSR0IArs4c6QAAAY5JREFUOE9jZKAQMFKon2HUAIZhGwa+y/P/g9LH5siJ4GhG5yOnHYx0AFIspnAPrOb2od9gWtWOFUy/eqAENxRmCFYDPj66CdcEUwgyjF9OnbABIA1qMU7/JXTZ4IaANL+4/Ivh1pJ9GBZiTcr/1pn811jHxwAyBARAmm8EfWJgCjpD2ACQZgZLXYYDyecYMoSEwQbMePeWwWGuEQPD8csYhqCY+L1M6T97oT1YIQgcmAMJRIcUSCCCDP7Zf5CBs+seXB+ccag18/+fo8cYLHU+M7BbCME1gBlQA3+eeMdw/AovA4u1FYNd9XSwXjAB0vzt1XMGttv3wQaAANgQS12IQccvM4A0g5lXeBl+qSoycIlJgg1hhGkGCYAAzBVwQxgYUDSDbAcBkIUgPSgGKClyMtxashfVFWgGqMU4M9y7/x23ASBJ9LBA9jvIEhQDkMMA5CSYAlgKRKbRNYPDAKYAOSxACrEBZJtRYgGbIdgMgAUcTDM8GpEVw1yCzQBY1CHLYc0LIEOwGYBsM0weAFrg2Sg3pFNUAAAAAElFTkSuQmCC";
const Xo = ({
		onClose: A,
		onBack: t
	}) => e.createElement(e.Fragment, null, e.createElement(dA, {
		title: "How to upgrade?",
		onClose: A,
		onBack: t
	}), e.createElement(U.Body, null, e.createElement("div", {
		className: "flex items-center"
	}, e.createElement("p", {
		className: "text-xs sm:text-sm p-2"
	}, "1. Talk to a Goblin blocking the fields"), e.createElement("div", {
		className: "relative w-12 h-12"
	}, e.createElement("img", {
		src: uA,
		style: {
			width: "180px",
			maxWidth: "180px",
			position: "absolute",
			top: "-35px",
			right: "-69px"
		}
	}), e.createElement("img", {
		src: qe,
		className: "w-4 absolute right-0 bottom-0"
	}))), e.createElement("div", {
		className: "flex  items-center mt-2 "
	}, e.createElement("p", {
		className: "text-xs sm:text-sm p-2"
	}, "2.Visit the town & click on the kitchen"), e.createElement("div", {
		className: "relative"
	}, e.createElement("img", {
		src: Na,
		className: "w-14"
	}), e.createElement("img", {
		src: qe,
		className: "w-4 absolute right-0 -bottom-2"
	}))), e.createElement("div", {
		className: "flex  items-center mt-2 "
	}, e.createElement("p", {
		className: "text-xs sm:text-sm p-2"
	}, "3. Craft the food that the goblin wants"), e.createElement("div", {
		className: "relative"
	}, e.createElement("img", {
		src: cA,
		className: "w-14 relative left-1"
	}))), e.createElement("div", {
		className: "flex  items-center mt-2 "
	}, e.createElement("p", {
		className: "text-xs sm:text-sm p-2"
	}, "4. Voila! Enjoy your new fields and crops"), e.createElement("div", {
		className: "relative"
	}, e.createElement("img", {
		src: Ma,
		className: "w-14 relative"
	}))))),
	$o = ({
		onClose: A,
		onBack: t
	}) => e.createElement(e.Fragment, null, e.createElement(dA, {
		title: "How to sync?",
		onClose: A,
		onBack: t
	}), e.createElement(U.Body, null, e.createElement("p", {
		className: "text-xs p-2 sm:text-sm text-center"
	}, "All of your progress is saved on our game server. You will need to sync on chain when you want to move your tokens, NFTs and resources onto Polygon."), e.createElement("div", {
		className: "flex items-center"
	}, e.createElement("p", {
		className: "text-xs sm:text-sm p-2"
	}, "1. Open the menu")), e.createElement("div", {
		className: "flex  items-center mt-2 "
	}, e.createElement("p", {
		className: "text-xs sm:text-sm p-2"
	}, '2. Click "Sync on chain"'), e.createElement("div", {
		className: "relative"
	}, e.createElement("img", {
		src: je,
		className: "w-4"
	}))))),
	_o = ({
		onClose: A,
		onBack: t
	}) => e.createElement(e.Fragment, null, e.createElement(dA, {
		title: "Time to play!",
		onClose: A,
		onBack: t
	}), e.createElement(U.Body, null, e.createElement("p", {
		className: "text-xs p-2 sm:text-sm text-center"
	}, "Thanks for playing beta! We are still working on the game and appreciate your support during the early stages!"), e.createElement("p", {
		className: "text-xs p-2 sm:text-sm text-center"
	}, "You can read more about the game in the", " ", e.createElement("a", {
		className: "text-xs sm:text-sm underline",
		href: "https://docs.sunflower-land.com",
		target: "_blank",
		rel: "noreferrer"
	}, "official docs."))));
var Ra;
(function(A) {
	A[A.HowToFarm = 1] = "HowToFarm", A[A.HowToUpgrade = 2] = "HowToUpgrade", A[A.HowToSync = 3] = "HowToSync", A[A.LetsGo = 4] = "LetsGo"
})(Ra || (Ra = {}));
const ei = ({
	isOpen: A,
	onClose: t
}) => {
	const [a, n] = e.useState(1);
	i.exports.useEffect(() => {
		A && n(1)
	}, [A]);
	const s = () => {
			n(a - 1)
		},
		r = () => {
			n(a + 1)
		},
		c = () => {
			t()
		},
		m = !PA();
	return e.createElement(U, {
		show: A,
		onHide: m ? t : void 0,
		centered: !0
	}, e.createElement(P, null, a === 1 && e.createElement(qo, {
		onClose: t
	}), a === 2 && e.createElement(Xo, {
		onClose: t,
		onBack: s
	}), a === 3 && e.createElement($o, {
		onClose: t,
		onBack: s
	}), a === 4 && e.createElement(_o, {
		onClose: t,
		onBack: s
	}), e.createElement(U.Footer, {
		className: "justify-content-center"
	}, a === 4 ? e.createElement(k, {
		className: "text-s px-1",
		onClick: c
	}, "Let's go!") : e.createElement(k, {
		className: "text-s px-1",
		onClick: r
	}, "Next"))))
};
var Ai = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABICAMAAABWSoJpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEVQTFRFAAAABAMDBAMDBAMDBAMDBAMDBAMDBAMD////397e3t3dBAMDBAMDBAMDBAMDBAMD29ra3NvbBAMDgoGBDAsLFBMTExISuR6NOAAAABd0Uk5TAE/P/96wNO7////d2qww6///2/////9flcveAAAAqklEQVR4nO2UQQ6DMBADIQZKS4ECpf9/KgmHJMdKa6QFdm65jLwIuyjOQekgpaqbzCfWBR7JKM+3U0ehf7RSnv5q3cIX0Jnw6sJj/0N69ejjQJ8vw7gmhKa8+yHziXWBMRlJa9NHIQh7+PFX30w4AbPuhHYyWUivHn0c6PNlGMZfEKoHV2Y+uS6QjD7fIuYLF4UgDGy7AsqFP/UJ9QvP9Q3pTaF3mb42hogN/CxXVRJSi58AAAAASUVORK5CYII=",
	ti = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAPCAYAAADQ4S5JAAABAUlEQVQokWP8//8/g3qs838GJHBz8V5GEA+bOKNajNN/CV02BlU7VrjE4alfwbRtNjdc7Pah3wwvLv9iYGJAEoABkAEgjE0OrgFZAmQbzEZkxSAA98PnB38YVH25GLCB25u/MfAqsED8ANIAA1K29mAOTCNIIQg8O3yQEcNJi9VN/p/+z8YAwjAA44PkUJwEEnASFcTqHCErM4Z3x04x7Hv9niH25hlGJqyqkABIMUgTDLCA6DmM/xgYXr8HC6HbBDKZYeNOsJpYmAYMBXgA2EkHb5xjBNuCA4DkQGrgnoYBew0jMCflP8RrMENgijE0oGtEVojiaXRgKs6B3XEMDAwAzBV5mKwAMgEAAAAASUVORK5CYII=",
	ai = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAsCAYAAAAjFjtnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFDGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDMgNzkuMTY0NTI3LCAyMDIwLzEwLzE1LTE3OjQ4OjMyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHRpZmY6T3JpZW50YXRpb249IjEiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAzLTE2VDE4OjI1OjMyKzAxOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wMy0xNlQxODoyNzoyMyswMTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wMy0xNlQxODoyNzoyMyswMTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NWUyODg2YTQtOWVkMi1hOTQ5LWExNTktMmNlZTJiNmEwODZmIiB4bXBN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",
	ni = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAJCAYAAAD+WDajAAAAYklEQVQYlWNU03ZhQAL/GRgYGGF8JmSJm1d2wxSgSP5n27uRQfflNwZkBcg6MQBI8v+tvOkoEjDdGDpBRmM46MrGZxgKYF5BMVptUiZYjlFCRBUswCcuD/fCp5cPGRkYGBgAVzgjn6D8dXEAAAAASUVORK5CYII=",
	Qe;
(function(A) {
	A.ROOT = "root", A.MAP = "map", A.VIEW = "view"
})(Qe || (Qe = {}));
const si = () => {
	const {
		authService: A
	} = i.exports.useContext(X), {
		gameService: t
	} = i.exports.useContext(G), [a] = M(A), [n] = M(t), [s, r] = i.exports.useState(!1), [c] = SA(), [m, u] = i.exports.useState(!1), [h, w] = i.exports.useState(PA()), [E, B] = i.exports.useState(!1), [Q, p] = i.exports.useState(""), [C, f] = i.exports.useState(Qe.ROOT), x = i.exports.useRef(null), S = () => {
		r(!s)
	}, b = $ => {
		c($), r(!1)
	}, N = () => {
		w(!0), r(!1)
	}, V = () => {
		u(!0), r(!1)
	}, O = $ => {
		var L;
		((L = x == null ? void 0 : x.current) == null ? void 0 : L.contains($.target)) || r(!1)
	}, T = async() => {
		B(!0)
	}, H = async $ => {
		await new Promise(L => setTimeout(L, 1e3)), t.send("SYNC", {
			captcha: $
		}), r(!1), B(!1)
	}, ne = async() => {
		t.send("SAVE")
	}, se = () => {
		A.send("RETURN")
	}, re = () => {
		A.send("EXPLORE")
	};
	return i.exports.useEffect(() => (document.addEventListener("mousedown", O), document.addEventListener("touchstart", O), () => {
		document.removeEventListener("mousedown", O), document.removeEventListener("touchstart", O)
	}), []), i.exports.useEffect(() => {
		const $ = a.context.farmId ? `${window.location.href.includes("?")?window.location.href.split("?")[0]:window.location.href}?farmId=${a.context.farmId.toString()}` : "https://sunflower-land.com/play/";
		p($)
	}, [a.context.farmId]), e.createElement("div", {
		ref: x,
		className: "w-5/12 sm:w-60 fixed top-2 left-2 z-50 shadow-lg"
	}, e.createElement(Ae, null, e.createElement("div", {
		className: "flex justify-center p-1"
	}, e.createElement(k, {
		className: "mr-2 bg-brown-200 active:bg-brown-200",
		onClick: S
	}, e.createElement("img", {
		className: "md:hidden w-6",
		src: Ai,
		alt: "hamburger-menu"
	}), e.createElement("span", {
		className: "hidden md:flex"
	}, "Menu")), !n.matches("readonly") && e.createElement(k, {
		onClick: ne,
		disabled: !!n.matches("autosaving")
	}, n.matches("autosaving") ? e.createElement("img", {
		src: je,
		className: "animate-pulsate",
		alt: "saving"
	}) : e.createElement("span", null, "Save")), n.matches("readonly") && e.createElement(k, {
		onClick: se
	}, e.createElement("span", null, "Back"))), e.createElement("div", {
		className: `transition-all ease duration-200 ${s?"max-h-100":"max-h-0"}`
	}, e.createElement("ul", {
		className: `list-none pt-1 transition-all ease duration-200 origin-top ${s?"scale-y-1":"scale-y-0"}`
	}, C === Qe.ROOT && e.createElement(e.Fragment, null, !n.matches("readonly") && e.createElement("li", {
		className: "p-1"
	}, e.createElement(k, {
		onClick: T
	}, e.createElement("span", {
		className: "sm:text-sm"
	}, "Sync on chain"))), e.createElement("li", {
		className: "p-1 flex"
	}, e.createElement(k, {
		onClick: N
	}, e.createElement("span", {
		className: "sm:text-sm flex-1"
	}, "How to play"), e.createElement("img", {
		src: ce,
		className: "w-3 ml-2",
		alt: "question-mark"
	}))), e.createElement("li", {
		className: "p-1"
	}, e.createElement(k, {
		className: "flex justify-between",
		onClick: () => f(Qe.MAP)
	}, e.createElement("span", {
		className: "sm:text-sm flex-1"
	}, "Map"))), e.createElement("li", {
		className: "p-1"
	}, e.createElement(k, {
		className: "flex justify-between",
		onClick: () => f(Qe.VIEW)
	}, e.createElement("span", {
		className: "sm:text-sm flex-1"
	}, "Community")))), C !== Qe.ROOT && e.createElement("li", {
		className: "p-1"
	}, e.createElement(k, {
		onClick: () => f(Qe.ROOT)
	}, e.createElement("img", {
		src: gA,
		className: "w-4 mr-2",
		alt: "left"
	}))), C === Qe.MAP && e.createElement(e.Fragment, null, e.createElement("li", {
		className: "p-1"
	}, e.createElement(k, {
		className: "flex justify-between",
		onClick: () => b(I.Town)
	}, e.createElement("span", {
		className: "sm:text-sm flex-1"
	}, "Town"), e.createElement("img", {
		src: ai,
		className: "w-6 ml-2",
		alt: "town"
	}))), e.createElement("li", {
		className: "p-1"
	}, e.createElement(k, {
		className: "flex justify-between",
		onClick: () => b(I.Crops)
	}, e.createElement("span", {
		className: "sm:text-sm flex-1"
	}, "Crops"), e.createElement("img", {
		src: ti,
		className: "w-4 ml-2",
		alt: "crop"
	}))), e.createElement("li", {
		className: "p-1"
	}, e.createElement(k, {
		className: "flex justify-between",
		onClick: () => b(I.Water)
	}, e.createElement("span", {
		className: "sm:text-sm flex-1"
	}, "Water"), e.createElement("img", {
		src: ni,
		className: "w-4 ml-2",
		alt: "water"
	}))), e.createElement("li", {
		className: "p-1"
	}, e.createElement(k, {
		className: "flex justify-between",
		onClick: () => b(I.Forest)
	}, e.createElement("span", {
		className: "sm:text-sm flex-1"
	}, "Forest"), e.createElement("img", {
		src: iA,
		className: "w-4 ml-2",
		alt: "wood"
	})))), C === Qe.VIEW && e.createElement(e.Fragment, null, e.createElement("li", {
		className: "p-1"
	}, e.createElement(k, {
		onClick: () => V()
	}, e.createElement("span", {
		className: "sm:text-sm"
	}, "Share"))), !n.matches("readonly") && e.createElement("li", {
		className: "p-1"
	}, e.createElement(k, {
		onClick: re
	}, e.createElement("span", {
		className: "sm:text-sm"
	}, "Visit Farm"))))))), e.createElement(zo, {
		isOpen: m,
		onClose: () => u(!1),
		farmURL: Q
	}), e.createElement(ei, {
		isOpen: h,
		onClose: () => w(!1)
	}), E && e.createElement(U, {
		show: E,
		centered: !0
	}, e.createElement(P, null, e.createElement(Fe, {
		sitekey: "6Lfqm6MeAAAAAFS5a0vwAfTGUwnlNoHziyIlOl1s",
		onChange: H,
		onExpired: () => B(!1),
		className: "w-full m-4 flex items-center justify-center"
	}))))
};
var ri = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABS0lEQVRIS7WVgW3CMBBF8QR0g7IB7QTtBnQEmAA6QcMEwAR0hHYD2AA2gA3oBOl/1aUykDixMSdZnIj03/27i+N6dw53Z/3eFaAsy42gfZ135xz5TVEHKD3FpfK5QKdUShsA3YPOJNVNCPAs4U+doVX/ZaAoN40AVfz3TDOZ6aewuSCOG2CdohVgkIG5eTFVhg+I9gWjE6BSkJuxcgbPluGmEGQVIkQBzM2DuRl5bljpXR0oGuC5eTM3j/YfbuaXkGSA56ZQPjXhnSBs33/kAHxIjU0j9gI8ZQFo4K8SWusMTJA3HjdnEe1AwgwZYWZAbHGQZcgSRxRxID86DJa1bYxODiRMGxCmLVXV4ywvml0VDLKqGuHbrwoJsm4Lr+pv5Yjnuey8ph5NeBPqddOztu8B9wyDjKrah9UBqjuF1UuqOghIaUPUmuYG/ALCcqQZqReAeAAAAABJRU5ErkJggg==",
	oi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAeElEQVRIS2NkoDFgpLH5DANjwf///w8AfWaP5rsDjIyMjiAxQvLI+rD6AGjAf2xBB7QArJ6QPNEWoBtILH/UAngc4Aqy0SAaDSJETiU2Y8FyNkz9aCoaQqkIvcimZnGNrcI5CLTAAU+FA5cnmIqoWU8PTJ1MTR8AALBLBChPiHynAAAAAElFTkSuQmCC",
	ii = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABIElEQVRIS72VgQ2CMBBF6QS6ibqBTqAj6CTCJDqCboAb6CY6Qf3f3JlCWwRaaUJImut/d/+OYoo/L/Nn/WJ6gLW2RlUzPAdjzD21Qq8CAKyIPgVy6QORxCyS2rjxXQCNK3Go+gXRxBDb0OwCUPQowqyClrGq4BoMYCY4tIPaWXrCfkT7MgrAVHFwKZAF3tG+jAYIZC6Qrfjj9SUJoKZDpIz1JQtAqmn0Ba1ayf5nvHtPUTvQqYKAEx7adkPcOhugZdEVwnsd3SSLcJjZMmtmz1VBmP34rtEAGVOKc1xfkrV3fYwCyIemfj9EPHgBDgbQBmckG3671jjNHzZFjojndy5A1O8IoOa+jq3GhG5T9ZgjmP+HE8ouZW/6f3JKtqGzb9/JzxlifogVAAAAAElFTkSuQmCC",
	li = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABH0lEQVRIS+2V4Q2CMBCFaeJ/HUEnUCdQJ9BNdAScQDdRJ1AmkBEYQQcw+F69EmiAHlH+SXIpKcf7HtdeMVHPl+lZP/oKkOf5CAaniBliLCPvM2PMnOZVgBYhAmovAKx2EADxVFzWCT0xyeeMTMarFe4AyEU58YRSaDx8KgzZ/M4A90JoU/wBoQpF/xJVSoRybDCxlQ5m090Qy59sUxE/depkjSMniFy6XSAuiBjBpjsi1rVfoHVUArgOn6AJeUxwB/GguzcBVI6UgBegAwtSvlCcLTUlOmNuLyU6YOTCJwB8FlsJKByV8inUtMgrAFiRCsCVqNWRA0jNCdkhWPshnSNiJ+4DVI7KAM195YcjO6nVkUa0nBP8o3UV9PN7B7wBGlDDGQBvukwAAAAASUVORK5CYII=",
	ci = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAq0lEQVRIS+3UwQ2AIAwFULuBm+gGwuTiBrqJG+Bvohdj7KfKDRNu8l/aAtJV/qRyftcAs8Nmi3LOK1IyVhSR3Uy8/cAACXsmLIWKEQboEazI4EFMQCtGm9wIBXxBaMCLFAEPSMLJim8nywvMCB2xFgDhN+Ac9hW+IThYd4OuwBOulVGAN5wCvoSzgD4Reoupnt8HbrYIFegzoTfZHOjTaTKB0tezuIIGVJ/BATvIURnJ/n8FAAAAAElFTkSuQmCC",
	mi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABKklEQVRIS+1U7Q2CMBSkE4AT6AhuoE6gI+AEuoG4gU6gIzgCTqBu4Ag4Qb0jD1Oa0kIC/tGXNA3leve++lQ0sKmB+aMfEdBaT5HKE1ahlFp0SWswRSBfCXlCYggE75gOeMEgzwDe1S70IQBiesuU0HvavhKqIhDMBudHnBVNaSsjADjHNnOAXjhLQXABRpspwmcqTuS+ulQC5WXLHkJ+FydsAUbJf2OsNUTOrihqAr4C2hGIKLvrhnXF3XnvAiLyxB5DYDSkQAKBso1t+26KLHUWkMXzFZn5n7Qpcg6Qq03Z3xTxtWljgemw8yXLI2LbLSWqDDvXZ1QIZoujQ/ChuYojHULS/keFKSjDjtHEZgRNTjm7KASWcU0RpoiPq7V1Gr2tWQ3gXyCYtTfvT5sZKcJQJgAAAABJRU5ErkJggg==",
	gi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABfUlEQVRIS+1U0VUCMRAkFQAVeFQAVCBUICVgBdgBRwdYgZSAFXhWIFSgHYgVHDN5sxDPkIPn8aV5b19gb3cmmc2ua115uSvjt/4IQVmWA0j5BNs558YxWRFTwN+H9RCzs5haiZA4EXiHSUiO5ojgFiEb2NhIkgRIyhE8D0+cIMgE3sa+QBxz40UGME9LSXh6roURGYFiZvA/2mnhm5qUJpW/QXC98LD8/QWbAmCNmDKUKAArwroEWPfwr4zAJ1fWVuDUlIeoEvCW/HYD82CKy3XbZ/gm3whO6RsjkI+v6w32ityRfNxfSA7f8FcEAvzA3gZYV/95s0+TsymCDgj8M4aSGbb3RgjUgKck2oJ0kCoyC8jipYpMcJ64tsgFgtiF1cWWZ3LqmR4KLIkM6/hMq6hqohX8d/qWY6cdRoViHuBaRhqN/ZPR3/SooGQsdnpUhDfSsONtOGPOGXZs0NFZw86I9FpIQgI214+lEcFvXhoLqB3XMbBLfP8EtWrtARj47Rnblvt7AAAAAElFTkSuQmCC",
	di = "./assets/willow_tree.e573742b.mp3",
	ui = "./assets/harvesting.024b0b75.mp3";
const Fa = [{
		artist: "Romy & Rick",
		name: "Harvesting",
		path: ui
	}, {
		artist: "Romy",
		name: "Willow Tree",
		path: di
	}],
	pi = A => Fa[A],
	Ei = () => Fa.length,
	wi = A => {
		const [t, a] = i.exports.useState(Math.min(Math.max(A.initial, A.min), A.max));
		return {
			decrease: () => {
				a(Math.max(t - A.step, A.min))
			},
			increase: () => {
				a(Math.min(t + A.step, A.max))
			},
			value: t
		}
	},
	hi = () => {
		const A = wi({
				initial: .1,
				step: .1,
				max: 1,
				min: 0
			}),
			[t, a] = i.exports.useState(!1),
			[n, s] = i.exports.useState(!0),
			[r, c] = i.exports.useState(0),
			m = i.exports.useRef(null),
			u = () => {
				m.current.paused ? m.current.play() : m.current.pause(), s(!n)
			},
			h = () => {
				Ei() === r + 1 ? c(0) : c(r + 1)
			},
			w = pi(r);
		return i.exports.useEffect(() => {
			m.current.volume = A.value
		}, [A.value]), i.exports.useEffect(() => {
			navigator.userAgent.match(/chrome|chromium|crios/i) && (s(!1), m.current.pause())
		}, []), e.createElement("div", {
			className: `position-fixed ${t?"-right-6 sm:right-10":"right-2"} sm:right-2 bottom-4 z-50 md:w-56 w-48 h-fit  sm:-translate-x-50 transition-all duration-500 ease-in-out`,
			style: {
				transform: `translateX(${t?0:"calc(100% + 8px)"})`
			}
		}, e.createElement(P, {
			className: "pointer-events-auto w-40 sm:w-56"
		}, e.createElement("audio", {
			ref: m,
			onEnded: h,
			onPause: () => s(!m.current.paused),
			onPlay: () => s(!m.current.paused),
			src: w.path,
			className: "d-none",
			autoPlay: !0,
			controls: !0
		}), e.createElement("div", {
			className: "p-1 sm:mr-2 relative"
		}, e.createElement("div", {
			className: "mb-1.5 overflow-hidden bg-brown-200 "
		}, e.createElement("p", {
			className: "whitespace-no-wrap w-fit text-white font-italic text-sm",
			style: {
				animation: "marquee-like-effect 10s infinite linear",
				whiteSpace: "nowrap",
				animationPlayState: n ? "running" : "paused"
			}
		}, w.name, " - ", w.artist)), e.createElement("div", {
			className: "flex space-x-2 justify-content-between "
		}, e.createElement(k, {
			onClick: u,
			className: "w-10 h-8"
		}, e.createElement("img", {
			src: n ? oi : ri,
			alt: "play / pause button "
		})), e.createElement(k, {
			onClick: h,
			className: "w-10 h-8"
		}, e.createElement("img", {
			src: ii,
			alt: "next song button"
		})), e.createElement(k, {
			onClick: A.decrease,
			className: "w-10 h-8 hidden sm:flex"
		}, e.createElement("img", {
			src: mi,
			alt: "next song button"
		})), e.createElement(k, {
			onClick: A.increase,
			className: "w-10 h-8 hidden sm:flex"
		}, e.createElement("img", {
			src: gi,
			alt: "next song button"
		})), e.createElement("div", {
			className: "absolute -right-2 bottom-0 bg-brown-400 h-full w-1.5 rotate-180 rounded-sm hidden sm:block"
		}, e.createElement("div", {
			className: "bg-white h-1.5 transition-all duration-200 rounded-sm",
			style: {
				height: `${A.value*100}%`
			}
		}))))), e.createElement("div", {
			className: `position-absolute ${t?"-left-7 sm:-left-9":"-left-11 sm:-left-12 sm:-translate-x-1"} bottom-0 transition-all -z-10 duration-500 ease-in-out w-fit z-50 flex align-items-center overflow-hidden`
		}, e.createElement(k, {
			onClick: () => a(!t)
		}, e.createElement("img", {
			src: t ? ci : li,
			alt: "show/hide music player",
			className: "w-4 h-4 sm:w-6 sm:h-5"
		}))))
	},
	Ci = () => {
		const {
			gameService: A
		} = i.exports.useContext(G), [t] = M(A);
		return t.context.state.id ? e.createElement("div", {
			className: "fixed bottom-2 left-2 z-50 shadow-lg"
		}, e.createElement(Ae, null, e.createElement("div", {
			className: "flex justify-center p-1"
		}, e.createElement("span", {
			className: "text-sm"
		}, `Farm #${t.context.state.id}`)))) : null
	},
	Ii = () => e.createElement("div", {
		"data-html2canvas-ignore": "true",
		"aria-label": "Hud"
	}, e.createElement(si, null), e.createElement(yr, null), e.createElement(Wo, null), e.createElement(hi, null), e.createElement(Ci, null));
var yi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAC+aNwHAAAAAXNSR0IArs4c6QAAAOVJREFUOE9jZKAQMFKon2HUAIbRMGAYDQNQPsKaF3bkB/zHlsk8Jm7AUI8hANLMJSbJoKTIiWLGvfvfGb69es6AbgjcgEOtmf9BCmCa+2ccRzGgMMOSAWYISI1d9XSwXjBBSDPMJGyGMCJrBikEuWL3+ZcMp1/+QHGBqTgHg6uhONiFMHUgNooBIH9fOXmPoW3HQ6wFVZWHPIOOuRKKVzAMAOnEZghMM0geOSywhgHMEGRngGxG1wwKSJyxgM0POGMBphg9QNENgUUzLAqxpkSYIdhcgBz/MHmsSRlkCDYDkG2GyQMA3PSVKPXuJUwAAAAASUVORK5CYII=",
	Bi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAHCAYAAADXhRcnAAAAUklEQVQYlWP8//8/g7qO638G0gEjg5q2y39yAEgfC8y+lBN+YHpb6UeCTnh2+CCYZiLDuXAAt3mOxSYI4zCJmnvmbCXLZkY1bRcQTXpoMzAwAgDMB0dV31T37gAAAABJRU5ErkJggg==",
	Qi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAHCAYAAADXhRcnAAAAUklEQVQYlWP8//8/g7qO638G0gEjg5q2y39yAEgfC8y+lBN+KFZvK/2I0ynPDh8E00xkOBcO4DbPsdiEKnOYSM09c7aSZTOjmrYLiCY9tBkYGAG1D0dVZZ30wwAAAABJRU5ErkJggg==",
	fi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAHCAYAAADXhRcnAAAAUklEQVQYlWP8//8/g7qO638G0gEjg5q2y39yAEgfC8y+lBN+WK3eVvoRQ+zZ4YNgmokM58IB3OY5FpuwqzhMQHPPnK1k2cyopu0CokkPbQYGRgCeF0dVLHBqqgAAAABJRU5ErkJggg==",
	Si = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAHCAYAAADXhRcnAAAAUklEQVQYlWP8//8/g7qO638G0gEjg5q2y39yAEgfC8y+lBN+eK3eVvoRzn52+CCYZiLDuXAAt3mOxSb8Kg/j0NwzZytZNjOqabuAaNJDm4GBEQCHH0dV01wIwwAAAABJRU5ErkJggg==",
	xi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAHCAYAAADXhRcnAAAASUlEQVQYlWP8//8/g7qO638G0gEjg5q2y39yAEgfC8y+lBN+RFs9x2ITmGYiw7lwALcZZhrJmnvmbCXLZkY1bRcQTXpoMzAwAgARO0OSW6pY7wAAAABJRU5ErkJggg==";
const bi = ({
		percentage: A
	}) => A >= 100 ? e.createElement("img", {
		src: xi,
		className: "w-10"
	}) : A >= 75 ? e.createElement("img", {
		src: Si,
		className: "w-10"
	}) : A >= 50 ? e.createElement("img", {
		src: fi,
		className: "w-10"
	}) : A >= 25 ? e.createElement("img", {
		src: Qi,
		className: "w-10"
	}) : e.createElement("img", {
		src: Bi,
		className: "w-10"
	}),
	Xe = ({
		percentage: A,
		seconds: t
	}) => e.createElement("div", {
		className: "flex flex-col items-center justify-center"
	}, t > 0 && e.createElement("span", {
		className: "text-shadow text-xxs text-white -mb-0.5"
	}, To(t)), e.createElement(bi, {
		percentage: A,
		seconds: t
	}));
var ki = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABVQTFRFAAAAJlxCY8dNPolIwoVpuG9Q5KZyGFki+wAAAAd0Uk5TAP///////6V/pvsAAABwSURBVHicrY3RDYAgDAVrZABLXECYoLKAJMV/k+IEyv4jWEA3sD+93HtNAf6bAV+wbupiddQh+A9CB0Cyvu5A2LLRLdSyGBbCGcAc2i1pg8SIdF4Cab8j7Q2KcFEwUnS0U1UVeibMVajKWdorw6ziAR04FcPBNG1VAAAAAElFTkSuQmCC",
	Ni = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAC+aNwHAAAAAXNSR0IArs4c6QAAAQZJREFUOE9jZKAQMFKon2HUAIbRMGAYvmGgFuP0H5ZHbi3Zhze5Y0iCNEvosjGo2rGCzTg89SvDJGE+MNtj4gYM9TgNgLngxeVf8AwLMgjdELgBh1oz/3979ZyBS0ySIeX6TYbPD/6ANar6coFdc/vQbwaQYSBDQGrsqqeD9YIJZM1KipxwG02nnQEbgOyaOZrqDDCLQIYwImsGKUQ3gFeBBewaEL3Py4Dh3v3vYPNghqAYgKwZpDB8+1WwRpABKz214YaD5AgaALIFZhu6y1AMwBcG2MpLZM3gMIApwhWQyIaga4bHAjZDsNmOHPoweYyEBHMJNgOQ4x+nAbAwwWYALPEgywEAXwKZKFLp53sAAAAASUVORK5CYII=",
	Mi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACRQTFRFAAAAJlxCPolIY8dNGTw+uG9QwoVpvkovcz4513ZD5KZyy2A5zCJG7wAAAAx0Uk5TAP//////////////CcRQJgAAAG1JREFUeJxjYKAhYBSEMoSMBaAMJUEIi9FFWRHMYA1UgjDCClVEQXRqxqyVbWEMDGxhK2bv7EpNYEhNW1G9vWtZGENq1rLy8iwwY1Va2ioggy1sFRAA1YCEQAIgbWlpIAGgUGhoGNhktrQ0oAAAO/cgvfBUmnAAAAAASUVORK5CYII=",
	Ri = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAC+aNwHAAAAAXNSR0IArs4c6QAAAX5JREFUOE/tkjFLw1AQxy+Dgs+6qEQzKtRJad0UNENBhIr4BRwdFEdHZ0dH0cHRLyCiIEKHKOhmi04W6hgt6mKNoEPkXnuPS3JJh67eEMjd/X/v/veeBT2G1aMe/gGQ3MHUeinki306qWTuKVJE8fhMP+TdPsO4PviCLIgIQDVBEBAPDkyMRxZwEoyXhx9Y3B40jLr3q3MESfXnLLh6F/lVZaZBMUG7ArCRdkLH48kYmRa4XwLUzwKd9m+8xMSpFirlQrg5PKKFRx/vULqoib1icsedDzfmFAwVCxrwWa3B8V0A+95t9wlIjEIOwH8JYoje3lYYNH24un+FlVwAzvQotJpt7zlbgf/4BuctBUuzY6BsB9zdQ63VHxJj4fSyqgF6Alu1LXRACFhbLgIeRBCLi7GZA+IvkACYJ0gEMDkxAI3nbxFCYupJBSAdIVKgmOoGEN8BNYmEDjyyA2rku0iD4GRcbG5BgkgTxMUJALcjAfj9U118ymhHAtDj4bU/yLnZKOF0S6wAAAAASUVORK5CYII=",
	Fi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAC+aNwHAAAAAXNSR0IArs4c6QAAATlJREFUOE9jZKAQMFKon2HUAIbRMGAYGWFg1+nxH5RfDpXvwJrssQruyA8Aa2qT+sGgasfK4KjnxjBrylashmAYANLMJSbJUMNyn+HF5V8Mttnc4Ax7eOpXBgldNgxD4AYcas38/+3VcwaQ5pTrNxnqZgYyrNx0h+Hjo5tgA/jl1BnC/VQYmtLXM8zRVGewq54O1gsmkDUrKXIyOG27ALb51QMlsCYQABkmpnAP7JJJwnxgi0CGMCJrBimEGQBig5wMCgMQuH3oN5gNMgDkAphrUQxAth2kARQG6t66YANAXgF5o/TeLzAfrwEgm0EAZAAyG2QzyJJ7978jDEAPA1AAwgBIAzJA1wwOA5gC9IDEVtgi24wSC9gMwWYAzN8wzfBoRFYMcwk2A2BRhyyHNSmDDMFmALLNMHkAagGuKADuFgAAAAAASUVORK5CYII=",
	vi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAMAAACJtiw1AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADxQTFRFAAAAKGdJRJlPbNBWyU8zgkQ+KGhJyk8z+Hgkg0Q//rA5yU8ywoVpPolIuG9QY8dNJlxCg0U/ylAz5KZyYwbm2QAAABR0Uk5TAP////////////////////////+64WOpAAAAcElEQVR4nNWOWxKAIAgAtSzQoKDuf9eApucN2g/H3UHGlH5Pzp/Q9a9ShrHL8HAstbZ2lQkRsMFVyAYQTRtQOLMHtKPM5L4sImCvdFWyYkGYBUBB6QjmLLWq0uYhibMF4bZlppdHCU73EtD992MirjuuzAbeW10l5gAAAABJRU5ErkJggg==",
	Di = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAC+aNwHAAAAAXNSR0IArs4c6QAAAV5JREFUOE9jZKAQMFKon2HUAIbBHAZqMU7/QVF8a8k+vDGFVRKk2TabG5xEDk/9itcQnAZI6LIxqNqxEjQEp/NAroAZgs8VGAbs89L/v/ULF8NmOU4GkAEg8OLyLwbfR98ZvHm+MThtu4iiB4UD0myp85nh+BVeBpAhyKC74DeYe2DObxRD4AbANIMUgQwAGcRuIQQ3A6TRIQUSJsiGYBgA0wzTic0QigyAeREWFmAXHGrN/L9x5wWGFouXcOcj+x/mCpDNIANqTogz+LsbMNhVT2dkBGn+9uo5w+7zL8GhDAo8EA1SiAxgAQtT42oozsAlJskANwDEAbkC2RBkA2AGg2iQ7SBLMQwAaQAZAgMgw0AAOUpBmkEAbgAsDGACxJSRMLXgMIBpgIUFyFlKipxYzbl3/zvcZpBmkCKUlIhsCDYTkG2GyWPkBZgh2AwAuQ5mM04DYGGCzQB0zSA1AC3E0ij7d8sAAAAAAElFTkSuQmCC",
	Gi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAC+aNwHAAAAAXNSR0IArs4c6QAAASBJREFUOE9jZKAQMFKon2HUAIbRMGAYDQNQPsKaF3bkB/zHlsk8Jm7AUI8hANLMJSbJoKTIyZDJ+BdszvT/zAz37n9n+PbqOQO6IXADDrVm/gcpgGmOenyNQdWOFWzA7UO/GZbJasENAamxq54O1gsm0DWDxJy2XWCwzeYGG3B46leGfV4GYDbMJTBDGJE1gxSAnC7FcYjhwJzfDBlCwmBNM969ZXBIYWV49sMObAAIwFyLYgBIMwgIX9jAwG4hBDYEBECaf554x/DWIADDFVgNANli+nEnA3uhPVjDz/6DDKf53cGuQ/cGzjCAORUWndg0gwISZyxgSwfoAYiRkNADFN0QWMDBohBrSoQZgs0FyPEPk8ealEGGYDMA2WaYPACE2KcoWgp27QAAAABJRU5ErkJggg==",
	Yi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACRQTFRFAAAATadvPolIY8dNuG9QJlxC/q40vkovwoVp93Yi/udh5KZyvtv1bwAAAAx0Uk5TAP//////////////CcRQJgAAAGlJREFUeJxjYKALEFKE0IzGxgIQhrIRhMESbOoAZriVhqeA6JZZ6WUrPRgYODwqs5ZNb2lgaOnonLVyxg4PhpbuHdMyu8GM3R0du4EMDo/dQABUAxICCYC0dXSABIBCLi4eYJM5OjqAAgDOwCQedRl9lAAAAABJRU5ErkJggg==",
	Oi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAC+aNwHAAAAAXNSR0IArs4c6QAAASNJREFUOE9jZKAQMFKon2HUAIbRMGAYDQNQPsKaF3bkB/zHlsk8Jm7AUI8hYNfpAde8TFYLbE7U42tw8w6V70DRA+ccas38X8Nyn0HVjhWu+Pah32A2uljLH0UGu+rpYL1gAqT526vnDG1SP8CKgzqtwRo7LQ+A6fLjDmB6XflRBpChVc84GLjEJMGGMMI0gwRSrt9ksM3mhruAtVAezP7d/xAudnjqV4Y5muoMIAtBelAMUFLkZHDadgGuWEKXDcx+cfkXXGyflwHDvfvfcRsAUglSAAIgF4EAyEYQAFkAk4e7ADkMQE5CVgS3FodmcBjAFCGHBcwQZAPQbUaJBWyGoGsG8WHOhmkGiWEkJJhLsBkAizpkOaxJGWQINgOQbYbJAwDJrZIoIQm7YgAAAABJRU5ErkJggg==",
	Ui = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACFQTFRFAAAAtVCI6LeWPolI9nV6Y8dNaDhsJlxCwoVpuG9Q5KZydwIgswAAAAt0Uk5TAP////////////99dn3VAAAAdklEQVR4nGNgoAsQUoTQjIpCAiCaWchRRNEAyDBNEVJ0CwYyShOdVMTCgYxiMxHHZHMGBo7pxolixpUNDJ0dxebF5h0zGDq72svLK1aAGCs6OrqADI4Zq4Cgs4EBKLRqFVAAqG1GRwdIACg0c+YMsKUcHR1AAQBIpyNEnRctpQAAAABJRU5ErkJggg==",
	Ji = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAC+aNwHAAAAAXNSR0IArs4c6QAAAYZJREFUOE/tlLFLw1AQxi9DBR2yCFKhIEqrWHBycTFgJkEE3R0FFUTQRcFZ0EVBBBX8HxREcKqQLi5OQkVaFKFgEVwyKNgh8p1eeu8lnbqJt7y8e/f97nsvL3Gow3A61NM/gP7sGVzN7UZThZBCP8fXxC3V6abq0szFVuK1JxIQjy+5dHcaGndMcjbEAIhYOmqCOAJYQwzA8sRqtD/psl101AEhIBvlkE5uj2IdP3h70xHG4nmeZrM5LkToM8Ac4MtGnSrzNV4PNq8dB+KCl+FEZn3AANgfmgCaBy+8VA2aFANEjA5wgRAnECJkDSMgDBhe8KPsWFdsXxdqBxos22jcf7UA+gwEogHiSp8BA4KdlWjx4ZHgoh2knfhsdOQH8PH2SmvvIUNA9WvFxI+qlK9wTmoOe13q6etvATCBEynCCFjaHJ3RlAH8Pn9dIIEQkG0DQoSIve1jJ75RGjI02J3YAhJPz5+GGDnjKttObIruLGuJr1EgaRawRdjWa6m/dUDSALYYNd9QHuLKeykH4QAAAABJRU5ErkJggg==",
	Ti = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAC+aNwHAAAAAXNSR0IArs4c6QAAARlJREFUOE9jZKAQMFKon2HUAIbRMGAYDQNQPsKaF3bkB/zHlsk8Jm7AUI8hANLMJSbJoKTIiWLGvfvfGb69es6AbgjcgEOtmf9BCkCaa1jugzUvk9UC01GPr4Hplj+KYENAauyqp4P1ggl0zap2rGANh6d+BdO22dxg+vah3xiGMCJrBilKuX6T4YKkBUNu0GWwBhAAGTh5nS6DwfMTDHM01cFiMJegGADzt9O2CwxOd7QYrgXeASvWWq/CsE/lGsM+LwMwHxYeIK9gNQCkIHz7VZRAXOmpDQ9YFAPQwwDmCpAiZIAsjhyQWGMBPQphBiHbjBILMAXoAYqemNCjEB6NyAphhqBrBvGR4x8mjzUpgwzBZgDM2chyAKXDnigDKusXAAAAAElFTkSuQmCC",
	Ki = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACRQTFRFAAAAJlxCPolIY8dN9nV6GTw+aDhsuG9QtVCIwoVp5KZyPicx07kR1AAAAAx0Uk5TAP//////////////CcRQJgAAAHVJREFUeJxjYKAhYBRgFAAzlA2FjcAMFSNlJzAjKElNFcxgDUsNADMq2jLaQfT0GS4unZUMDJyVy1o8sqZPYJg+c3Va2q6VlQzTZ63clj0LzFg1c+YqIIOzchUQANWAhEACIG0zZ4IEgELl5ZVgkzlnzgQKAAD5VyhgOGalzQAAAABJRU5ErkJggg==",
	Li = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAC+aNwHAAAAAXNSR0IArs4c6QAAAZZJREFUOE9jZKAQMFKon2HUAIbBFgZqMU7/kaP11pJ94FjCJQ6Sg0cjSJFtNjdKsjg89SuYj00cZjiKARK6bAw73hgx5AZdBmu8feg3mFa1YwXTk9fpMniInGN4cfkXA04DQAq11qsw/O5/iOIa1kJ5hmuBd8BiWA2A+fXzgz8Mqr5cYENgGmDs25u/MfAqsMBtRwkDZOskbezAgen/Rw8svJHlEph+fuQQRtLHENga0PHfUfUTw/7bfAybXzwBa/SVkGGAiXlvqEDRg8KBacaXQ0EGIxsCN+BQa+b/z6flwXpBtmEDIM0gwGv6kMGuejpYL5gAaf726jnDhpMyYOdiMwSmGeStAPMnDFxikmBDGGGaQQI1i04waAlaww1BdwVI87X3Rxla4iwYQBaC9KAYoKTIyRDVuB9sCCzwQDQsMEGal9U7Mty7/x23ASBJmEuQXQCzGWQJigHIYQByEkwBtkBE1wwOA5hC5LAAKcQGkG1GiQVshmAzABZwMM1YkzLMJdgMgEUdshzWYh1kCDYDkG2GyQMA7YfhKF14i/kAAAAASUVORK5CYII=",
	Pi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAC+aNwHAAAAAXNSR0IArs4c6QAAASNJREFUOE9jZKAQMFKon2HUAIbRMGAYDQNQPsKaF3bkB/wHSbZJ/QDntapnHGDaY+IGDPUYAiDNXGKSDDUs9xkOlm0Ha7Tv8mRo+aPI8O3VcwxD4AYcas38D1IA07xKz49B3CMTntuRDQGpsaueDtYLJtA1q9qxMrR+8ARrBhnycsd0hmqB7Qy3D/2GuwRmCCOyZpAGkNNBBsTvk2FQM9IFG3Lr3GWGhU5P4AaAxGCuRTFASZETrCHq8TWGF5d/MczRVAfzU67fZJDQZWNYJqsF5t+7/x2/ASAFMJeANMCcDrMAxQD0MEBWBDIEBEAxgE0zKCCxxgJMMXqBi2wzSizAFKIHKLoBsICDacaaEmGGYCvukeMfJo81KYMMwWYAss0weQBB3K0ob8M/JgAAAABJRU5ErkJggg==",
	Vi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABtQTFRFAAAAJlxCwoVp6LeW////PolIY8dNuG9Q5KZyZXt39AAAAAl0Uk5TAP//////////NwKb1AAAAHFJREFUeJxjYKAlYBSAMgQFITSTiYsCmBFs4uIKolmBDNMAECPU2DgUxFANCzZNDQIqLQ1LDUsNV2BQVxINFA1sKmJQ11AMDRUCM5qUlDSADKaiDiBQBxqprtHRARQAaitSUlIH26FeXl4EsVRJCSgAAId5FyrgUrlPAAAAAElFTkSuQmCC",
	Hi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAC+aNwHAAAAAXNSR0IArs4c6QAAASNJREFUOE9jZKAQMFKon2HUAIbRMGDAEwaHWjP/Iycyu+rpWNMMVkGQZjUjXQZxj0y4GYfbshiwGYJhADbNMFOwGYJiAEwzSAOy7cheQTeEJANe7pjOcOvcZRSv4DQA3RUgzSCA0wCQ81Ou32SQ0GVjWKXnhzWXh13axPDi8i+GOZrqcFeAXYCsWdWOleH2od8YhoA0w+SQDWEEaf726jlD3ttPYNtBikAA2RCYZpg4yIBJwnwMXGKSDHADQByYF0AKQYqQAchwmDjICyBLMQwAKcBmCLpmkDq4AbAwgAmA+OHbr2INxJWe2mBxmFpQyoRHIywsQM5SUuTEasC9+99RNIMUYaQDZJegm4JsM0wOa14AKcQGQK5Dz1A4cyM2A7DlRgBzObQoF/m3HQAAAABJRU5ErkJggg==",
	Zi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAC+aNwHAAAAAXNSR0IArs4c6QAAAQNJREFUOE9jZKAQMFKon2HUAIbRMGAYDQNQPsKaF3bkB/zHlsk8Jm7AUI8hANKc9/YTWP8+LwMw7bTtApieJMzHgG4I3IBDrZn/v716zgDSbJvNDdZweOpXMI3MBxnCJSbJYFc9HawXTMA0gyRSrt8Ea7h96DeKL1TtWMEGztFUZwBZBDOEEVkzSIeSIifcyRK6bGBDXlz+BffSvfvfwWyYISgGgDQjA9NpZ8Dc01kmKOIgQwgaAFIUvv0qWONKT22wy2AAxQD0MEBXCPMWNs2ggMSIBVDgoHsFl2Z4LMAUoAcoiseRAg4WhRgGIHsHXTOIjxz/MHmsSRnkEmwGINsMkwcAZAqVKMydiPIAAAAASUVORK5CYII=",
	Wi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAB5QTFRFAAAAJlxCY8dNPolIwoVpuG9Q5KZy////vkov6tSqUPPS0wAAAAp0Uk5TAP///////////36JFFYAAABfSURBVHicY2AYGMAowCgAZggpCilCGMbGYIaro7ChSAgDA0tIakV7mKsDg6tLxvTKtpQQBle3lMxpbmBGmotLGpDBEpIGBEA1ICGQAEibiwtIACgUGhoCNpnFxQUoAAB4exWlCXtRSAAAAABJRU5ErkJggg==",
	ji = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAC+aNwHAAAAAXNSR0IArs4c6QAAAYJJREFUOE9jZKAQMFKon2HUAIbBGgZqMU7/QdF7a8k+cCyh85GjHiMaQYpts7nBag5P/QqmkfkwQ2GGoBiArBmk4Pah32B1qnascEtBhiIbgtUAkMYXl38xSOiygTXC2CCD8BqA7F+YZpjVIEOQwwWrF2CCO/ID/ue9/YTigknCfAweEzdghBmGAEiz+4T1DPu9DRgyhITBZs5495bBcesFhp0FgRiGoBgA0/z66mqwxitlrWBap6saTItqh2IYAjfgUGvm/z9HjzGoxTgzsOlZwDWAGDADf106wXBryV4GFmsrBrvq6WC9YAKk+dur5wxst++DDQABkCEgG2EGgDRDAnEvwy9VRQYuMUmwIYwwzSABEIC5AmYIiEbWDLIdBEAWgvSgGKCkyAm2AdkV6AaA5O7d/47bAJAkelgg+x1kCYoByGEAchJMASxNINPomsFhAFOAHBYghdgAss0osYDNEGwGwAIOphkejciKYS7BZgAs6pDlsBbrIEOwGYBsM0weAKyP6igWqIILAAAAAElFTkSuQmCC",
	zi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAC+aNwHAAAAAXNSR0IArs4c6QAAAQ1JREFUOE9jZKAQMFKon2HUAIbRMGAYDQNQPsKaF3bkB/zHlsk8Jm7AUI8hANKc9/YTWP8+LwMw7bTtApieJMzHgG4I3IBDrZn/v716zgDSbJvNDdZweOpXMI3MBxnCJSbJYFc9HawXTMA0gyRSrt9kkNBlY1C1Y2W4feg32AAY+8XlXwxzNNUZQBbBDGFE1gxSrKTICXby5wd/GHgVWMAGwNggL927/x0sBjMExQCQZmRgOu0MmHs6ywRFHGQIQQNAisK3XwVrXOmpDXYZDKAYgB4G6Aph3sKmGRSQGLEAChx0r+DSDI8FmAL0AEXxOFLAwaIQwwBk76BrBvGR4x8mjzUpg1yCzQBkm2HyAHvemygNaHxtAAAAAElFTkSuQmCC",
	qi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACRQTFRFAAAAJlxCY8dNPolIGTw+uG9QwoVpoiYz5DtE5KZy9nV6PicxZXSAugAAAAx0Uk5TAP//////////////CcRQJgAAAGtJREFUeJxjYKAHYBRgFAAzhBSFFMEMYWUjQ4iUowhEKqxQPBVEp6Z3dJSFMTCwhU3v6KpMTWBITZtdXr5zWhhDaua08vJMMGNmWtpMIIMtbCYQANWAhEACIG1paSABoFBoaBjYZLa0NKAAAMZuHwOIY5wvAAAAAElFTkSuQmCC",
	Xi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAC+aNwHAAAAAXNSR0IArs4c6QAAAXRJREFUOE9jZKAQMFKon2HUAAYqh4FajNN/5Fi5tWQfOJBxiYPk4LEAUiShy8agascKN+Pw1K9gtm02N1zs9qHfDC8u/2KAGY5hAEglzBCQYmx8ggYga4JZDTMMxMdqAMyvnx/8YVD15cKaQG9v/sbAq8ACdz5KGCDrkLSxAwcmSDEIgAwFgedHDmGkXJxJGWQIsgHYNON0wSI1Y7ALWsz4wTbXnPoIpuNunSXsApBmJ1FBlDAQsjJjeHfsFMO+1+8xDIGbeKg18/+3V88ZXm1/zIBuAMg0kCFrNu5kEPOUZeASk2Swq54O1gsmYJpBEjWLTjCk/GfCGgtzGP8xtMRZMIAsghnCiKwZ7F8iDACpgxmCYoCSIifDvfvfsRoCsx2mBqcBINNBhjxYeArFGwrxZgwgzTB5uAHoYYCsCNkEbJpBAYkRC6DAgSlGD0mQy5ADECMhoQcougHomrGmRJgh2OIROf5h8ljzAsgQbAbAEg+yHABjVNkor+mwPgAAAABJRU5ErkJggg==",
	$i = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAC+aNwHAAAAAXNSR0IArs4c6QAAAQRJREFUOE9jZKAQMFKon2HUAIbRMGAYDQNQPsKaF3bkB/zHlsk8Jm7AUI8hYNfp8b/ljyKDkiIn2Iyox9cYlslqMdy7/53h26vnDG1SPxgOle+A64MzDrVm/q9huc+gasfKcPvQb7AmkGZcfJghYANAmmGmwzTAvICLD3KlXfV0RkaYZi4xSQZkF8A04qKrnnEwgPSgGJBy/SaDhC4bw4vLvxhss7kZDk/9ipM/SZgP0wCYs0EGwQyYo6nOgM4HqQN5GewC5DAACYBCHxTi+ABMMzgMYAqRwwIWheiGwKISZBFIM0ZCQjYEmwuQbYbJYyQkmCHYDEC2GacBsDDBZgDM2chyAGhrryjy0S1JAAAAAElFTkSuQmCC",
	_i = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABVQTFRFAAAAJlxCY8dNPolIwoVpuG9Q5KZyGFki+wAAAAd0Uk5TAP///////6V/pvsAAABuSURBVHicrY5RDYAwDESPMAGMKRhFAQpI1mGA4mDBvwSu1UDv5+XlLinw103ZQ1g3zwIU8RDWw+Om5prDRIkwecVXs1cKocUMSHeYE71Vnhi6Cm8nXE2aqCHZ0KH9BNX7DuM8mYageh6Lz5IqxQffrRN2t4pIRgAAAABJRU5ErkJggg==",
	el = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAC+aNwHAAAAAXNSR0IArs4c6QAAATRJREFUOE9jZKAQMFKon2HUAAYqh8H3MqX/sFjh7LrHSIgPUguPBZBijoy/8Fj9MYOZgRAfZAmKASwm/xhYTP4z/DnDyPDnDBMDIT6GASAbQZpBhsBcgI+P0wUgzTAAMhSdD3MhVhcQ43eYoSgGgGyEhTohv4PUgjSjxAKI83uVwn9Q4BEKC5AFrGEPcBtAyAVYDTjUmvnfUnU7OPpIdgFI87dXzxmcrS8wsPjrMfyovcLA0ayDk/6z8RLD8dueDHbV0xkZYZq5xCQZQC4AGQBSQIjee9SAAaSHugaAYsK25ClBFxzukWYAeRnsApAmZG+A+MheAfkVnQ/TDA4DWJJFNwQmrqTIyXDv/nd40kbWjJGQcBkC042uGcMAZO9gK+5BfgY5G1kOa7EOcgk2A9A1g9QAAD8yRzen4XV/AAAAAElFTkSuQmCC";
const Al = {
		Sunflower: {
			seedling: ba,
			almost: ki,
			ready: xa
		},
		Potato: {
			seedling: Ni,
			almost: Mi,
			ready: Ri
		},
		Pumpkin: {
			seedling: Fi,
			almost: vi,
			ready: Di
		},
		Carrot: {
			seedling: Gi,
			almost: Yi,
			ready: Ma
		},
		Cabbage: {
			seedling: Oi,
			almost: Ui,
			ready: Ji
		},
		Beetroot: {
			seedling: Ti,
			almost: Ki,
			ready: Li
		},
		Cauliflower: {
			seedling: Pi,
			almost: Vi,
			ready: Hi
		},
		Parsnip: {
			seedling: Zi,
			almost: Wi,
			ready: ji
		},
		Radish: {
			seedling: zi,
			almost: qi,
			ready: Xi
		},
		Wheat: {
			seedling: $i,
			almost: _i,
			ready: el
		}
	},
	tl = ({
		field: A,
		className: t,
		showCropDetails: a
	}) => {
		const [n, s] = e.useState(0), r = e.useCallback(() => {
			s(h => h + 1)
		}, []);
		if(e.useEffect(() => {
				if(A) {
					r();
					const h = window.setInterval(r, 1e3);
					return() => window.clearInterval(h)
				}
			}, [A]), !A) return e.createElement("img", {
			src: yi,
			className: Y("w-full", t)
		});
		const c = te()[A.name],
			m = Al[A.name],
			u = ze(A.plantedAt, c.harvestSeconds);
		if(u > 0) {
			const h = 100 - u / c.harvestSeconds * 100,
				w = h >= 50;
			return e.createElement("div", {
				className: "relative w-full h-full"
			}, e.createElement("img", {
				src: w ? m.almost : m.seedling,
				className: Y("w-full", t)
			}), e.createElement("div", {
				className: "absolute w-full -bottom-4 z-10"
			}, e.createElement(Xe, {
				percentage: h,
				seconds: u
			})), e.createElement(he, {
				className: Y("ml-10 transition-opacity absolute whitespace-nowrap sm:opacity-0 bottom-5 w-fit left-1 z-20 pointer-events-none", {
					"opacity-100": a,
					"opacity-0": !a
				})
			}, e.createElement("div", {
				className: "flex flex-col text-xxs text-white text-shadow ml-2 mr-2"
			}, e.createElement("div", {
				className: "flex flex-1 items-center justify-center"
			}, e.createElement("img", {
				src: m.ready,
				className: "w-4 mr-1"
			}), e.createElement("span", null, A.name)), e.createElement("span", {
				className: "flex-1"
			}, LA(u)))))
		}
		return e.createElement("img", {
			src: m.ready,
			className: Y("w-full", t)
		})
	};
var al = "./assets/harvest.eb069903.mp3",
	nl = "./assets/plant.380f1bf4.mp3",
	sl = "./assets/kitchen.6266ab4b.mp3",
	rl = "./assets/blacksmith.381b0a21.mp3",
	ol = "./assets/shop.8915cbb9.mp3",
	il = "./assets/bank.c35b9e60.mp3",
	ll = "./assets/beggar.92a655f9.mp3",
	cl = "./assets/wishing_well.57b24eb5.mp3",
	ml = "./assets/frog.5411050c.mp3",
	gl = "./assets/mining.577ffa27.mp3",
	dl = "./assets/mining_fall.56e0fd85.mp3",
	ul = "./assets/chop.68e3a2e9.mp3",
	pl = "./assets/tree_fall.22026ce7.mp3",
	El = "./assets/tailor.e1d10de1.mp3",
	wl = "./assets/home_door.39ce3c18.mp3",
	hl = "./assets/barn.9c7526b9.mp3";
const Cl = new ee.Howl({
		src: [al],
		volume: .2
	}),
	Il = new ee.Howl({
		src: [nl],
		volume: .2
	}),
	yl = new ee.Howl({
		src: [sl],
		volume: .5
	}),
	Bl = new ee.Howl({
		src: [rl],
		volume: .2
	}),
	Ql = new ee.Howl({
		src: [ol],
		volume: .2
	}),
	fl = new ee.Howl({
		src: [il],
		volume: .2
	}),
	Sl = new ee.Howl({
		src: [ll],
		volume: .3
	}),
	xl = new ee.Howl({
		src: [cl],
		volume: .5
	}),
	bl = new ee.Howl({
		src: [ml],
		volume: .2
	}),
	Ue = new ee.Howl({
		src: [gl],
		volume: .5
	}),
	VA = new ee.Howl({
		src: [dl],
		volume: .5
	}),
	kl = new ee.Howl({
		src: [ul],
		volume: .3
	}),
	Nl = new ee.Howl({
		src: [pl],
		volume: .3
	}),
	Ml = new ee.Howl({
		src: [El],
		volume: .2
	}),
	Rl = new ee.Howl({
		src: [wl],
		volume: .1
	}),
	Fl = new ee.Howl({
		src: [hl],
		volume: .1
	});
var vl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAHCAYAAADXhRcnAAAASUlEQVQYlWP8//8/g7qO638G0gEjg5q2y39yAEgfC8w+PoM8oq3+dGESmGYiw7lwALcZZhrJmnvmbCXLZkY1bRcQTXpoMzAwAgB5f0RgwdkD/QAAAABJRU5ErkJggg==",
	Dl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAHCAYAAADXhRcnAAAAVElEQVQYlWP8//8/g7qO638G0gEjg5q2y39yAEgfC8w+xll3wDTvtEkEnfDpAkQNExnOhQO4zf/TVCCMNMI2wwBYc8+crWTZzKim7QK2mGSdDAyMANOHRo3ACyXwAAAAAElFTkSuQmCC",
	Gl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAHCAYAAADXhRcnAAAAVUlEQVQYlWP8//8/g7qO638G0gEjg5q2y39yAEgfC8w+xll3sFrNO20ShtinCxAxJjKcCwdwm/+nqWBXkYZpMwyANffM2UqWzYxq2i5gi0nWycDACACwt0aNkffcOAAAAABJRU5ErkJggg==";
const $e = ({
	percentage: A
}) => A >= 50 ? e.createElement("img", {
	src: Gl,
	className: "w-10"
}) : A >= 25 ? e.createElement("img", {
	src: Dl,
	className: "w-10"
}) : e.createElement("img", {
	src: vl,
	className: "w-10"
});
var va = "./assets/synced.b9cc64dc.gif",
	HA = "data:image/gif;base64,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";

function Yl(A, t) {
	return Math.floor(Math.random() * (t - A + 1) + A)
}
const Ol = ({
		reward: A,
		onCollected: t,
		fieldIndex: a
	}) => {
		const {
			gameService: n
		} = i.exports.useContext(G), [s, r] = i.exports.useState(!1), c = i.exports.useRef(Yl(30, 100));
		if(!A) return null;
		const m = () => {
			r(!0), n.send("reward.opened", {
				fieldIndex: a
			})
		};
		return e.createElement(U, {
			centered: !0,
			show: !0
		}, e.createElement(P, null, e.createElement("div", {
			className: "flex flex-col items-center justify-between h-52"
		}, e.createElement("span", {
			className: "text-center mb-2"
		}, "Woohoo! You found a reward"), s ? e.createElement(e.Fragment, null, A.items.map(u => e.createElement("div", {
			key: u.name,
			className: "flex items-center"
		}, e.createElement("img", {
			className: "w-8 img-highlight mr-2",
			src: Z[u.name].image
		}), e.createElement("span", {
			className: "text-center mb-2"
		}, `${u.amount} ${u.name}s`))), e.createElement(k, {
			onClick: t,
			className: "mt-4 w-28"
		}, "Close")) : e.createElement(e.Fragment, null, e.createElement("div", {
			className: "flex items-center justify-between",
			style: {
				width: `${c.current}%`,
				transform: `scaleX(${c.current%2==0?1:-1})`
			}
		}, e.createElement("img", {
			src: HA,
			className: "w-16"
		}), e.createElement("img", {
			src: va,
			className: "w-16 hover:img-highlight cursor-pointer",
			onClick: m
		})), e.createElement("span", {
			className: "text-sm"
		}, "Tap the chest to open it")))))
	},
	Ul = 1e3,
	Da = (A, t, a) => A - t > a * 1e3,
	z = ({
		selectedItem: A,
		className: t,
		fieldIndex: a
	}) => {
		const [n, s] = i.exports.useState(!0), [r, c] = i.exports.useState(), {
			gameService: m
		} = i.exports.useContext(G), [u, h] = i.exports.useState(0), [w, E] = i.exports.useState(null), [B] = M(m), Q = i.exports.useRef(0), p = B.context.state.fields[a], [C, f] = i.exports.useState(!1), x = async T => {
			c(T), s(!0), await new Promise(H => setTimeout(H, Ul)), s(!1)
		}, S = () => {
			E(null), h(0), m.send("item.harvested", {
				index: a
			})
		}, b = () => {
			if(p) {
				const T = te()[p.name],
					H = Date.now(),
					ne = Da(H, p.plantedAt, T.harvestSeconds),
					se = H - p.plantedAt < 1e3;
				!ne && !se && f(!0)
			}
		}, N = () => {
			f(!1)
		}, V = () => {
			const T = Date.now();
			if(!(T - Q.current < 100) && (Q.current = T, !w)) {
				if((p == null ? void 0 : p.reward) && Da(T, p.plantedAt, te()[p.name].harvestSeconds)) {
					if(u < 1) {
						h(H => H + 1);
						return
					}
					E(p.reward);
					return
				}
				if(!p) {
					try {
						m.send("item.planted", {
							index: a,
							item: A
						}), Il.play(), x(e.createElement("div", {
							className: "flex items-center justify-center text-xs text-white text-shadow overflow-visible"
						}, e.createElement("img", {
							src: Z[A].image,
							className: "w-4 mr-1"
						}), e.createElement("span", null, "-1")))
					} catch {
						x(e.createElement("img", {
							className: "w-5",
							src: FA
						}))
					}
					return
				}
				try {
					m.send("item.harvested", {
						index: a
					}), Cl.play(), x(e.createElement("div", {
						className: "flex items-center justify-center text-xs text-white text-shadow overflow-visible"
					}, e.createElement("img", {
						src: Z[p.name].image,
						className: "w-4 mr-1"
					}), e.createElement("span", null, `+${p.multiplier||1}`)))
				} catch {
					x(e.createElement("img", {
						className: "w-5",
						src: FA
					}))
				}
				h(0)
			}
		}, O = B.matches("playing") || B.matches("autosaving");
		return e.createElement("div", {
			onMouseEnter: b,
			onMouseLeave: N,
			className: Y("relative group", t),
			style: {
				width: `${l}px`,
				height: `${l}px`
			}
		}, e.createElement(tl, {
			className: "absolute bottom-0",
			field: p,
			showCropDetails: C
		}), e.createElement("div", {
			className: Y("transition-opacity pointer-events-none absolute -bottom-2 left-1", {
				"opacity-100": u > 0,
				"opacity-0": u === 0
			})
		}, e.createElement($e, {
			percentage: 100 - u * 50
		})), e.createElement("div", {
			className: Y("transition-opacity absolute -bottom-2 w-full z-20 pointer-events-none flex justify-center", {
				"opacity-100": n,
				"opacity-0": !n
			})
		}, r), O && e.createElement("img", {
			src: Ot,
			style: {
				opacity: .1
			},
			className: "absolute inset-0 w-full opacity-0 sm:group-hover:opacity-100 sm:hover:!opacity-100 z-20 cursor-pointer",
			onClick: V
		}), e.createElement(Ol, {
			reward: w,
			onCollected: S,
			fieldIndex: a
		}))
	},
	Jl = () => {
		const {
			selectedItem: A
		} = i.exports.useContext(G);
		return e.createElement("div", {
			className: "absolute flex justify-center flex-col ",
			style: {
				width: `${l*3}px`,
				height: `${l*3}px`,
				left: `${l*13}px`,
				top: `${l*.85}px`
			}
		}, e.createElement("div", {
			className: "flex justify-between"
		}, e.createElement(z, {
			selectedItem: A,
			fieldIndex: 0
		}), e.createElement(z, {
			selectedItem: A,
			fieldIndex: 1
		})), e.createElement("div", {
			className: "flex justify-center"
		}, e.createElement(z, {
			selectedItem: A,
			fieldIndex: 2
		})), e.createElement("div", {
			className: "flex justify-between"
		}, e.createElement(z, {
			selectedItem: A,
			fieldIndex: 3
		}), e.createElement(z, {
			selectedItem: A,
			fieldIndex: 4
		})))
	};
var pA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAMCAYAAABvEu28AAAAAXNSR0IArs4c6QAAAPJJREFUOE9jZMABBHjk/+OS+/DlISO6HIYASAHIEJ06dbBadTs2uJ6bh36B2VeabjKgGwY2CN12mCHoBoH4yIbBbAAZyggyJHiPLlwBNu8guwpmGMhVggGKDE45PAxrXS4zgA0CuWDXG1OwGW4ip3EFDYo4yCCYy0FssEEgk6X12MCGkWIQTB/YIFgYgQRhAGQoMkC2/WrTTQbtOnVwgIP0vN9wHxzw8FhDDnDkwAYZCNMMZjffYtCuVQMbBAKw2MOIfuSoxxdY6EmAKIMOl+5kELayBZv79thhBttud4y0hNUgkAZYQGJzFc4EiU0xqVkEAMqLdbuJ513PAAAAAElFTkSuQmCC",
	Ga = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAICAYAAAArzdW1AAAAeElEQVQYlWP8//8/Awio67hCGAwMjAwMDHD2zSu7GcCKQAoueJkxvDt2isHpAwMDiA0CBttOgRUywRRwdrWCJfYJQIwAaYCy/zOqabv8h0lgAyCTmXBLIwBIESNINS5TwG6C+QJdIUwBiGBBEgcphHkdroCBgYEBABcWKE3KYGeJAAAAAElFTkSuQmCC";
const Tl = () => {
	const [A, t] = i.exports.useState(!1), {
		gameService: a,
		selectedItem: n
	} = i.exports.useContext(G), [{
		context: {
			state: s
		}
	}] = M(a), [r] = SA(), c = () => {
		t(!1), r(I.Town)
	}, m = s.inventory["Pumpkin Soup"];
	return e.createElement(e.Fragment, null, m ? e.createElement(e.Fragment, null, e.createElement("img", {
		src: Ga,
		className: "absolute z-10 animate-float",
		style: {
			width: `${l*.3}px`,
			left: `${l*-.6}px`,
			bottom: `${l*5.7}px`
		}
	}), e.createElement("img", {
		src: uA,
		className: "absolute z-10 pointer-events-none",
		style: {
			width: `${l*5}px`,
			left: `${l*-3}px`,
			bottom: `${l*3.25}px`
		}
	}), e.createElement("img", {
		src: cA,
		className: "absolute ",
		style: {
			width: `${l*.75}px`,
			left: `${l*.2}px`,
			bottom: `${l*4.4}px`
		}
	})) : e.createElement(e.Fragment, null, " ", e.createElement("img", {
		src: ce,
		className: "absolute z-10 animate-float",
		style: {
			width: `${l*.3}px`,
			left: `${l*3.35}px`,
			bottom: `${l*2.7}px`
		}
	}), e.createElement("img", {
		src: uA,
		className: "absolute z-10 hover:img-highlight cursor-pointer",
		onClick: () => t(!0),
		style: {
			width: `${l*5}px`,
			left: `${l*1}px`,
			bottom: `${l*.25}px`
		}
	})), e.createElement("div", {
		className: "absolute flex justify-center flex-col",
		id: "cropzone-two",
		onClick: m ? void 0 : () => t(!0),
		style: {
			width: `${l*3}px`,
			height: `${l*3}px`,
			left: `${l*1}px`,
			bottom: `${l*.6}px`
		}
	}, e.createElement("div", {
		className: "flex justify-between"
	}, e.createElement(z, {
		selectedItem: n,
		fieldIndex: 5
	}), e.createElement(z, {
		selectedItem: n,
		fieldIndex: 6
	})), e.createElement("div", {
		className: "flex justify-center"
	}, e.createElement(z, {
		selectedItem: n,
		fieldIndex: 7
	})), e.createElement("div", {
		className: "flex justify-between"
	}, e.createElement(z, {
		selectedItem: n,
		fieldIndex: 8
	}), e.createElement(z, {
		selectedItem: n,
		fieldIndex: 9
	}))), e.createElement(U, {
		centered: !0,
		show: A,
		onHide: () => t(!1)
	}, e.createElement(P, null, e.createElement("div", {
		className: "flex items-start"
	}, e.createElement("img", {
		src: pA,
		className: "w-16 img-highlight mr-2"
	}), e.createElement("div", {
		className: "flex-1"
	}, e.createElement("span", {
		className: "text-shadow block"
	}, "This is Goblin land!"), e.createElement("span", {
		className: "text-shadow block mt-4"
	}, "I will trade this land for some creamy pumpkin soup."), e.createElement("img", {
		src: cA,
		className: "w-8 img-highlight float-right mr-1 mb-1"
	}), e.createElement(k, {
		className: "text-sm",
		onClick: c
	}, "Go to the kitchen"))))))
};
var Kl = "data:image/gif;base64,R0lGODdhYABAAHcAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJBwAAACwAAAAAYABAAIQAAAAXFCQ+iUhjx00mXEL2dXoYFCQYFSUZPD7+rjQAlem+Si/YdkQSTol0Pzks6PV1PToAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF8CAgjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsFgZKJsD41pAIBi42eh0bM12vwVx+erMrtvxZXopAQN9hocBBAN5giRrBQWHiHCNJokCkZJ9l4yVIokEBIZ0BngEnZ6fZYalAgeAqYNwdJsAgbGWdAhnZQkBCsC4JKUECAnHAQsBvsDNwrYGy8e+ygwBDdjOuAEOAQzH1mXW2NnBsdzeDOprp2gP7+/mnhC8aNEi8Pnvzyv6D/z94AEcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM84IAQAh+QQJBwAAACwnABcAHgATAIQAAAAXFCQ+iUhjx00mXEL2dXoYFCQYFSUZPD7+rjQAlem+Si/YdkQSTol0Pzks6PV1PToAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFmiAgjkFpBmOqrmkgCEP8omzdvnA8zDZ74jmZqUfaAY8zwoDWcxUKSKBLwLQFCAJoNEkliq4ELG5qoBKqRBOwLDhQ0V7AtHREleKtKeJUSgQUgAp4ZQQICYcBCwF+gYFeAQaLh36KDAENjYBpDgEMh5Yllg2jCg8Pgk2cDKuWAmc0DaayDzYQfCiRpiOxp7J4Kboio5ilv8bHvyEAIfkECQcAAAAsJwAXACAAEwCEAAAAFxQkPolIY8dNJlxC9nV6GBQkGBUlGTw+/q40AJXpvkovLOj12HZEEk6JdD85dT06AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZ0gII5BaQZjqq5rIAhD/KJs3b5wPMy2feI5mamnCuyAyBlhQCMCXIVCEugSNIkBgkA6VVqdJIKY+jJYCVewCWgWHKxpsKhaQqJK8mIVcSolAgqBeSJmBAgJiAELAX+BgQwMcgEGjIh/iw0BDpsKkJIPAQ2ImSWZm5yCkJE1AaANr5kCaCinDo4AqjUQfSiUKae3gz2oCsIpnsZEq3IhACH5BAkHAAAALCcAFwAhABMAhAAAABcUJD6JSGPHTSZcQvZ1ehgUJBgVJRk8Pv6uNACV6b5KLxJOiSzo9dh2RHQ/OXU9OgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWdICCOQWkGY6qubCAIQ/yibN2+cDzMdn/iOZmptwrsgMgZYUAjilyFQhLoEjSdAYJAOlVanaksQYurGqyEKxhgAp4FB6t6/ZxVy+z5uvRCnEoJAQqDCnQiZwQICYsBCwGBDIQNDXQBBo+LgY4OAQyehJUPAQ6LnCWcAJ6RhXuiDq+cAmk0n4MqkywQfyiXKrW3lIbAkcJOk8HFRLg1IQAh+QQJBwAAACwnABcAIQASAIQAAAAXFCQ+iUhjx00mXEL2dXoYFCQYFSUZPD7+rjQAlem+Si8STonYdkR0Pzl1PTos6PUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFmyAgjkFpBmOqrmwgCEP8omzdvnA8zHZ/4jmZqbcK7IDIGWFAI4pchUIS6BI0nQGCQDpVWp2pLEGLqxqshCsYYAKeBQerev2cVcvs+br0QpxKCQEKg3QjZwQICYoBCwGBDIMKhWwGjoqBjQ0BDJCEdAEOAQ2KmiWanJ2Se6ENrZoCaSionmAPfyiVKQwQELSTNby9qim8vyMQPRAhADs=",
	Ya = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAKCAYAAACXDi8zAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1LwAA6l8AADqXAAAXcHwVugEAAAC7SURBVAiZXY6/CkFhHEDP73Njsyopi5uM8gKuUh5AzMoTmDyEzWTyEBZlcIVRZil1b/7dCV8WRT+DGJzxDKcjAOV8VkupNACr6Ii/CcQB6NaKfKmSwt8EOACTdcQ/oqr6UIgLgAIC+kKajYYOszmm2yQAnmtphTvk9XzquN7Dcy0A022SQr+NMWJ+wlYyeK7FiMEEpwuj8x7PtawG9pd0FnOf6H6mMwf45G7L2WfNmJiGh4uGh6tKLKEAb/xiSgScWw07AAAAAElFTkSuQmCC";
const Ll = () => {
	const [A, t] = i.exports.useState(!1), {
		gameService: a,
		selectedItem: n
	} = i.exports.useContext(G), [{
		context: {
			state: s
		}
	}] = M(a), r = s.inventory.Sauerkraut;
	return e.createElement(e.Fragment, null, r ? e.createElement(e.Fragment, null, e.createElement("img", {
		src: uA,
		className: "absolute z-10",
		style: {
			width: `${l*5}px`,
			left: `${l*2}px`,
			top: `${l*-3.25}px`
		}
	}), e.createElement("img", {
		src: Ya,
		className: "absolute ",
		style: {
			width: `${l*.3}px`,
			left: `${l*5}px`,
			top: `${l*-1.5}px`
		}
	})) : e.createElement(e.Fragment, null, e.createElement("img", {
		src: Kl,
		className: "absolute z-20 hover:img-highlight cursor-pointer",
		onClick: () => t(!0),
		style: {
			width: `${l*5}px`,
			left: `${l*.2}px`,
			top: `${-l*1.5}px`
		}
	})), e.createElement("div", {
		className: "absolute flex justify-between flex-col",
		id: "cropzone-three",
		onClick: r ? void 0 : () => t(!0),
		style: {
			width: `${l*4}px`,
			height: `${l*2.3}px`,
			left: `${l*3}px`,
			top: `${l*.22}px`
		}
	}, e.createElement("div", {
		className: "flex justify-between items-center"
	}, e.createElement(z, {
		selectedItem: n,
		fieldIndex: 10
	}), e.createElement(z, {
		selectedItem: n,
		fieldIndex: 11
	}), e.createElement(z, {
		selectedItem: n,
		fieldIndex: 12
	})), e.createElement("div", {
		className: "flex justify-between items-center z-10"
	}, e.createElement(z, {
		selectedItem: n,
		fieldIndex: 13
	}), e.createElement(z, {
		selectedItem: n,
		fieldIndex: 14
	}), e.createElement(z, {
		selectedItem: n,
		fieldIndex: 15
	}))), e.createElement(U, {
		centered: !0,
		show: A,
		onHide: () => t(!1)
	}, e.createElement(P, null, e.createElement("div", {
		className: "flex items-start"
	}, e.createElement("img", {
		src: pA,
		className: "w-16 img-highlight mr-2"
	}), e.createElement("div", {
		className: "flex-1"
	}, e.createElement("span", {
		className: "text-shadow block"
	}, "The only thing I like more than farming is Sauerkraut"), e.createElement("img", {
		src: Ya,
		className: "w-8 img-highlight float-right mr-1"
	}))))))
};
var Oa = "data:image/gif;base64,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",
	Pl = "data:image/gif;base64,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";
const Vl = () => {
	const [A, t] = i.exports.useState(!1), {
		gameService: a,
		selectedItem: n
	} = i.exports.useContext(G), [{
		context: {
			state: s
		}
	}] = M(a), r = s.inventory["Roasted Cauliflower"];
	return e.createElement(e.Fragment, null, r ? e.createElement(e.Fragment, null, e.createElement("img", {
		src: Oa,
		className: "absolute z-10 -scale-x-100",
		style: {
			width: `${l*5}px`,
			left: `${l*4}px`,
			top: `${l*-3.25}px`
		}
	}), e.createElement("img", {
		src: YA,
		className: "absolute ",
		style: {
			width: `${l*.8}px`,
			left: `${l*5.3}px`,
			top: `${l*-1.5}px`
		}
	})) : e.createElement(e.Fragment, null, e.createElement("img", {
		src: Pl,
		className: "absolute z-20 hover:img-highlight cursor-pointer -scale-x-100",
		onClick: () => t(!0),
		style: {
			width: `${l*5}px`,
			left: `${l*4.8}px`,
			top: `${l*3}px`
		}
	})), e.createElement("div", {
		className: "absolute flex justify-between flex-col",
		id: "cropzone-four",
		onClick: r ? void 0 : () => t(!0),
		style: {
			width: `${l*4}px`,
			height: `${l*2.3}px`,
			left: `${l*3}px`,
			top: `${l*3}px`
		}
	}, e.createElement("div", {
		className: "flex justify-between items-center"
	}, e.createElement(z, {
		selectedItem: n,
		fieldIndex: 16
	}), e.createElement(z, {
		selectedItem: n,
		fieldIndex: 17
	}), e.createElement(z, {
		selectedItem: n,
		fieldIndex: 18
	})), e.createElement("div", {
		className: "flex justify-between items-center z-10"
	}, e.createElement(z, {
		selectedItem: n,
		fieldIndex: 19
	}), e.createElement(z, {
		selectedItem: n,
		fieldIndex: 20
	}), e.createElement(z, {
		selectedItem: n,
		fieldIndex: 21
	}))), e.createElement(U, {
		centered: !0,
		show: A,
		onHide: () => t(!1)
	}, e.createElement(P, null, e.createElement("div", {
		className: "flex items-start"
	}, e.createElement("img", {
		src: pA,
		className: "w-16 img-highlight mr-2"
	}), e.createElement("div", {
		className: "flex-1"
	}, e.createElement("span", {
		className: "text-shadow block"
	}, "I will keep digging until I find some Cauliflowers to roast!"), e.createElement("img", {
		src: YA,
		className: "w-8 img-highlight float-right mr-1"
	}))))))
};
var Ua = "data:image/gif;base64,R0lGODdhEgAQAMQAAAAAABcUJD6JSGPHTSZcQvZ1ehgUJBgVJf///xk8Pj8oMnQ/OQAAAHU9Ovd2Iv/eH//5TgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJBwAAACwAAAAAEgAQAAAFaSAgjkFpBmNKCsLgsqgqBmzrDnB61vZrAgEcbwgjDEqCQoHIowlKhOTQaXhGUQGCllcVHKwxIJL5DK9qiETC8TDrolMHRGYiKLSKkgzISggWLAs0bgBVBAkLiYlZhIUliwp5jSMEJ1kqIQAh+QQJBwAAACwAAAAAEgAQAAAFaSAgjkFpBmNKCsLgsmh6sq07wCUQ3EJA168AYVASFAq/ZA9HMCp/wp6O0HzCCDFdlOYTGHrZFe0rOEhVOusZvUUkEo4HWkZQUBUoB4QtrN9zbCwJAgssCz5hIl8ECQuOjkKJigENJ5RhIQAh+QQJBwAAACwAAAAAEgAQAAAFaSAgjkFpBmNKCsLgsqgqBmzrDnB61vZrAgEcbwgjDEqCQoHIowlKhCSzFoiiqoQolWV4EmJAZK0rODzBqylap0UkEo6HjK3IKlAOiAxKqPdLc04JAgssCzRrAF0ECQuOjlWJigENJ5RoIQAh+QQJBwAAACwAAAEAEgAPAAAFaCAgjkFpBmNKCsLgsqgqBmzrDnB61vZrAgEcbwgjDEqCQoHIowlKhCSzFoiiqoQolWV4EmJAZK0rODzBqylap0UkEo6HLJwlKLKKkgOiYyWiCywLTmhdBAkBC4qKNF8qBigNJwENkCMhACH5BAkHAAAALAAAAQASAA8AAAVoICCOQWkGY0oKwuCyqCoGbOsOsFzW9luSNJ5QECCgArjCkEcb7ArKJYxALAoI1FrQQKQeTTyu4FCNraRmlVWASCQcDxmghCUosIqSA5IKJqgLLAtBaVwECQELioo0RioGKA0nAQ2QIyEAIfkECQcAAAAsAAABABIADwAABWQgII5BaQZjSgrC4LKoKgZs6w5wetb2awIBHG8IIwxKgkKByKMJSoQksxaIoqqEKJVleBJiQGStKzg8waspWqdFJBKOh2yGVWQVJQdE5UwIFiwLNGsAXQQJC4mJVYSFAQ0nj2ghACH5BAkHAAAALAAAAQASAA8AAAVkICCOQWkGY0oKwuCyqCoGbOsOcHrW9msCARxvCCMMSoJCgcijCUqEJLMWiKKqhCiVZXgSYkBkrSs4PMGrKVqnRSQSjodsVhUsWIuSA6JyJhaAgDRrAF0Ef3kKClWEhQENJ49oIQAh+QQJBwAAACwAAAAAEgAQAAAFZSAgjmRpjkGqBicqCEP8smfwwvEwk+uNyypAQOcrzgiDlKBQMPpsghRh6bwFpqwrYWp9GaIEmlB5+woOUbGrquZxEYmE49GSChavRcoBKUETC4GBNm0AXwSAegoKV4WGAQ0rkGohACH5BAkHAAAALAAAAAASABAAAAVqICCOQWkGY0oKwuCyqCoGbOsOsFzW9luSNJ5QECCgArjCkEcb7ArKJYxALAoI1FrQQKQeTTyu4FCNraRmlVWASCQcD9msRFBgFSUHRM1KCBYsCzRpIlwECQuJiUWEhSWLCniNKQ0nAQ0qIQA7";
const Hl = () => {
		const [A, t] = i.exports.useState(!1), {
			gameService: a
		} = i.exports.useContext(G), [{
			context: {
				state: n
			}
		}] = M(a);
		return e.createElement(e.Fragment, null, e.createElement("div", {
			className: "absolute z-10",
			style: {
				right: `${l*30}px`,
				top: `${l*30}px`,
				width: `${l}px`
			}
		}, n.inventory["Radish Pie"] ? e.createElement(e.Fragment, null, e.createElement("img", {
			src: Ga,
			className: "absolute z-10 animate-float w-3 -top-6 left-4"
		}), e.createElement("img", {
			src: Ua,
			className: "z-10 w-full",
			style: {
				width: `${l*1}px`,
				transform: "scaleX(-1)"
			}
		}), e.createElement("img", {
			src: OA,
			className: "absolute ",
			style: {
				width: `${l*.7}px`,
				left: `-${l*.85}px`,
				bottom: `${l*.33}px`
			}
		})) : e.createElement(e.Fragment, null, " ", e.createElement("img", {
			src: ce,
			className: "absolute z-10 animate-float w-3 -top-8 left-4"
		}), e.createElement("img", {
			src: Ua,
			className: "z-10 w-full hover:img-highlight cursor-pointer",
			onClick: () => t(!0),
			style: {
				width: `${l*1}px`,
				transform: "scaleX(-1)"
			}
		}))), e.createElement(U, {
			centered: !0,
			show: A,
			onHide: () => t(!1)
		}, e.createElement(P, null, e.createElement("div", {
			className: "flex items-start"
		}, e.createElement("img", {
			src: pA,
			className: "w-16 img-highlight mr-2"
		}), e.createElement("div", {
			className: "flex-1"
		}, e.createElement("span", {
			className: "text-shadow block"
		}, "Goblin Farmer"), e.createElement("span", {
			className: "text-shadow block mt-4"
		}, "Do you want to know the secret to growing wheat? Perhaps a radish pie will refresh my memory"), e.createElement("img", {
			src: OA,
			className: "w-8 img-highlight float-right mr-1 mb-1"
		}))))))
	},
	Zl = () => e.createElement(e.Fragment, null, e.createElement("div", {
		style: {
			width: `${l*25}px`,
			height: `${l*12}px`,
			left: `calc(50% - ${l*13}px)`,
			top: `calc(50% - ${l*23}px)`
		},
		className: "absolute"
	}, e.createElement("span", {
		id: I.Crops,
		className: "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
	}), e.createElement(Jl, null), e.createElement(Tl, null), e.createElement(Ll, null), e.createElement(Vl, null)), e.createElement(Hl, null));
var Wl = "data:image/gif;base64,R0lGODlhCgAMAKIAAP2xADQ0NMiVM7y8vP/wPopXBf///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3ZGI5ZGE3OC1hNDE3LTJhNDctODg2MS0xMGYwZjY0MDlhMTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkI2OTlBRjU2RjVEMTFFQzg0MTJEOUZEQzI2MzA1MTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkI2OTlBRjQ2RjVEMTFFQzg0MTJEOUZEQzI2MzA1MTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjY1MDUyMGYwLTIxMDItYWY0Zi1iMzgxLTA2ZDI5NjQ4NjNhMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3ZGI5ZGE3OC1hNDE3LTJhNDctODg2MS0xMGYwZjY0MDlhMTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQJIwAGACwAAAAACgAMAAADJmi63K4lukJqYbTalcM2BQAQHnFBmSmBQqsJZ9G6pzFE+MAMPK8kACH5BAkjAAYALAAAAQAKAAsAAAMmaFqsboXI8qKczgYMASAbQS2W2EBCegljkaojycTGMBS3/di8kgAAIfkECSMABgAsAAAAAAoADAAAAyhoWqxuhcjyopzOBgwBIBtBLZZYCZc4FkJ7CWvrjiRDG8NQ6PmT/4oEACH5BAUjAAYALAAAAQAKAAsAAAMmaFqsboXI8qKczgYMASAbQS2WWAmXOBZCewlr647GwNzDM+y7kgAAOw==",
	jl = "data:image/gif;base64,R0lGODdhUABQAHcAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAUABQAIIAAAAAAABdpStjsS5qvjDL2/wAAAAAAAADsgi63P4wykmrvTjrzbv/YCiOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikMlZoOpuo51NAFZCkzii2ULWOtgUttnvdiqXkFfgJWTvTMjf0IedWafW2HM6U6918OAGDAQSGBISFh4tEiYuOi4eNhI+UkYaTg5WalwRIA6ChoIFHoqKkRqahqEWqo3dLsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DRuQkAIfkECQoAAAAsAAAAAFAAUACCAAAAAAAAXaUrY7Euar4wy9v8AAAAAAAAA7MIutz+MMpJq7046827/2AojmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHKpITgJgqiAyXhCpdSFVTrNArbYIzjq/T655XE3q6YV3vB3YB6w0gPxPBynl9PtdH15fH13gHOCcYR6hk93iXsvghQDlZaVaA+TJ5sSl5eZDp0loxCflqENpSOrDqeYYaJ9ZbS1tre4ubq7vL2+v8DBwsPExcbHyMnKy8zNzs/Q0dLPCQA7",
	zl = "./assets/shark-right.b5992259.gif",
	ql = "./assets/shark-left.fe30309c.gif";
const ZA = (A, t) => Math.floor(Math.random() * (t - A + 1) + A),
	Ja = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
	Xl = [ql, Ja, zl, Ja],
	Ta = () => {
		const A = ZA(0, 73);
		return {
			top: ZA(0, 90),
			left: A
		}
	},
	$l = () => {
		const A = i.exports.useRef(null),
			[t, a] = i.exports.useState(Ta()),
			[n, s] = i.exports.useState(1),
			r = () => {
				a(Ta())
			},
			c = () => {
				const m = n === 3,
					u = n + 1;
				s(m ? 0 : u)
			};
		return i.exports.useEffect(() => {
			c()
		}, [t]), i.exports.useEffect(() => (A.current = setInterval(r, ZA(6e4, 9e4)), () => clearInterval(A.current)), []), e.createElement("div", {
			className: "absolute top-1/2 -translate-y-40 w-full",
			style: {
				height: "360px",
				left: "-200px",
				width: "calc(100% + 180px)"
			}
		}, e.createElement("img", {
			className: "absolute",
			src: Xl[n],
			alt: "shark",
			style: {
				top: `${t.top}%`,
				left: `${t.left}%`
			}
		}))
	};
var _l = "./assets/goblin_swimming.70b3a6c1.gif",
	ec = "data:image/gif;base64,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",
	Ka = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAYAAAA/I0V3AAAAAXNSR0IArs4c6QAAAd1JREFUKJF9kU9Ik3EYxz/v9vZKCHWYbCNywtjLy4T1B81mB3UI2j9Cu2RHJaIEoYOEEfRHZkF48KK7iLLA/lwKooF6qQiGpTKXXrS5mTR5XYxdNOcsfh3WNLfR9/b8eD6/7/N8H8iT5nGJ/9UAhvyG1julu435dYE0j0sEt7tFSqRFz6RbaB6X6Jl0i5RIi+B2t/gX3OfkVLyoJhWA3qcaAKpJxal49xnIxVwt5gxrySgWc9GhkHKjjY43Y+s0E6qfJXLsK/p3sB4FxxeVkx+qWB1K0H52gsV385KUH4LFnCn4eT2h8PrxJo3nTAzdfp+FOp80CPd5G31dIa4+PFgAPb+/Re9wDcn4JgtTOobr3lpx5mIFfV0hHNUylbY0dmuGptN12K0ZKm1pHNUy96595lBZCd9iKQzx+E+cFTUAtHSU4x80EtUVBh4EieoK/kEjLR3lAKwsJAn4wpIM8OrlGwZeNHOrbQKAulY7q8tRqmQ7kZkl+mdi9I95OHJYY2tkR8gBX1gCBMCztzdIbMR24ZG7Szzy12ZvY1DY2PmxFznAhZvHxYlTVi5fucRKMoyEhGxUOCCX8Ot3NtGp8UXmpvU9qBic06fZj8QjKeamdQK+sFQA5cBi739X4Q8zt7ZwTIeEugAAAABJRU5ErkJggg==";
const Ac = () => {
		const [A, t] = i.exports.useState(!1), a = () => {
			t(!0), bl.play()
		};
		return e.createElement(e.Fragment, null, e.createElement("img", {
			src: Ka,
			className: "absolute hover:img-highlight cursor-pointer z-10",
			onClick: () => a(),
			style: {
				width: `${l*.7}px`,
				right: `${l*5.1}px`,
				top: `${l*3.5}px`
			}
		}), e.createElement(U, {
			centered: !0,
			show: A,
			onHide: () => t(!1)
		}, e.createElement(P, null, e.createElement("div", {
			className: "flex items-start"
		}, e.createElement("img", {
			src: Ka,
			className: "w-12 img-highlight mr-2"
		}), e.createElement("div", {
			className: "flex-1"
		}, e.createElement("span", {
			className: "text-shadow block"
		}, "Lilly the Frog"), e.createElement("span", {
			className: "text-shadow block mt-4"
		}, "Ribbbbbit!"))))))
	},
	tc = () => e.createElement("div", {
		style: {
			height: "650px",
			width: "1650px",
			left: "calc(50% - 1100px)",
			top: "calc(50% - 320px)"
		},
		className: "absolute"
	}, e.createElement("div", {
		className: "h-full w-full relative"
	}, e.createElement("span", {
		id: I.Water,
		className: "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
	}), e.createElement("img", {
		src: Wl,
		className: "absolute right-0 w-5 top-8"
	}), e.createElement("img", {
		src: jl,
		className: "absolute right-16 w-10 bottom-36 animate-float"
	}), e.createElement(Ac, null), e.createElement($l, null), e.createElement("img", {
		src: _l,
		className: "absolute ",
		style: {
			width: `${l*5}px`,
			left: `${l*5.5}px`,
			top: `${l*2}px`
		}
	}), e.createElement("img", {
		src: ec,
		className: "absolute ",
		style: {
			width: `${l*5}px`,
			left: `${l*58.5}px`,
			top: `${l*2}px`,
			transform: "scaleX(-1)"
		}
	}))),
	ac = () => e.createElement(P, null, e.createElement("span", {
		className: "text-shadow"
	}, "Beta is only accessible to our OG farmers."), e.createElement("span", {
		className: "text-shadow text-xs block mt-4"
	}, "Stay tuned for updates. We will be going live soon!"));
var WA = "./assets/suspicious_goblin.ea6c0c3a.gif";
const nc = () => {
	var r, c;
	const {
		authService: A
	} = i.exports.useContext(X), [t] = M(A), a = () => {
		A.send("EXPLORE")
	}, n = () => {
		A.send("CREATE_FARM")
	}, s = () => {
		A.send("CONNECT_TO_DISCORD")
	};
	return e.createElement(e.Fragment, null, !!((r = t.context.token) == null ? void 0 : r.userAccess.createFarm) || !!((c = t.context.token) == null ? void 0 : c.discordId) ? e.createElement(k, {
		onClick: n,
		className: "overflow-hidden mb-2"
	}, "Create Farm") : e.createElement("div", {
		className: "flex flex-col items-center"
	}, e.createElement("div", {
		className: "flex items-center mt-4 -mb-4 relative"
	}, e.createElement("img", {
		src: WA,
		className: "w-12"
	}), e.createElement("img", {
		src: HA,
		className: "w-12 relative bottom-1",
		style: {
			transform: "scaleX(-1)"
		}
	}), e.createElement("img", {
		src: ce,
		className: "absolute z-10 animate-float",
		style: {
			right: "18px",
			width: "13px",
			top: "-27px"
		}
	})), e.createElement("span", {
		className: "text-sm text-shadow p-2 text-center mb-4"
	}, "Beta is currently open for testers on Discord."), e.createElement("span", {
		className: "text-sm text-shadow p-2 text-center mb-2"
	}, "Only 100,000 spots available!"), e.createElement(k, {
		onClick: s,
		className: "overflow-hidden mb-2"
	}, "Connect to Discord")), e.createElement(k, {
		onClick: a,
		className: "overflow-hidden"
	}, "Explore a friend's farm"))
};
var La = "./assets/goblin_donation.109b941f.gif";
const sc = () => e.createElement("div", {
	className: "flex flex-col items-center p-1"
}, e.createElement("p", {
	className: "mb-1 text-center"
}, "Sending your donation and creating your farm."), e.createElement("img", {
	src: La,
	alt: "donation loading",
	className: "w-full"
}), e.createElement("p", {
	className: "mb-1 text-center underline"
}, "Do not refresh your browser!"));
var jA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAYAAACQN/8FAAAAsElEQVQokWOUEFFleP76FgMMSIqq/YcyGZHFWRiQAEjRiu3bwQIRnp4gDYySomoQBf///wdjCRHV/wdO3/kPAyA2SAxkIwhjVYRNMU5F6IqZGIgEYM/MmreGYdY8Boal08pRdEVndcLZRJsIDkeQ50EEcriBADxoGBgYYSYygoiDZ+7CFSGxwXKMoOCB6vzvFJqMYuK+1XPhCsEmoluJDkDyYBOR3AOLZxRrn7++xQAA7YOFoCZcwmAAAAAASUVORK5CYII=",
	zA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAYAAACQN/8FAAAAq0lEQVQokWP8//8/g6SoGsPz17dA9H8GJPD89S1GkBwYgBRKiKiC8P8Dp+/8hwEQGyQGkgdhBhgDKogCYApBBjExEAFAzgIrRHcbMoDLobsNHcDcitVt2NwKtjo6qxOnQ2FycM+ABA6euQtXAGIjG8AI8jooOJ1Ck8ECaUkhYHrWvDVget/queCAhylEUQwDIEUgw1CsBglAJeAmwRQhW40MYGEKV/T89S0GAFxmqm/zLZOHAAAAAElFTkSuQmCC",
	rc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMCAYAAAC0qUeeAAAAo0lEQVQokWP8//8/AzqQFFWDCTLCpJ6/vsXAhE0hSGLF9u0gLopJTDAFMAyTsDdRxtQgIaL6/8DpO/9xAZAcSI2EiCpEMSEA04DhZnwArPjgmbs4lYDkZs1bA2azgAgQZ9Y8hIKl08oxFMIVYzMNZggI7Fs9FxTOjIxgX6KFp1NoMpwNUgiLHJjJ8JhC1oisEMwARbekqBpcJSj2sEU3AwMDAwAByYTWAmIOFwAAAABJRU5ErkJggg==",
	fe = "./assets/human_death.4768086b.gif";
const Pa = () => {
		const {
			authService: A
		} = i.exports.useContext(X), t = () => {
			fA(J.myAccount), A.send("REFRESH")
		};
		return e.createElement("div", {
			className: "flex flex-col text-center text-shadow items-center p-1"
		}, e.createElement("div", {
			className: "flex mb-3 items-center ml-8"
		}, e.createElement("img", {
			src: fe,
			alt: "Warning",
			className: "w-full"
		})), e.createElement("p", {
			className: "text-center mb-3"
		}, "Beta testers only!"), e.createElement("p", {
			className: "text-center mb-2 text-xs"
		}, "You don't have access to the game yet."), e.createElement("p", {
			className: "text-center mb-4 text-xs"
		}, "Make sure you have joined the", " ", e.createElement("a", {
			className: "underline hover:text-white",
			href: "https://discord.gg/sunflowerland",
			target: "_blank",
			rel: "noreferrer"
		}, "Sunflower Land Discord server,"), ' go to the #verify channel and have the "farmer" role.'), e.createElement(k, {
			onClick: t,
			className: "overflow-hidden mb-2"
		}, e.createElement("span", null, "Try again")))
	},
	Je = A => Math.round(A * 10) / 10;
var EA;
(function(A) {
	A.TheWaterProject = "0xBCf9bf2F0544252761BCA9c76Fe2aA18733C48db", A.PCF = "0x8c6A1870D922279dB6F91CB6798592c7A7133BBD"
})(EA || (EA = {}));
const qA = fn([{
		name: "The Water Project",
		info: "You can provide clean, safe and reliable water today.",
		url: "https://thewaterproject.org/donate-ethereum",
		address: EA.TheWaterProject
	}, {
		name: "Purple Community Fund",
		info: "To help poverty stricken families and communities transform their own lives with our skills training, education, health and nutrition programmes.",
		url: "https://www.p-c-f.org/",
		address: EA.PCF
	}]),
	oc = ({
		url: A,
		name: t,
		info: a,
		address: n,
		onDonateAndPlayClick: s
	}) => {
		const r = c => {
			window.open(c, "_blank")
		};
		return e.createElement(Ae, {
			className: "flex-col inline-flex items-center justify-center w-full"
		}, e.createElement("div", {
			className: "flex flex-col items-center mb-3 whitespace-normal"
		}, e.createElement("h5", {
			className: "text-sm text-shadow underline mb-3 text-center"
		}, t), e.createElement("p", {
			className: "text-xs text-center text-shadow mb-2 px-5 two-line-ellipsis"
		}, a)), e.createElement("div", {
			className: "flex w-full z-10"
		}, e.createElement(k, {
			className: "w-full mr-1",
			onClick: c => {
				r(A), c.preventDefault()
			}
		}, e.createElement("span", {
			className: "text-xs mr-1"
		}, "About"), e.createElement("img", {
			src: ce,
			className: "scale-110",
			alt: "question-mark"
		})), e.createElement(k, {
			className: "w-full ml-1",
			onClick: () => s(n)
		}, e.createElement("span", {
			className: "text-xs whitespace-nowrap"
		}, "Donate & Play"))))
	},
	ic = () => {
		var x;
		const [A, t] = i.exports.useState(1), [a, n] = i.exports.useState(), [s, r] = i.exports.useState(0), {
			authService: c
		} = i.exports.useContext(X), [m, u] = M(c), [h, w] = i.exports.useState(!1), E = async S => {
			await new Promise(b => setTimeout(b, 1e3)), c.send("CREATE_FARM", {
				charityAddress: a,
				donation: A,
				captcha: S
			})
		}, B = S => {
			t(Je(Number(S.target.value)))
		}, Q = () => {
			t(S => Je(S + .1))
		}, p = () => {
			t(A === 1 ? 1 : S => Je(S - .1))
		}, C = S => {
			n(S), w(!0)
		}, f = S => {
			if(S < 0 && r(0), S > qA.length - 1) {
				r(qA.length - 1);
				return
			}
			r(S)
		};
		return((x = m.context.token) == null ? void 0 : x.userAccess.createFarm) ? h ? e.createElement(Fe, {
			sitekey: "6Lfqm6MeAAAAAFS5a0vwAfTGUwnlNoHziyIlOl1s",
			onChange: E,
			onExpired: () => w(!1),
			className: "w-full m-4 flex items-center justify-center"
		}) : e.createElement("form", {
			className: "mb-4 relative"
		}, e.createElement("div", {
			className: "flex flex-col text-shadow items-center"
		}, e.createElement("h2", {
			className: "text-base mb-2"
		}, "Donate to play."), e.createElement("p", {
			className: "text-xs mb-3 text-center"
		}, "To start a farm, we require a minimum donation of 1 Matic to support the operating costs of Sunflower Land."), e.createElement("p", {
			className: "text-xs mb-3 text-center"
		}, "10% of this donation will go to a charity of your choice.")), e.createElement("div", {
			className: "flex flex-col items-center mb-3"
		}, e.createElement("div", {
			className: "relative"
		}, e.createElement("input", {
			type: "number",
			className: "text-shadow shadow-inner shadow-black bg-brown-200 w-24 p-1 text-center",
			step: "0.1",
			min: 1,
			value: A,
			required: !0,
			onChange: B,
			onBlur: () => {
				A < 1 && t(1)
			}
		}), e.createElement("img", {
			src: jA,
			alt: "increment donation value",
			className: "cursor-pointer absolute -right-4 top-0",
			onClick: Q
		}), e.createElement("img", {
			src: zA,
			alt: "decrement donation value",
			className: "cursor-pointer absolute -right-4 bottom-0",
			onClick: p
		})), e.createElement("span", {
			className: "text-[10px] text-shadow mt-2"
		}, "Minumum of 1 MATIC")), e.createElement("p", {
			className: "text-center mb-3 mt-10"
		}, "Select a charity"), e.createElement(Sn, {
			activeIndex: s,
			onSelect: f,
			prevIcon: e.createElement("img", {
				src: gA,
				alt: "left-arrow",
				className: "h-5 cursor-pointer absolute left-2 sm:left-4",
				onClick: () => f(s - 1)
			}),
			nextIcon: e.createElement("img", {
				src: rc,
				alt: "right-arrow",
				className: "h-5 cursor-pointer absolute right-2 sm:right-4",
				onClick: () => f(s + 1)
			})
		}, qA.map(S => e.createElement(xn, {
			key: S.url
		}, e.createElement(oc, d(g({}, S), {
			onDonateAndPlayClick: C
		})))))) : e.createElement(Pa, null)
	},
	_e = ({
		text: A
	}) => e.createElement("span", {
		className: "text-shadow loading"
	}, A || "Loading");
var lc = "./assets/logo.106c75f0.png",
	cc = "./assets/clouds.d7fc0e74.png",
	mc = "data:image/png;base64,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";
const gc = () => e.createElement("div", {
	className: "bg-blue-600 w-full h-full flex relative items-center justify-center"
}, e.createElement("div", {
	className: "relative mb-96 animate-float z-10"
}, e.createElement("img", {
	src: vA,
	className: "absolute w-8 -rotate-[20deg] z-10 -top-5 sm:-left-3 sm:-rotate-[30deg] sm:w-12 sm:-top-7"
}), e.createElement("img", {
	src: lc
})), e.createElement("div", {
	className: "bg-repeat w-full h-full absolute inset-0",
	style: {
		backgroundImage: `url(${cc})`
	}
}), e.createElement("img", {
	src: mc,
	className: "absolute w-full bottom-0"
}));
var XA = "./assets/minting.8df1c1f8.gif",
	$A = "./assets/rich_begger.5ae0fd9b.gif",
	Va = "./assets/syncing.2364d1a3.gif";
const dc = [La, fe, fe, XA, $A, Va, dt];

function uc(A) {
	return new Promise((t, a) => {
		const n = new Image;
		n.onload = function() {
			t(n)
		}, n.onerror = n.onabort = function() {
			a(A)
		}, n.src = A
	})
}

function pc() {
	const [A, t] = i.exports.useState(!1);
	return i.exports.useEffect(() => {
		let a = !1;
		async function n() {
			if(a) return;
			const s = [];
			for(const r of dc) s.push(uc(r));
			await Promise.all(s), !a && t(!0)
		}
		return n(), () => {
			a = !0
		}
	}, []), {
		imagesPreloaded: A
	}
}
const Ec = () => {
		const {
			authService: A
		} = i.exports.useContext(X), [t, a] = M(A), {
			imagesPreloaded: n
		} = pc(), s = () => {
			a("START_GAME")
		}, r = async() => {
			a("EXPLORE")
		}, c = t.context.farmId;
		return e.createElement(e.Fragment, null, n ? e.createElement(e.Fragment, null, e.createElement("p", {
			className: "text-shadow text-small mb-2 px-1"
		}, "Farm ID: ", c), e.createElement(k, {
			onClick: s,
			className: "overflow-hidden mb-2"
		}, "Lets farm!"), e.createElement(k, {
			onClick: r,
			className: "overflow-hidden"
		}, "Explore a friend's farm")) : e.createElement(_e, null))
	},
	wc = () => {
		const {
			authService: A
		} = i.exports.useContext(X), t = a => {
			a.preventDefault();
			const n = parseInt(a.target.farmId.value);
			isNaN(n) || n <= 0 || A.send("VISIT", {
				farmId: n
			})
		};
		return e.createElement(e.Fragment, null, e.createElement("form", {
			onSubmit: t
		}, e.createElement("span", {
			className: "text-shadow text-small mb-2 px-1"
		}, "Enter Farm ID:", " "), e.createElement("input", {
			type: "number",
			name: "farmId",
			className: "text-shadow shadow-inner shadow-black bg-brown-200 w-24 p-2 m-2 text-center"
		}), e.createElement("div", {
			className: "flex"
		}, e.createElement(k, {
			className: "overflow-hidden mr-1",
			type: "button",
			onClick: () => A.send("LOAD_FARM")
		}, "Back"), e.createElement(k, {
			className: "overflow-hidden ml-1",
			type: "submit"
		}, "Visit"))))
	};
var Te = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAJCAYAAAAVb42gAAAANElEQVQImWNU03b5z4AEmEDEjeYPDDev7AYLgwVA4P+LJFQBhuOX0QSgALehIEyEFgYGBgAYUBH4km+gIQAAAABJRU5ErkJggg==";
const hc = () => {
	const A = () => {
		window.open("https://docs.sunflower-land.com/guides/getting-setup#metamask-setup", "_blank")
	};
	return e.createElement("div", {
		className: "flex flex-col text-center text-shadow items-center p-1"
	}, e.createElement("div", {
		className: "flex mb-3 items-center"
	}, e.createElement("img", {
		src: Te,
		alt: "Warning",
		className: "w-3 mr-3"
	})), e.createElement("p", {
		className: "text-center mb-3"
	}, "Web3 Not Found"), e.createElement("p", {
		className: "text-center mb-4 text-xs"
	}, "Check out this guide to help you get started."), e.createElement(k, {
		onClick: A,
		className: "overflow-hidden mb-2"
	}, e.createElement("span", null, "Go to setup guide")))
};
var Cc = "data:image/png;base64,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";
const Ic = () => {
		const [A, t] = i.exports.useState(!1), [a] = Rs(), n = () => {
			window.open("https://docs.sunflower-land.com/guides/getting-setup#polygon-setup", "_blank")
		};
		i.exports.useEffect(() => {
			(async() => {
				const c = await J.checkDefaultNetwork();
				t(c)
			})()
		}, []);
		const s = async() => {
			await J.initialiseNetwork()
		};
		return e.createElement("div", {
			className: "flex flex-col text-center text-shadow items-center p-1"
		}, e.createElement("div", {
			className: "flex mb-3 items-center"
		}, e.createElement("img", {
			src: Te,
			alt: "Warning",
			className: "w-3 mr-3"
		})), e.createElement("p", {
			className: "text-center mb-3"
		}, "You're not connected to Polygon"), e.createElement("p", {
			className: "text-center mb-4 text-xs"
		}, "Check out this guide to help you get connected."), e.createElement(k, {
			onClick: n,
			className: "overflow-hidden mb-2"
		}, e.createElement("span", null, "Go to guide")), (!A || !a) && e.createElement(k, {
			onClick: s,
			className: "overflow-hidden mb-2"
		}, e.createElement("img", {
			src: Cc,
			alt: "Metamask Icon",
			className: "mr-2"
		}), e.createElement("span", null, "Add or Switch Network")))
	},
	yc = () => {
		const {
			gameService: A,
			selectedItem: t
		} = i.exports.useContext(G), [{
			context: {
				state: a
			}
		}] = M(A);
		return e.createElement(e.Fragment, null, a.inventory["Chicken Coop"] && e.createElement("img", {
			src: GA,
			style: {
				width: `${l*2}px`,
				right: `${l*1.1}px`,
				top: `${l*0}px`
			},
			id: I["Chicken Coop"],
			className: "absolute"
		}))
	};
var Bc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAABKUlEQVQ4jWP8//8/AzYQndWJXYKBgXHptHJMQXSDYAZgUwyVh+tFUQcyCIajMjv+Hzh95z8hAFIDUhuV2QHXC3YR1Jb/aUkhDPYmymALDp65i9VFyPKz5q2Be5UJKk+UIchyILUgPSC9IIfADCLKEGyGwQDz7Vec/2EBRowhMPDw2XsGBSkhhmBvG4Z1W482MBGnjTAYxgYx//zO0PCTTZjBykgNHHigQCQGwGKsZ85Whi0rlyFchC1KcQFsSQVkEOPsCRMYTl+4QZRhyIaA9ID0gsxgQVYEkoApxmcYzBBkAM5r6jquIKH/qQUFcKmSFG+shoDCBAZgrrl5ZTeKQRiG4QMwQ0AE3CAQQDYMROAyEGoAiiFgDnLBhmQY3EAsAGwAsiEMDAwMAPoBy+BoU5uKAAAAAElFTkSuQmCC";
const Re = ({
		text: A,
		icon: t,
		onClick: a,
		className: n
	}) => e.createElement("div", {
		onClick: a,
		className: Y("cursor-pointer", n),
		"data-html2canvas-ignore": "false"
	}, e.createElement("div", {
		className: "absolute w-10 h-10 -left-2 -top-1 flex items-center justify-center"
	}, e.createElement("img", {
		src: Bc,
		className: "w-full absolute inset-0"
	}), e.createElement("img", {
		src: t,
		className: "w-2/3 z-10"
	})), e.createElement(he, {
		className: "text-white text-shadow text-xs w-fit"
	}, e.createElement("span", {
		className: "pl-7"
	}, A))),
	Ke = i.exports.createContext({
		removeToast: console.log,
		setToast: console.log,
		toastList: []
	}),
	Qc = 5,
	fc = ({
		children: A
	}) => {
		const [t, a] = i.exports.useState([]), n = r => {
			t.length > 4 && a(t.slice(0, Qc));
			const c = Date.now();
			window.setTimeout(() => {
				s(c)
			}, 3e3);
			const m = g({
				id: c
			}, r);
			a(u => [m, ...u])
		}, s = r => {
			a(c => [...c.filter(({
				id: m
			}) => m !== r)])
		};
		return e.createElement(Ke.Provider, {
			value: {
				removeToast: s,
				setToast: n,
				toastList: t
			}
		}, A)
	},
	Ha = ({
		item: A
	}) => {
		const {
			gameService: t
		} = i.exports.useContext(G), [{
			context: {
				state: a
			}
		}] = M(t), n = a.stock[A.name] || new o(0);
		return e.createElement("span", {
			className: "w-32 -mt-4 sm:mr-auto bg-blue-600 text-shadow border text-xxs p-1 rounded-md"
		}, `${n} in stock`)
	},
	Za = ({
		items: A,
		onClose: t,
		isBulk: a = !1
	}) => {
		const [n, s] = i.exports.useState(Object.values(A)[0]), {
			setToast: r
		} = i.exports.useContext(Ke), {
			gameService: c,
			shortcutItem: m
		} = i.exports.useContext(G), [u, h] = i.exports.useState(!1), [{
			context: {
				state: w
			}
		}] = M(c), E = w.inventory, B = (N = 1) => n.ingredients.some(V => V.amount.mul(N).greaterThan(E[V.item] || 0)), Q = (N = 1) => w.balance.lessThan(n.price.mul(N)), p = (N = 1) => {
			c.send("item.crafted", {
				item: n.name,
				amount: N
			}), r({
				content: "SFL -$" + n.price.mul(N)
			}), n.ingredients.map((V, O) => {
				r({
					content: V.item + " -" + V.amount.mul(N)
				})
			}), m(n.name)
		}, C = async N => {
			await new Promise(V => setTimeout(V, 1e3)), c.send("SYNC", {
				captcha: N
			}), t()
		}, f = () => {
			h(!0)
		};
		if(u) return e.createElement(Fe, {
			sitekey: "6Lfqm6MeAAAAAFS5a0vwAfTGUwnlNoHziyIlOl1s",
			onChange: C,
			onExpired: () => h(!1),
			className: "w-full m-4 flex items-center justify-center"
		});
		const x = n.supply === 0,
			S = () => x ? null : n.disabled ? e.createElement("span", {
				className: "text-xs mt-1 text-shadow"
			}, "Locked") : (b == null ? void 0 : b.equals(0)) ? e.createElement("div", null, e.createElement("p", {
				className: "text-xxs no-wrap text-center my-1 underline"
			}, "Sold out"), e.createElement("p", {
				className: "text-xxs text-center"
			}, "Sync your farm to the Blockchain to restock"), e.createElement(k, {
				className: "text-xs mt-1",
				onClick: f
			}, "Sync")) : e.createElement(e.Fragment, null, e.createElement(k, {
				disabled: Q() || B() || (b == null ? void 0 : b.lessThan(1)),
				className: "text-xs mt-1",
				onClick: () => p()
			}, "Craft ", a && "1"), a && e.createElement(k, {
				disabled: Q(10) || B(10) || (b == null ? void 0 : b.lessThan(10)),
				className: "text-xs mt-1 whitespace-nowrap",
				onClick: () => p(10)
			}, "Craft 10")),
			b = w.stock[n.name] || new o(0);
		return e.createElement("div", {
			className: "flex"
		}, e.createElement("div", {
			className: "w-3/5 flex flex-wrap h-fit"
		}, Object.values(A).map(N => e.createElement(Ee, {
			isSelected: n.name === N.name,
			key: N.name,
			onClick: () => s(N),
			image: Z[N.name].image,
			count: E[N.name]
		}))), e.createElement(Ae, {
			className: "flex-1 w-1/3"
		}, e.createElement("div", {
			className: "flex flex-col justify-center items-center p-2 relative"
		}, e.createElement(Ha, {
			item: n
		}), e.createElement("span", {
			className: "text-shadow text-center"
		}, n.name), e.createElement("img", {
			src: Z[n.name].image,
			className: "h-16 img-highlight mt-1",
			alt: n.name
		}), e.createElement("span", {
			className: "text-shadow text-center mt-2 sm:text-sm"
		}, n.description), e.createElement("div", {
			className: "border-t border-white w-full mt-2 pt-1"
		}, n.ingredients.map((N, V) => {
			const O = Z[N.item],
				T = new o(E[N.item] || 0).lessThan(N.amount);
			return e.createElement("div", {
				className: "flex justify-center items-end",
				key: V
			}, e.createElement("img", {
				src: O.image,
				className: "h-5 me-2"
			}), e.createElement("span", {
				className: Y("text-xs text-shadow text-center mt-2 ", {
					"text-red-500": T
				})
			}, N.amount.toNumber()))
		}), e.createElement("div", {
			className: "flex justify-center items-end"
		}, e.createElement("img", {
			src: le,
			className: "h-5 mr-1"
		}), e.createElement("span", {
			className: Y("text-xs text-shadow text-center mt-2 ", {
				"text-red-500": Q()
			})
		}, `$${n.price.toNumber()}`))), S())))
	},
	_A = 360,
	Sc = ({
		items: A,
		selected: t,
		inventory: a,
		onClick: n
	}) => {
		const {
			ref: s,
			showScrollbar: r
		} = ya(_A), c = Object.values(A);
		return e.createElement("div", {
			ref: s,
			style: {
				maxHeight: _A,
				minHeight: _A * 2 / 3
			},
			className: Y("overflow-y-auto w-3/5 pt-1 mr-2", {
				scrollable: r
			})
		}, e.createElement("div", {
			className: "flex flex-wrap h-fit"
		}, c.map(m => e.createElement(Ee, {
			isSelected: t === m.name,
			key: m.name,
			onClick: () => n(m),
			image: Z[m.name].image,
			count: a[m.name]
		}))))
	},
	wA = ({
		onClose: A,
		items: t,
		hasAccess: a,
		canCraft: n = !0
	}) => {
		var O;
		const [s, r] = i.exports.useState(Object.values(t)[0]), {
			gameService: c
		} = i.exports.useContext(G), [{
			context: {
				state: m
			}
		}] = M(c), [u, h] = i.exports.useState(!0), [w, E] = i.exports.useState(), [B, Q] = i.exports.useState(!1);
		i.exports.useEffect(() => {
			(async() => {
				const H = await J.getInventory().totalSupply();
				E(H), h(!1)
			})()
		}, []);
		const p = m.inventory,
			C = (T = 1) => s.ingredients.some(H => H.amount.mul(T).greaterThan(p[H.item] || 0)),
			f = (T = 1) => m.balance.lessThan(s.price.mul(T)),
			x = () => {
				Q(!0)
			},
			S = async T => {
				await new Promise(H => setTimeout(H, 1e3)), c.send("MINT", {
					item: s.name,
					captcha: T
				}), A()
			};
		if(u) return e.createElement("div", {
			className: "h-60"
		}, e.createElement("span", {
			className: "loading"
		}, "Loading..."));
		let b = 0;
		w && s.supply && (b = s.supply - ((O = w[s.name]) == null ? void 0 : O.toNumber()));
		const N = b <= 0,
			V = () => {
				if(N) return null;
				if(!a) return e.createElement("span", {
					className: "text-sm text-center"
				}, "Available April 15th");
				if(m.inventory[s.name]) return e.createElement("span", {
					className: "text-xs mt-1 text-center"
				}, "Already minted");
				if(s.requires && !m.inventory[s.requires]) return e.createElement("div", {
					className: "flex items-center"
				}, e.createElement("img", {
					src: Z[s.requires].image,
					className: "w-6 h-6 mr-1"
				}), e.createElement("span", {
					className: "text-xs text-shadow text-center mt-2"
				}, `${s.requires}s only`));
				if(!!n) return e.createElement(e.Fragment, null, e.createElement(k, {
					disabled: f() || C(),
					className: "text-xs mt-1",
					onClick: () => x()
				}, "Craft"))
			};
		return B ? e.createElement(Fe, {
			sitekey: "6Lfqm6MeAAAAAFS5a0vwAfTGUwnlNoHziyIlOl1s",
			onChange: S,
			onExpired: () => Q(!1),
			className: "w-full m-4 flex items-center justify-center"
		}) : e.createElement("div", {
			className: "flex"
		}, e.createElement(Sc, {
			items: t,
			selected: s.name,
			inventory: p,
			onClick: r
		}), e.createElement(Ae, {
			className: "flex-1 min-w-[42%] flex flex-col justify-between items-center"
		}, e.createElement("div", {
			className: "flex flex-col justify-center items-center p-2 relative w-full"
		}, N && e.createElement("span", {
			className: "bg-blue-600 text-shadow border text-xxs absolute left-0 -top-4 p-1 rounded-md"
		}, "Sold out"), !!s.supply && b > 0 && e.createElement("span", {
			className: "bg-blue-600 text-shadow border  text-xxs absolute left-0 -top-4 p-1 rounded-md"
		}, `${b} left`), e.createElement("span", {
			className: "text-shadow text-center"
		}, s.name), e.createElement("img", {
			src: Z[s.name].image,
			className: "h-16 img-highlight mt-1",
			alt: s.name
		}), e.createElement("span", {
			className: "text-shadow text-center mt-2 sm:text-sm"
		}, s.description), n && e.createElement("div", {
			className: "border-t border-white w-full mt-2 pt-1"
		}, s.ingredients.map((T, H) => {
			const ne = Z[T.item],
				se = new o(p[T.item] || 0).lessThan(T.amount);
			return e.createElement("div", {
				className: "flex justify-center items-end",
				key: H
			}, e.createElement("img", {
				src: ne.image,
				className: "h-5 me-2"
			}), e.createElement("span", {
				className: Y("text-xs text-shadow text-center mt-2 ", {
					"text-red-500": se
				})
			}, T.amount.toNumber()))
		}), e.createElement("div", {
			className: "flex justify-center items-end"
		}, e.createElement("img", {
			src: le,
			className: "h-5 mr-1"
		}), e.createElement("span", {
			className: Y("text-xs text-shadow text-center mt-2 ", {
				"text-red-500": f()
			})
		}, `${s.price.toNumber()}`))), V()), e.createElement("a", {
			href: `https://opensea.io/assets/matic/0x22d5f9b75c524fec1d6619787e582644cd4d7422/${ve[s.name]}`,
			className: "underline text-xs hover:text-blue-500 mt-1",
			target: "_blank",
			rel: "noopener noreferrer"
		}, "Open Sea")))
	},
	xc = ({
		onClose: A
	}) => {
		var r;
		const [t, a] = i.exports.useState("animals"), {
			authService: n
		} = i.exports.useContext(X), [s] = M(n);
		return e.createElement(P, {
			className: "pt-5 relative"
		}, e.createElement("div", {
			className: "flex justify-between absolute top-1.5 left-0.5 right-0 items-center"
		}, e.createElement("div", {
			className: "flex"
		}, e.createElement(oe, {
			isActive: t === "animals",
			onClick: () => a("animals")
		}, e.createElement("img", {
			src: JA,
			className: "h-5 mr-2"
		}), e.createElement("span", {
			className: "text-sm text-shadow"
		}, "Animals")), e.createElement(oe, {
			isActive: t === "rare",
			onClick: () => a("rare")
		}, e.createElement("img", {
			src: GA,
			className: "h-5 mr-2"
		}), e.createElement("span", {
			className: "text-sm text-shadow"
		}, "Rare"))), e.createElement("img", {
			src: Ie,
			className: "h-6 cursor-pointer mr-2 mb-1",
			onClick: A
		})), e.createElement("div", {
			style: {
				minHeight: "200px"
			}
		}, t === "animals" && e.createElement(Za, {
			items: wt,
			onClose: A
		}), t === "rare" && e.createElement(wA, {
			items: De,
			onClose: A,
			hasAccess: !!((r = s.context.token) == null ? void 0 : r.userAccess.mintCollectible)
		})))
	},
	bc = () => {
		const {
			gameService: A
		} = i.exports.useContext(G), [t] = M(A), [a, n] = e.useState(!1), s = !t.matches("readonly"), r = () => {
			n(!0), Fl.play()
		};
		return e.createElement("div", {
			className: "absolute",
			style: {
				width: `${l*3}px`,
				left: `${-l*1}px`,
				top: `${-l*2}px`
			}
		}, e.createElement("div", {
			className: Y({
				"cursor-pointer": s,
				"hover:img-highlight": s
			})
		}, s && e.createElement(Re, {
			className: "absolute top-5 left-4",
			text: "Barn",
			icon: JA,
			onClick: r
		})), e.createElement(U, {
			centered: !0,
			show: a,
			onHide: () => n(!1)
		}, e.createElement(xc, {
			onClose: () => n(!1)
		})))
	},
	kc = () => e.createElement("div", {
		style: {
			height: `${l*6}px`,
			width: `${l*20}px`,
			left: `calc(50% -  ${l*8}px)`,
			top: `calc(50% -  ${l*32}px)`
		},
		className: "absolute"
	}, e.createElement("div", {
		className: "h-full w-full relative"
	}, e.createElement("span", {
		id: I.Animals,
		className: "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
	}), e.createElement(bc, null), e.createElement(yc, null)));

function Nc(A, t) {
	const a = i.exports.useRef(A);
	i.exports.useLayoutEffect(() => {
		a.current = A
	}, [A]), i.exports.useEffect(() => {
		if(!t && t !== 0) return;
		const n = setInterval(() => a.current(), t);
		return() => clearInterval(n)
	}, [t])
}
const Mc = () => {
	const {
		toastList: A,
		removeToast: t
	} = i.exports.useContext(Ke), [a, n] = i.exports.useState(!1);
	return i.exports.useEffect(() => {
		A.length >= 1 ? n(!0) : n(!1)
	}, [A]), e.createElement("div", null, a && e.createElement("div", {
		className: "text-shadow p-0.5 text-white shadow-lg flex flex-col items-end mr-2 sm:block fixed top-20 left-2 z-[99999]"
	}, e.createElement(P, null, A.map(({
		content: s,
		id: r
	}) => e.createElement("div", {
		className: "relative",
		key: r
	}, s)))))
};
var Rc = "data:image/png;base64,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";
const Fc = () => {
		const {
			gameService: A
		} = i.exports.useContext(G), [{
			context: {
				state: t
			}
		}] = M(A), a = Object.values(R).filter(n => n.name in t.inventory);
		return e.createElement(e.Fragment, null, e.createElement("div", {
			style: {
				width: `${l*3}px`,
				right: `${l*43.8}px`,
				top: `${l*35.5}px`
			},
			className: "flex absolute justify-center"
		}, a.map((n, s) => e.createElement("img", {
			key: s,
			style: {
				width: `${l*1.2}px`
			},
			id: I.Flags,
			src: Z[n.name].image,
			alt: n.name
		}))))
	},
	vc = ({
		inventory: A
	}) => A.Kuebiko ? e.createElement("img", {
		style: {
			width: `${l*2}px`
		},
		src: da,
		alt: "Scarecrow"
	}) : A.Scarecrow ? e.createElement("img", {
		style: {
			width: `${l*1.3}px`
		},
		src: ta,
		alt: "Scarecrow"
	}) : A.Nancy ? e.createElement("img", {
		style: {
			width: `${l*1.2}px`
		},
		src: ga,
		alt: "Scarecrow"
	}) : null,
	Dc = () => {
		const {
			gameService: A,
			selectedItem: t
		} = i.exports.useContext(G), [{
			context: {
				state: a
			}
		}] = M(A);
		return e.createElement(e.Fragment, null, e.createElement(Fc, null), a.inventory["Sunflower Rock"] && e.createElement("img", {
			style: {
				width: `${l*4}px`,
				right: `${l*11.5}px`,
				top: `${l*22}px`
			},
			id: I["Sunflower Rock"],
			className: "absolute",
			src: na,
			alt: "Sunflower rock"
		}), a.inventory["Christmas Tree"] && e.createElement("img", {
			style: {
				width: `${l*2}px`,
				right: `${l*16}px`,
				top: `${l*1}px`
			},
			id: I["Christmas Tree"],
			className: "absolute",
			src: $t,
			alt: "Christmas Tree"
		}), a.inventory["Sunflower Statue"] && e.createElement("img", {
			style: {
				width: `${l*2}px`,
				left: `${l*45.5}px`,
				top: `${l*32}px`
			},
			id: I["Sunflower Statue"],
			className: "absolute",
			src: aa,
			alt: "Sunflower Statue"
		}), a.inventory["Potato Statue"] && e.createElement("img", {
			style: {
				width: `${l*1.5}px`,
				left: `${l*52}px`,
				top: `${l*39}px`
			},
			id: I["Potato Statue"],
			className: "absolute",
			src: Aa,
			alt: "Potato Statue"
		}), a.inventory["Sunflower Tombstone"] && e.createElement("img", {
			style: {
				width: `${l*1}px`,
				left: `${l*30}px`,
				top: `${l*36.8}px`
			},
			id: I["Sunflower Tombstone"],
			className: "absolute",
			src: sa,
			alt: "Sunflower tombstone"
		}), a.inventory["Farm Cat"] && e.createElement("img", {
			style: {
				width: `${l*1}px`,
				right: `${l*39.78}px`,
				top: `${l*28.2}px`
			},
			id: I["Farm Cat"],
			className: "absolute z-10",
			src: _t,
			alt: "Farm cat"
		}), a.inventory["Farm Dog"] && e.createElement("img", {
			style: {
				width: `${l*1}px`,
				right: `${l*37.8}px`,
				top: `${l*32}px`
			},
			id: I["Farm Dog"],
			className: "absolute",
			src: ea,
			alt: "Farm dog"
		}), a.inventory.Gnome && e.createElement("img", {
			style: {
				width: `${l*1}px`,
				right: "481px",
				top: "441px"
			},
			id: I.Gnome,
			className: "absolute",
			src: Kt,
			alt: "Gnome"
		}), e.createElement("div", {
			className: "flex justify-center absolute",
			style: {
				width: `${l*3}px`,
				left: `${l*38}px`,
				top: `${l*34}px`
			},
			id: I.Scarecrow
		}, e.createElement(vc, {
			inventory: a.inventory
		})), a.inventory.Fountain && e.createElement("img", {
			style: {
				width: `${l*2}px`,
				left: `${l*36}px`,
				top: `${l*30}px`
			},
			id: I.Fountain,
			className: "absolute",
			src: ia,
			alt: "Fountain"
		}), a.inventory["Goblin Crown"] && e.createElement("img", {
			style: {
				width: `${l*3}px`,
				right: `${l*27.5}px`,
				bottom: `${l*5.5}px`
			},
			id: I["Goblin Crown"],
			className: "absolute",
			src: Rc,
			alt: "GoblinKing"
		}), a.inventory["Woody the Beaver"] && e.createElement("img", {
			style: {
				width: `${l*1.2}px`,
				right: `${l*24}px`,
				top: `${l*49}px`
			},
			id: I.Beaver,
			className: "absolute",
			src: la,
			alt: "Beaver"
		}), a.inventory["Apprentice Beaver"] && e.createElement("img", {
			style: {
				width: `${l*1.2}px`,
				right: `${l*24}px`,
				top: `${l*49}px`
			},
			id: I.Beaver,
			className: "absolute",
			src: ca,
			alt: "Beaver"
		}), a.inventory["Foreman Beaver"] && e.createElement("img", {
			style: {
				width: `${l*.8}px`,
				right: `${l*24}px`,
				top: `${l*49}px`
			},
			id: I.Beaver,
			className: "absolute",
			src: ma,
			alt: "Beaver"
		}))
	},
	Gc = () => e.createElement("div", {
		className: "flex flex-col items-center p-2"
	}, e.createElement("span", {
		className: "text-shadow text-center"
	}, "Minting"), e.createElement("img", {
		src: XA,
		className: "w-1/2 mt-2 mb-3 ml-8"
	}), e.createElement("span", {
		className: "text-shadow text-xs text-center"
	}, "Please be patient while our minions mint something special for you.")),
	Yc = () => {
		const {
			gameService: A
		} = i.exports.useContext(G);
		return e.createElement("div", {
			className: "flex flex-col items-center"
		}, e.createElement("img", {
			src: va,
			className: "w-16 my-4"
		}), e.createElement("span", {
			className: "text-center mb-2"
		}, "Woohoo! Your items are secured on the Blockchain!"), e.createElement(k, {
			onClick: () => A.send("REFRESH")
		}, "Continue"))
	},
	Oc = () => e.createElement("div", {
		className: "flex flex-col items-center p-2"
	}, e.createElement("span", {
		className: "text-shadow text-center"
	}, "Syncing"), e.createElement("img", {
		src: Va,
		className: "h-20 mt-2 mb-3 -ml-8"
	}), e.createElement("span", {
		className: "text-shadow text-xs text-center"
	}, "Please bear with us while we sync all of your data on chain."), e.createElement("span", {
		className: "text-shadow text-xs text-center underline mt-2"
	}, "Do not refresh your browser")),
	Uc = () => e.createElement("span", {
		className: "loading"
	}, "Withdrawing");
var Jc = "data:image/gif;base64,R0lGODdhYABAAHcAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJBwAAACwAAAAAYABAAIEAAAAYFCXq1KrChWkCoYSPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/g8MCofEovGIPASWzEDyEhBIpwLncxIYUKcD6xUS3U69X0d4qUWTy4xztppdsxXhgV1g787NWrF+37BUNbgEGNjU9GeIcCYWt8gohWbHpAgJIOgoB4nYdLmQ1UX5CSopSYqaqrrK2ur6ChsrO0tba3uLm6u7y9vrC1kAACH5BAkHAAAALCoAEwANABUAgAAAAOQ7RAIihI+py+0P4wm0hmTzzBrw/llGWI3kZX4bmYat+ooIPHNHAQAh+QQJBwAAACwpABIADwAVAIIAAAAYFCXq1KrChWnkO0QAAAAAAAAAAAADTwi63BwwBgeCuFjMNzIem2J5WFhdUJeaY6oF4IPCb7y09CoLQ8/3rA7JdrMYXxRJhMJ0QBSEqCjUilphtqqVgKVOtoSKiWFtAqSLMAVNSQAAIfkECQcAAAAsKQASAA8AFQCCAAAAGBQl6tSqwoVp5DtEAAAAAAAAAAAAA0cICtEeKwZBq4By2DqwmlvlMVSjmSNoXkEnUUMsxO7ShvPITDwb2Y/Gb0gsGo8/4YJAAJIuCiaTEWuUolKqS4l1Ir9gcNOYAAAh+QQJBwAAACwpABIADwAWAIIAAAAYFCXq1KrChWnkO0QAAAAAAAAAAAADQggK0R4rBkGrgHLYOrCaW+UxVKOZIziswtplYTsyU33N39NEfO//wKBw+NstCITFDuRBflaNki8AZU6hNKCRyO0qEgAh+QQJBwAAACwpABMADwAVAIEAAAAYFCXq1KrChWkCOYQRqXEdAqNgbsg4qHk3agQllvhxwymcWdWlH/LE07stSYPn+s73/g8MCn233Y1DQ5wSIV1gCePdCgAh+QQJBwAAACwqABkADQAPAIEAAAAYFCXq1KrChWkCK4SDGcYhD8U6I8IxnYX5ofp1UgCS4oAKKEZt6gQg0owwh1Lb+s73/g/kFQAAIfkECQcAAAAsKgAcAA0ADACBAAAAGBQl6tSqwoVpAiWEj6nL3QFjPEHYewMIA/sBWdDQCWMokKSljh4GbtVsmpoh5UYBACH5BAkHAAAALCsAHAALAAwAgQAAABgUJerUqsKFaQIlBIIZduIvVhjwDVQhjpPf4CCUuIneNqRC+lHZdYAyxygJg+dAAQAh+QQJBwAAACwrAB4ACwAKAIEAAAAYFCXq1KrChWkCIASCGXbiL1YY8A1UIY6T3+AglLgNpmB+VHYd4MsxSmIUADs=";
const Tc = () => {
	const {
		gameService: A
	} = i.exports.useContext(G), [{
		context: {
			whitelistedAt: t
		}
	}] = M(A);
	return e.createElement("div", {
		className: "flex flex-col items-center p-2"
	}, e.createElement("span", {
		className: "text-shadow text-center"
	}, "Goblins detected!"), e.createElement("img", {
		src: Jc,
		className: "w-1/2"
	}), e.createElement("span", {
		className: "text-shadow text-xs text-center mt-2"
	}, "This farm has been identified for using automated software to mint farms and play the game or identifed for multi-accounting."), e.createElement("span", {
		className: "text-shadow underline text-xs text-center mt-4 mb-2"
	}, "Banned until"), t == null ? void 0 : t.toLocaleString())
};
class Og extends e.Component {}
const Kc = function() {
	return "_" + Math.random().toString(36).substr(2, 9)
};
class Se extends e.Component {
	constructor(t) {
		super(t);
		v(this, "renderElements", () => {
			const {
				image: t,
				className: a,
				style: n,
				widthFrame: s,
				heightFrame: r,
				background: c,
				backgroundSize: m,
				backgroundRepeat: u,
				backgroundPosition: h,
				onClick: w,
				onDoubleClick: E,
				onMouseMove: B,
				onMouseEnter: Q,
				onMouseLeave: p,
				onMouseOver: C,
				onMouseOut: f,
				onMouseDown: x,
				onMouseUp: S
			} = this.props, b = {
				position: "relative",
				overflow: "hidden",
				width: `${s}px`,
				height: `${r}px`,
				transform: `scale(${this.spriteScale})`,
				transformOrigin: "0 0",
				backgroundImage: `url(${c})`,
				backgroundSize: m,
				backgroundRepeat: u,
				backgroundPosition: h
			}, N = {
				overflow: "hidden",
				backgroundRepeat: "no-repeat",
				display: "table-cell",
				backgroundImage: `url(${t})`,
				width: `${s}px`,
				height: `${r}px`,
				transformOrigin: "0 50%"
			}, V = e.createElement("div", {
				className: "react-responsive-spritesheet-container__move",
				style: N
			}), O = e.createElement("div", {
				className: "react-responsive-spritesheet-container",
				style: b
			}, V);
			return e.createElement("div", {
				className: `react-responsive-spritesheet ${this.id} ${a}`,
				style: n,
				onClick: () => w(this.setInstance()),
				onDoubleClick: () => E(this.setInstance()),
				onMouseMove: () => B(this.setInstance()),
				onMouseEnter: () => Q(this.setInstance()),
				onMouseLeave: () => p(this.setInstance()),
				onMouseOver: () => C(this.setInstance()),
				onMouseOut: () => f(this.setInstance()),
				onMouseDown: () => x(this.setInstance()),
				onMouseUp: () => S(this.setInstance())
			}, O)
		});
		v(this, "init", () => {
			const {
				image: t,
				widthFrame: a,
				heightFrame: n,
				autoplay: s,
				getInstance: r,
				onInit: c
			} = this.props, m = new Image;
			m.src = t, m.onload = () => {
				if(document && document.querySelector(`.${this.id}`)) {
					this.imageSprite = m, this.cols = this.imageSprite.width === a ? 1 : this.imageSprite.width / a, this.rows = this.imageSprite.height === n ? 1 : this.imageSprite.height / n, this.spriteEl = document.querySelector(`.${this.id}`), this.spriteElContainer = this.spriteEl.querySelector(".react-responsive-spritesheet-container"), this.spriteElMove = this.spriteElContainer.querySelector(".react-responsive-spritesheet-container__move"), this.resize(!1), window.addEventListener("resize", this.resize), this.moveImage(!1), setTimeout(() => {
						this.resize(!1)
					}, 10), s !== !1 && this.play(!0);
					const u = this.setInstance();
					r(u), c(u)
				}
			}, m.onerror = () => {
				throw new Error(`Failed to load image ${m.src}`)
			}
		});
		v(this, "resize", (t = !0) => {
			const {
				widthFrame: a,
				onResize: n
			} = this.props;
			this.isResponsive && (this.spriteScale = this.spriteEl.offsetWidth / a, this.spriteElContainer.style.transform = `scale(${this.spriteScale})`, this.spriteEl.style.height = `${this.getInfo("height")}px`, t && n && n(this.setInstance()))
		});
		v(this, "play", (t = !1) => {
			const {
				onPlay: a,
				timeout: n
			} = this.props;
			this.isPlaying || setTimeout(() => {
				a(this.setInstance()), this.setIntervalPlayFunctions(), this.isPlaying = !0
			}, t ? n : 0)
		});
		v(this, "setIntervalPlayFunctions", () => {
			this.intervalSprite && clearInterval(this.intervalSprite), this.intervalSprite = setInterval(() => {
				this.isPlaying && this.moveImage()
			}, 1e3 / this.fps)
		});
		v(this, "moveImage", (t = !0) => {
			const {
				onEnterFrame: a,
				onEachFrame: n,
				loop: s,
				onLoopComplete: r
			} = this.props, c = Math.floor(this.frame / this.cols), m = this.frame - this.cols * c;
			this.spriteElMove.style.backgroundPosition = `-${this.props.widthFrame*m}px -${this.props.heightFrame*c}px`, a && a.map((u, h) => {
				u.frame === this.frame && u.callback && u.callback()
			}), t && (this.direction === "rewind" ? this.frame -= 1 : this.frame += 1, n && n(this.setInstance())), this.isPlaying && (this.direction === "forward" && (this.frame === this.steps || this.frame === this.endAt) || this.direction === "rewind" && (this.frame === -1 || this.frame === this.endAt)) && (s ? (r && r(this.setInstance()), this.completeLoopCicles += 1, this.frame = this.startAt ? this.startAt : this.direction === "rewind" ? this.steps - 1 : 0) : this.pause())
		});
		v(this, "pause", () => {
			const {
				onPause: t
			} = this.props;
			this.isPlaying = !1, clearInterval(this.intervalSprite), t(this.setInstance())
		});
		v(this, "goToAndPlay", t => {
			this.frame = t || this.frame, this.play()
		});
		v(this, "goToAndPause", t => {
			this.pause(), this.frame = t || this.frame, this.moveImage()
		});
		v(this, "setStartAt", t => (this.startAt = t ? t - 1 : 0, this.startAt));
		v(this, "setEndAt", t => (this.endAt = t, this.endAt));
		v(this, "setDirection", t => (this.direction = t === "rewind" ? "rewind" : "forward", this.direction));
		v(this, "getInfo", t => {
			switch(t) {
				case "direction":
					return this.direction;
				case "frame":
					return this.frame;
				case "fps":
					return this.fps;
				case "steps":
					return this.steps;
				case "width":
					return this.spriteElContainer.getBoundingClientRect().width;
				case "height":
					return this.spriteElContainer.getBoundingClientRect().height;
				case "scale":
					return this.spriteScale;
				case "isPlaying":
					return this.isPlaying;
				case "isPaused":
					return !this.isPlaying;
				case "completeLoopCicles":
					return this.completeLoopCicles;
				default:
					throw new Error(`Invalid param \`${t}\` requested by Spritesheet.getinfo(). See the documentation on https://github.com/danilosetra/react-responsive-spritesheet`)
			}
		});
		const {
			isResponsive: a,
			startAt: n,
			endAt: s,
			fps: r,
			steps: c,
			direction: m
		} = t;
		this.id = `react-responsive-spritesheet--${Kc()}`, this.spriteEl = this.spriteElContainer = this.spriteElMove = this.imageSprite = this.cols = this.rows = null, this.intervalSprite = !1, this.isResponsive = a, this.startAt = this.setStartAt(n), this.endAt = this.setEndAt(s), this.fps = r, this.steps = c, this.completeLoopCicles = 0, this.isPlaying = !1, this.spriteScale = 1, this.direction = this.setDirection(m), this.frame = this.startAt ? this.startAt : this.direction === "rewind" ? this.steps - 1 : 0
	}
	componentDidMount() {
		this.init()
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.resize)
	}
	setFps(t) {
		this.fps = t, this.setIntervalPlayFunctions()
	}
	setInstance() {
		return {
			play: this.play,
			pause: this.pause,
			goToAndPlay: this.goToAndPlay,
			goToAndPause: this.goToAndPause,
			setStartAt: this.setStartAt,
			setEndAt: this.setEndAt,
			setFps: this.setFps,
			setDirection: this.setDirection,
			getInfo: this.getInfo
		}
	}
	render() {
		return this.renderElements()
	}
}
Se.propTypes = {
	className: D.string,
	style: D.object,
	image: D.string.isRequired,
	widthFrame: D.number.isRequired,
	heightFrame: D.number.isRequired,
	isResponsive: D.bool,
	steps: D.number.isRequired,
	fps: D.number.isRequired,
	direction: D.string,
	timeout: D.number,
	autoplay: D.bool,
	loop: D.bool,
	startAt: D.number,
	endAt: D.oneOfType([D.oneOf([!1]), D.number]),
	background: D.string,
	backgroundSize: D.string,
	backgroundRepeat: D.string,
	backgroundPosition: D.string,
	getInstance: D.func,
	onClick: D.func,
	onDoubleClick: D.func,
	onMouseMove: D.func,
	onMouseEnter: D.func,
	onMouseLeave: D.func,
	onMouseOver: D.func,
	onMouseOut: D.func,
	onMouseDown: D.func,
	onMouseUp: D.func,
	onInit: D.func,
	onResize: D.oneOfType([D.oneOf([!1]), D.func]),
	onPlay: D.func,
	onPause: D.func,
	onLoopComplete: D.oneOfType([D.oneOf([!1]), D.func]),
	onEachFrame: D.oneOfType([D.oneOf([!1]), D.func]),
	onEnterFrame: D.oneOfType([D.oneOf([!1]), D.array])
};
Se.defaultProps = {
	className: "",
	style: {},
	isResponsive: !0,
	direction: "forward",
	timeout: 0,
	autoplay: !0,
	loop: !1,
	startAt: 0,
	endAt: !1,
	background: "",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "",
	getInstance: () => {},
	onClick: () => {},
	onDoubleClick: () => {},
	onMouseMove: () => {},
	onMouseEnter: () => {},
	onMouseLeave: () => {},
	onMouseOver: () => {},
	onMouseOut: () => {},
	onMouseDown: () => {},
	onMouseUp: () => {},
	onInit: () => {},
	onResize: !1,
	onPlay: () => {},
	onPause: () => {},
	onLoopComplete: !1,
	onEachFrame: !1,
	onEnterFrame: !1
};
var Lc = "data:image/png;base64,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",
	Pc = "./assets/gold_drop.289fc330.png",
	Vc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABCCAYAAAA476rKAAAAAXNSR0IArs4c6QAAAjVJREFUeJzt2TFoE1Ecx/FvrejUpdiiDXZJoRI6SBrpFiGDBByyNMstIkqlODiotW66JbVdFAehpbhkSZcIhVqkYBeHVAlESjKcQ10clM7tcg7lYhLTNCYvaHy/z5Tk3ruX/O7xf+8uICIiIiIiIiIiIiIiIiIiIiIiIiIiAPR168SLy+teo88f3L7etTH/dV354YvL696Vy5eOPX41ErQy8FOmT3hS0H4b0+P2AqNhtxI0wI3pmJWBGwu71aBtZiTsPwk6NDZiYsieZCTsbCZHvlAiXyg1becH/XptC4D3O65VpaTjsKdiMx7Ap4+fm7arD9rnzKatCby/k85TsRkv6STYLZbZ/7HPbrHMl71vRMIh4CjgocEBhgYHALj3+DkXRoYr/QPnzxEJhzjsDzwp7rx72sl36QWn2+3ozKa98OQEAEknQTaTA8Atu7xaWQPgzq1pgMr7ajYupm3dXERTce/r6iF3H94HaoObm0sTHA827e9fBIB8ocSb7y/Ynt/472902p7ZcFSn/dntW1h4VHndaEbXB22TjhbID1tveflsqWGowG8XwuagwdDWz6/T9aFXl5fq+l3dzq/1Nmgr7O35jb6LN8+01DY8OXHsQpnN5Dh7bc+Keg0dPvXzF8rhwBjB8WBNmYBfpaLRHtwtu1YFDQYesUZTcQ/gYHOUpJOoOZbN5BruTGwMGgw+z46m4t7B5mhLbW0MGgz/eeDP8pPYGLSIiIiIiIiIiIiIiIj8TT8BbV+8LUYVYdcAAAAASUVORK5CYII=";
const Hc = 1e3,
	Zc = 3,
	Wc = ({
		rockIndex: A
	}) => {
		const {
			gameService: t,
			selectedItem: a
		} = i.exports.useContext(G), [n] = M(t), [s] = M(t), [r, c] = i.exports.useState(!0), [m, u] = i.exports.useState(!1), [h, w] = i.exports.useState(), [E, B] = i.exports.useState(0), [Q, p] = i.exports.useState(!1), C = i.exports.useRef(null), f = i.exports.useRef(), x = i.exports.useRef(), S = n.matches("readonly"), b = "Iron Pickaxe", N = s.context.state.gold[A], V = !Bt(N);
		i.exports.useEffect(() => {
			const y = F => {
				C.current && !C.current.contains(F.target) && B(0)
			};
			return document.addEventListener("click", y, !0), () => {
				document.removeEventListener("click", y, !0)
			}
		}, []);
		const O = async y => {
				w(y), c(!0), await new Promise(F => setTimeout(F, Hc)), c(!1)
			},
			T = () => {
				var me, we, Ne;
				const y = (me = f.current) == null ? void 0 : me.getInfo("isPlaying");
				if(S) {
					Ue.play(), (we = f.current) == null || we.goToAndPlay(0);
					return
				}
				if(!(s.context.state.inventory["Iron Pickaxe"] || new o(0)).lessThanOrEqualTo(0))
					if(a == b && !y) Ue.play(), (Ne = f.current) == null || Ne.goToAndPlay(0), B(Le => Le + 1), E > 0 && E === Zc - 1 && (H(), VA.play(), B(0));
					else return
			},
			H = async() => {
				var y;
				try {
					t.send("gold.mined", {
						index: A
					}), p(!0), (y = x.current) == null || y.goToAndPlay(0), O(e.createElement("div", {
						className: "flex"
					}, e.createElement("img", {
						src: Ea,
						className: "w-5 h-5 mr-2"
					}), e.createElement("span", {
						className: "text-sm text-white text-shadow"
					}, `+${N.amount}`))), await new Promise(F => setTimeout(F, 2e3)), p(!1)
				} catch(F) {
					O(e.createElement("span", {
						className: "text-xs text-white text-shadow"
					}, F.message))
				}
			},
			ne = () => {
				var y, F;
				S || a === b && ((y = s.context.state.inventory[b]) == null ? void 0 : y.gte(1)) || ((F = C.current) == null || F.classList.add("cursor-not-allowed"), u(!0))
			},
			se = () => {
				var y, F;
				S || a === b && ((y = s.context.state.inventory[b]) == null ? void 0 : y.gte(1)) || ((F = C.current) == null || F.classList.remove("cursor-not-allowed"), u(!1))
			},
			re = yt,
			$ = ze(N.minedAt, re),
			L = 100 - $ / re * 100;
		return e.createElement("div", {
			className: "relative z-10"
		}, !V && e.createElement("div", {
			onMouseEnter: ne,
			onMouseLeave: se,
			ref: C,
			className: "group cursor-pointer  w-full h-full",
			onClick: T
		}, e.createElement(Se, {
			className: "group-hover:img-highlight pointer-events-none transform z-10",
			style: {
				width: `${l*5}px`,
				imageRendering: "pixelated"
			},
			getInstance: y => {
				f.current = y
			},
			image: Lc,
			widthFrame: 91,
			heightFrame: 66,
			fps: 24,
			steps: 5,
			direction: "forward",
			autoplay: !1,
			loop: !0,
			onLoopComplete: y => {
				y.pause()
			}
		}), e.createElement("div", {
			className: `absolute top-8 transition pointer-events-none w-28 z-20 ${m?"opacity-100":"opacity-0"}`
		}, e.createElement(Ce, null, "Equip ", b.toLowerCase()))), e.createElement(Se, {
			style: {
				width: `${l*5}px`,
				opacity: Q ? 1 : 0,
				transition: "opacity 0.2s ease-in",
				imageRendering: "pixelated"
			},
			className: "pointer-events-none z-20",
			getInstance: y => {
				x.current = y
			},
			image: Pc,
			widthFrame: 91,
			heightFrame: 66,
			fps: 18,
			steps: 7,
			direction: "forward",
			autoplay: !1,
			loop: !0,
			onLoopComplete: y => {
				y.pause()
			}
		}), e.createElement("img", {
			src: Vc,
			className: "absolute top-0 pointer-events-none -z-10",
			style: {
				width: `${l*5}px`
			}
		}), e.createElement("div", {
			className: Y("transition-opacity pointer-events-none absolute top-12 left-9", {
				"opacity-100": E > 0,
				"opacity-0": E === 0
			})
		}, e.createElement($e, {
			percentage: Q ? 0 : 100 - E / 3 * 100
		})), V && e.createElement(e.Fragment, null, e.createElement("div", {
			className: "absolute",
			style: {
				top: "106px",
				left: "29px"
			}
		}, e.createElement(Xe, {
			percentage: L,
			seconds: $
		}))), e.createElement("div", {
			className: Y("transition-opacity absolute top-24 w-40 left-20 z-20 pointer-events-none", {
				"opacity-100": r,
				"opacity-0": !r
			})
		}, h))
	};
var jc = "data:image/png;base64,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",
	zc = "data:image/png;base64,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",
	qc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABCCAYAAAA476rKAAAAAXNSR0IArs4c6QAAAd1JREFUeJzt179LG2Ecx/GPIkg3lzrEQYIHkeAgLa4OGUTQSZy6OCiIk4sY+x9EyaIOIk2pDroYBIsBJ8WumuAQgkKy+CND28FNcDmH8BwXT0IvEaw879d0z3PPXfJ8+N73OAkAAAAAAAAAAAAAAAAAAAAAANSkMzk3ncm5b/0//idtr3GTl0IdGuyXJJ1dXHpzCzNjr/J771XLm09ncq4J9iVxJ6Lt7LEkqZAvancjaW3g7a1cHI0lGgYtSaVyVVOTCW/8ZW7ZPT2vuH/uH6xrMS2FLdUq918U8sW6calclW2BN/1IR2MJt7vHkSQd7q82XDs+Ma++WJ8kaXZ60puPOxF97PpgTVtpaqP+oA0T5qfPA97c3u5B3ZqVlaR3bHr5z7/r+rV0ZEXgHWEviMYS7tbON0nS4uJy4LxpFyZ0f8CG/6Vpk1BhD6dG3Zsfj97YBLn5PRtY+7yq/b3dxqClJirbiDsRlcpVSbU+HHcimv+6Fljnr37TaqRa5dvUQqSQPdtUdqMX43b22GsllatK4LwJ/Lb3xKqgpSbDlqTuHidQqX6FfDEQdufItXdsW9BSC23k9125LuxCvlgXuD9oE7KNAfuF3vxwajT0h4jtIQMAAAAAAAAAAAAWeQKnU5fnHR9lWwAAAABJRU5ErkJggg==";
const Xc = 1e3,
	$c = 3,
	et = ({
		rockIndex: A
	}) => {
		const {
			gameService: t,
			selectedItem: a
		} = i.exports.useContext(G), [n] = M(t), [s] = M(t), [r, c] = i.exports.useState(!0), [m, u] = i.exports.useState(!1), [h, w] = i.exports.useState(), [E, B] = i.exports.useState(0), [Q, p] = i.exports.useState(!1), C = i.exports.useRef(null), f = i.exports.useRef(), x = i.exports.useRef(), S = n.matches("readonly"), b = "Pickaxe", N = s.context.state.stones[A], V = !ft(N);
		i.exports.useEffect(() => {
			const y = F => {
				C.current && !C.current.contains(F.target) && B(0)
			};
			return document.addEventListener("click", y, !0), () => {
				document.removeEventListener("click", y, !0)
			}
		}, []);
		const O = async y => {
				w(y), c(!0), await new Promise(F => setTimeout(F, Xc)), c(!1)
			},
			T = () => {
				var me, we, Ne;
				const y = (me = f.current) == null ? void 0 : me.getInfo("isPlaying");
				if(S) {
					Ue.play(), (we = f.current) == null || we.goToAndPlay(0);
					return
				}
				if(!(s.context.state.inventory.Pickaxe || new o(0)).lessThanOrEqualTo(0))
					if(a == b && !y) Ue.play(), (Ne = f.current) == null || Ne.goToAndPlay(0), B(Le => Le + 1), E > 0 && E === $c - 1 && (H(), VA.play(), B(0));
					else return
			},
			H = async() => {
				var y;
				B(0);
				try {
					t.send("stone.mined", {
						index: A
					}), p(!0), (y = x.current) == null || y.goToAndPlay(0), O(e.createElement("div", {
						className: "flex"
					}, e.createElement("img", {
						src: ua,
						className: "w-5 h-5 mr-2"
					}), e.createElement("span", {
						className: "text-sm text-white text-shadow"
					}, `+${N.amount}`))), await new Promise(F => setTimeout(F, 2e3)), p(!1)
				} catch(F) {
					O(e.createElement("span", {
						className: "text-xs text-white text-shadow"
					}, F.message))
				}
			},
			ne = () => {
				var y, F;
				S || a === b && ((y = s.context.state.inventory[b]) == null ? void 0 : y.gte(1)) || ((F = C.current) == null || F.classList.add("cursor-not-allowed"), u(!0))
			},
			se = () => {
				var y, F;
				S || a === b && ((y = s.context.state.inventory[b]) == null ? void 0 : y.gte(1)) || ((F = C.current) == null || F.classList.remove("cursor-not-allowed"), u(!1))
			},
			re = Qt,
			$ = ze(N.minedAt, re),
			L = 100 - $ / re * 100;
		return e.createElement("div", {
			className: "relative z-10"
		}, !V && e.createElement("div", {
			onMouseEnter: ne,
			onMouseLeave: se,
			ref: C,
			className: "group cursor-pointer  w-full h-full",
			onClick: T
		}, e.createElement(Se, {
			className: "group-hover:img-highlight pointer-events-none transform z-10",
			style: {
				width: `${l*5}px`,
				imageRendering: "pixelated"
			},
			getInstance: y => {
				f.current = y
			},
			image: jc,
			widthFrame: 91,
			heightFrame: 66,
			fps: 24,
			steps: 5,
			direction: "forward",
			autoplay: !1,
			loop: !0,
			onLoopComplete: y => {
				y.pause()
			}
		}), e.createElement("div", {
			className: `absolute top-10 transition pointer-events-none w-28 z-20 ${m?"opacity-100":"opacity-0"}`
		}, e.createElement(Ce, null, "Equip ", b.toLowerCase()))), e.createElement(Se, {
			style: {
				width: `${l*5}px`,
				opacity: Q ? 1 : 0,
				transition: "opacity 0.2s ease-in",
				imageRendering: "pixelated"
			},
			className: "pointer-events-none z-20",
			getInstance: y => {
				x.current = y
			},
			image: zc,
			widthFrame: 91,
			heightFrame: 66,
			fps: 18,
			steps: 7,
			direction: "forward",
			autoplay: !1,
			loop: !0,
			onLoopComplete: y => {
				y.pause()
			}
		}), e.createElement("img", {
			src: qc,
			className: "absolute top-0 pointer-events-none -z-10",
			style: {
				width: `${l*5}px`
			}
		}), e.createElement("div", {
			className: Y("transition-opacity pointer-events-none absolute top-12 left-8", {
				"opacity-100": E > 0,
				"opacity-0": E === 0
			})
		}, e.createElement($e, {
			percentage: Q ? 0 : 100 - E / 3 * 100
		})), V && e.createElement(e.Fragment, null, e.createElement("div", {
			className: "absolute",
			style: {
				top: "106px",
				left: "29px"
			}
		}, e.createElement(Xe, {
			percentage: L,
			seconds: $
		}))), e.createElement("div", {
			className: Y("transition-opacity absolute top-24 w-40 left-20 z-20 pointer-events-none", {
				"opacity-100": r,
				"opacity-0": !r
			})
		}, h))
	};
var _c = "data:image/png;base64,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",
	em = "data:image/png;base64,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/JIkzqy9DGf5JeaEm/+tylYtKrRrN+Y5kV7bf3V9nXLzKJOQtRORvUyurjm+ir6y+36mO+11c+z4WXR1dqG4ZGzBxp69B437uzq7AAANDdXsAfGAWUeHWUdHtazFRddrDxMQfy+HV6pl7ZWX1bniXJjFWfAlMWux4XvQHtaoJTFrGT9vNsPsYfX82bsrn1qrA2OrYwoKpmd8iQAf3LzBCFbGfALMjl5+1sfTntiYdXTiyPqBF9foTl/Bfyo1qdKuNU3TDtfWZLUQoKk5hZZTZ3w/LmqqZG0lXrDKFpcaL2SyF7GWU2fQ1JyyzVuTyOoJhUDVrCeiiZL14doao9hevWwpTp9rT/tavWwpNq5ajorKKpQtLnX8XfArq+Fdtwq5uKQ4rdIWhgeGM24jZ8w6OlFk7aWoe+DFNfprj5yQvoi5Pd7ucaqJu13LNsL20sOk6opRJ3FnbeV1uxVmHR7R3sVHPcpks/9hnPMoVc3ajdMm/HbC/F3wXfQVlxSjva0DpUsW2R4j7hOBWytu6wbMTt8rnzHr6ESRtZ9ePFnhF7RgVIUq7Vp28U3S/m9eqJK1VRILOjeqZi2Yt2Gx49b+zXMpxTzKdS+tDe05eqV61n5Evdm456KvdddxbeVTa/WulrF/d3V24cHNGwCMh2cOzRz48MAwAGDpPfIJu0cvP4vWXceVfqGKErOOTpRZv/bICc1r4ZdNwWc+VsXCT4V27SVHrwWJ6OVY99Ja5TJXIWs/mppTxpwxp54/c9523yvq85CErEVe615ai2O1xx2PdWr/1rmUouCLqv0nIWs3srbr982m+XfBL98/oBhTB4AvW+al3WftMnUaUxemrO5hEWKDWUcnyqyzHaLNtmBUTVztWpbfsYePG3NrgMwXPHHxFfuMmntJZBdd1bJX5RpiHlqUZSwWFQD2G9L6eZGL4zyokrWV03XDb/t3yz+q3FXN2o04F0GuO0Dm74Kf3AP9kObgs8UixBtmHZ04svZaCE6UOX1CVFm7vfB5LUjMVC/4rOK+hrh92oamadoDL67Rjz0s74ny26sR5/mIO2vByxtFr+1flYLPSpWsvRJt3E/RZyU7F17zV/oiRZQPJkoPnuq89HjIqNTDkVTmHg6ZsOeF8XyM81r4sf1HRxR+YRTbQIQ9fUQUjN8tWnhxDcat8JPJdhiFxkS9DRHPUSavhZ8M239umHv8ZLxOZ/B7TngCiWLGnr54Mf/cC7Pw43kIF9t/9MyZR11s8yQSKWCizdVLGuafe14y5nmIB3OPXlzFNk8kERERUcRYbBMREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREZEP/wMs6I8d2V1vcQAAAABJRU5ErkJggg==",
	Am = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABCCAYAAAA476rKAAAAAXNSR0IArs4c6QAAAgJJREFUeJzt2D9Lw0AYBvBHEVy6OXiD6BChIE4Kuik4iJuDuDg4+hlcHKQIUtwcVZCAX0ARiovU1bQ4dDDDLdLhCnbr4nQOcmls09RrA2rv+UGG5l9zT17e3hUgIiIiIiIiIiIiIiIiIiIiIsrIxc29DuuNaLu4ude//Ux/wViWNwvrDa1UK/GYEDkAQH5mOtPv/E8yG3ha0J1cDT6TwfYLWogcko4LkXMq8PFhb/DTijbV7LKhq2p+YUdPiSn4fgEAEis4jUvVPXRlG/v7Rzg+ubauYKVaCOsNJ2YrA4ddDqQuB1Jf+UU0VTPaP0jgrhgo7HIgNdDuw1d+Eb5fgAwlAOCuFPS8Voicsy/DOux40PH+rFQr6tvVSq1noEq1uvp62ssZJVZhr24cRL213w+haSf9Kvn55RUAcHY5+qvMCdsL0ubMd6UAMpTw8h6Ar8AN02J8v+BMJXf6cWWvnW5p4GvWEa9Ys5kAd/e2o2CTxF9A3O37ucVj/0/WlQ3077Fe3vtW4UZTNbv2ucQ6bC/voVqpYWl5sec55pgJvLPSq5Va4vmjzmrltna6pT8eZqPPu3vbANrhdYZWrdQgQxnNw1fWVxLvW597xNNhaeRXkdYDNL0bAOLBA+hqEWm925jcfHMiaGDI/0biwQ/KlaCJiIiIiIiIiIiIiIiIiIiIyF2fYqTRoMeBYMEAAAAASUVORK5CYII=";
const tm = 1e3,
	am = 3,
	Wa = ({
		rockIndex: A
	}) => {
		const {
			gameService: t,
			selectedItem: a
		} = i.exports.useContext(G), [n] = M(t), [s] = M(t), [r, c] = i.exports.useState(!0), [m, u] = i.exports.useState(!1), [h, w] = i.exports.useState(), [E, B] = i.exports.useState(0), [Q, p] = i.exports.useState(!1), C = i.exports.useRef(null), f = i.exports.useRef(), x = i.exports.useRef(), S = n.matches("readonly"), b = "Stone Pickaxe", N = s.context.state.iron[A], V = !xt(N);
		i.exports.useEffect(() => {
			const y = F => {
				C.current && !C.current.contains(F.target) && B(0)
			};
			return document.addEventListener("click", y, !0), () => {
				document.removeEventListener("click", y, !0)
			}
		}, []);
		const O = async y => {
				w(y), c(!0), await new Promise(F => setTimeout(F, tm)), c(!1)
			},
			T = () => {
				var me, we, Ne;
				const y = (me = f.current) == null ? void 0 : me.getInfo("isPlaying");
				if(S) {
					Ue.play(), (we = f.current) == null || we.goToAndPlay(0);
					return
				}
				if(!(s.context.state.inventory["Stone Pickaxe"] || new o(0)).lessThanOrEqualTo(0))
					if(a === b && !y) Ue.play(), (Ne = f.current) == null || Ne.goToAndPlay(0), B(Le => Le + 1), E > 0 && E === am - 1 && (H(), VA.play(), B(0));
					else return
			},
			H = async() => {
				var y;
				B(0);
				try {
					t.send("iron.mined", {
						index: A
					}), p(!0), (y = x.current) == null || y.goToAndPlay(0), O(e.createElement("div", {
						className: "flex"
					}, e.createElement("img", {
						src: pa,
						className: "w-5 h-5 mr-2"
					}), e.createElement("span", {
						className: "text-sm text-white text-shadow"
					}, `+${N.amount}`))), await new Promise(F => setTimeout(F, 2e3)), p(!1)
				} catch(F) {
					O(e.createElement("span", {
						className: "text-xs text-white text-shadow"
					}, F.message))
				}
			},
			ne = () => {
				var y, F;
				S || a === b && ((y = s.context.state.inventory[b]) == null ? void 0 : y.gte(1)) || ((F = C.current) == null || F.classList.add("cursor-not-allowed"), u(!0))
			},
			se = () => {
				var y, F;
				S || a === b && ((y = s.context.state.inventory[b]) == null ? void 0 : y.gte(1)) || ((F = C.current) == null || F.classList.remove("cursor-not-allowed"), u(!1))
			},
			re = St,
			$ = ze(N.minedAt, re),
			L = 100 - $ / re * 100;
		return e.createElement("div", {
			className: "relative z-10"
		}, !V && e.createElement("div", {
			onMouseEnter: ne,
			onMouseLeave: se,
			ref: C,
			className: "group cursor-pointer  w-full h-full",
			onClick: T
		}, e.createElement(Se, {
			className: "group-hover:img-highlight pointer-events-none transform z-10",
			style: {
				width: `${l*5}px`,
				imageRendering: "pixelated"
			},
			getInstance: y => {
				f.current = y
			},
			image: _c,
			widthFrame: 91,
			heightFrame: 66,
			fps: 24,
			steps: 5,
			direction: "forward",
			autoplay: !1,
			loop: !0,
			onLoopComplete: y => {
				y.pause()
			}
		}), e.createElement("div", {
			className: `absolute top-5 transition pointer-events-none w-28 z-20 ${m?"opacity-100":"opacity-0"}`
		}, e.createElement(Ce, null, "Equip ", b.toLowerCase()))), e.createElement(Se, {
			style: {
				width: `${l*5}px`,
				opacity: Q ? 1 : 0,
				transition: "opacity 0.2s ease-in",
				imageRendering: "pixelated"
			},
			className: "pointer-events-none z-20",
			getInstance: y => {
				x.current = y
			},
			image: em,
			widthFrame: 91,
			heightFrame: 66,
			fps: 18,
			steps: 7,
			direction: "forward",
			autoplay: !1,
			loop: !0,
			onLoopComplete: y => {
				y.pause()
			}
		}), e.createElement("img", {
			src: Am,
			className: "absolute top-0 pointer-events-none -z-10",
			style: {
				width: `${l*5}px`
			}
		}), e.createElement("div", {
			className: Y("transition-opacity pointer-events-none absolute top-8 left-8", {
				"opacity-100": E > 0,
				"opacity-0": E === 0
			})
		}, e.createElement($e, {
			percentage: Q ? 0 : 100 - E / 3 * 100
		})), V && e.createElement(e.Fragment, null, e.createElement("div", {
			className: "absolute",
			style: {
				top: "96px",
				left: "29px"
			}
		}, e.createElement(Xe, {
			percentage: L,
			seconds: $
		}))), e.createElement("div", {
			className: Y("transition-opacity absolute top-24 w-40 left-20 z-20 pointer-events-none", {
				"opacity-100": r,
				"opacity-0": !r
			})
		}, h))
	},
	nm = () => e.createElement(e.Fragment, null, e.createElement("div", {
		className: "absolute",
		style: {
			right: `${l*5}px`,
			top: `${l*25}px`
		}
	}, e.createElement(et, {
		rockIndex: 0
	})), e.createElement("div", {
		className: "absolute",
		style: {
			left: `${l*15}px`,
			top: `${l*43}px`
		}
	}, e.createElement(et, {
		rockIndex: 1
	})), e.createElement("div", {
		className: "absolute",
		style: {
			right: `${l*10}px`,
			top: `${l*50}px`
		}
	}, e.createElement(et, {
		rockIndex: 2
	})), e.createElement("div", {
		className: "absolute",
		style: {
			left: `${l*25}px`,
			top: `${l*20}px`
		}
	}, e.createElement(Wa, {
		rockIndex: 0
	})), e.createElement("div", {
		className: "absolute",
		style: {
			right: `${l*1}px`,
			top: `${l*40}px`
		}
	}, e.createElement(Wa, {
		rockIndex: 1
	})), e.createElement("div", {
		className: "absolute",
		style: {
			left: `calc(50% +  ${l*25}px)`,
			top: `${l*14}px`
		}
	}, e.createElement(Wc, {
		rockIndex: 0
	})));
var ja = "data:image/gif;base64,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",
	sm = "./assets/team.a79a1a34.png";
const rm = AA({
		initial: "idle",
		context: {
			hasDonated: !1
		},
		states: {
			idle: {
				on: {
					BEGGER_CLICK: {
						target: "begging"
					}
				}
			},
			begging: {
				on: {
					DONATE: {
						target: "donating"
					},
					CLOSE: {
						target: "idle"
					}
				}
			},
			donating: {
				invoke: {
					src: async(A, t) => {
						const {
							donation: a
						} = t;
						await J.donateToTheTeam(a)
					},
					onDone: {
						target: "donated",
						actions: _({
							hasDonated: (A, t) => !0
						})
					},
					onError: [{
						target: "idle",
						cond: (A, t) => t.data.message === W.REJECTED_TRANSACTION
					}, {
						target: "error"
					}]
				}
			},
			donated: {
				after: {
					1e3: {
						target: "idle"
					}
				}
			},
			error: {
				after: {
					2e3: {
						target: "idle"
					}
				}
			}
		}
	}),
	om = () => {
		const [A, t] = st(rm), [a, n] = i.exports.useState(1), s = u => {
			n(Je(Number(u.target.value)))
		}, r = () => {
			n(u => Je(u + .1))
		}, c = () => {
			n(a === .2 ? .2 : u => Je(u - .1))
		}, m = () => {
			t("BEGGER_CLICK"), Sl.play()
		};
		return e.createElement("div", {
			className: "z-5 absolute align-items-center w-[72px]",
			style: {
				left: `calc(50% - ${l*-9.8}px)`,
				top: `calc(50% - ${l*17.2}px)`
			}
		}, A.context.hasDonated ? e.createElement("img", {
			id: "rich_begger",
			src: $A,
			className: "absolute hover:cursor-pointer hover:img-highlight z-10",
			style: {
				width: `${l*1.8}px`
			},
			onClick: m
		}) : e.createElement("img", {
			id: "begger",
			src: ja,
			className: "absolute hover:cursor-pointer hover:img-highlight z-10",
			style: {
				width: `${l*1.8}px`
			},
			onClick: m
		}), e.createElement(U, {
			centered: !0,
			show: !A.matches("idle"),
			onHide: () => t("CLOSE")
		}, e.createElement(P, null, A.matches("begging") && e.createElement("div", {
			className: "flex flex-col items-center mb-1"
		}, e.createElement("img", {
			src: sm,
			alt: "sunflower token",
			className: "w-full mb-3"
		}), e.createElement("div", {
			className: "flex flex-col text-shadow items-center"
		}, e.createElement("h2", {
			className: "text-sm sm:text-base mb-2 text-center pb-2"
		}, "Buy the team a coffee!"), e.createElement("p", {
			className: "sm:text-sm mb-3 text-center"
		}, "Sunflower Land is run by a small group of passionate developers who are 100% sleep deprived."), e.createElement("p", {
			className: "sm:text-sm mb-3 text-center"
		}, `You can send us a donation of Matic with which we can drink
                more coffee and stay awake longer pumping out awesome new
                features`), e.createElement("p", {
			className: "sm:text-sm  mb-3 text-center"
		}, "Every little bit counts!")), e.createElement("div", {
			className: "relative"
		}, e.createElement("input", {
			type: "number",
			className: "text-shadow shadow-inner shadow-black bg-brown-200 w-24 p-1 text-center",
			step: "0.1",
			min: .1,
			value: a,
			required: !0,
			onChange: s,
			onBlur: () => {
				a < .1 && n(.1)
			}
		}), e.createElement("img", {
			src: jA,
			alt: "increment donation value",
			className: "cursor-pointer absolute -right-4 top-0",
			onClick: r
		}), e.createElement("img", {
			src: zA,
			alt: "decrement donation value",
			className: "cursor-pointer absolute -right-4 bottom-0",
			onClick: c
		})), e.createElement("span", {
			className: "text-[10px] text-shadow mt-2 mb-3"
		}, "Amount in MATIC"), e.createElement("div", {
			className: "flex w-full"
		}, e.createElement(k, {
			className: "w-full mr-1",
			onClick: () => t("CLOSE")
		}, e.createElement("span", {
			className: "text-xs whitespace-nowrap"
		}, "Close")), e.createElement(k, {
			className: "w-full ml-1",
			onClick: () => t("DONATE", {
				donation: a
			})
		}, e.createElement("span", {
			className: "text-xs whitespace-nowrap"
		}, "Donate")))), A.matches("donating") && e.createElement("div", {
			className: "flex flex-col items-center"
		}, e.createElement("img", {
			id: "begger",
			src: ja,
			className: "w-24"
		}), e.createElement("p", {
			className: "loading mb-4"
		}, "Donating")), A.matches("donated") && e.createElement("div", {
			className: "flex flex-col items-center"
		}, e.createElement("img", {
			id: "richBegger",
			src: $A,
			className: "w-24"
		}), e.createElement("p", {
			className: "mb-4"
		}, "Thank you!")), A.matches("error") && e.createElement("div", {
			className: "flex flex-col items-center"
		}, e.createElement("img", {
			id: "richBegger",
			src: fe
		}), e.createElement("p", {
			className: "my-4"
		}, "Oh no! Something went wrong!")))))
	};
var im = "./assets/shake_sheet.926898d5.png",
	lm = "./assets/chopped_sheet.cc3baab4.png",
	cm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAAAAXNSR0IArs4c6QAAAH5lWElmTU0AKgAAAAgAAwESAAMAAAABAAEAAAExAAIAAAAhAAAAModpAAQAAAABAAAAVAAAAABBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKQAAAAOgAQADAAAAAQABAACgAgAEAAAAAQAAABCgAwAEAAAAAQAAAA4AAAAANQI65wAABIdpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOmI4ZTI5NGJjLTE1NDgtNGYxYi05NTY2LWUxYjYwMDUzOTQ5ZDwvc3RSZWY6aW5zdGFuY2VJRD4KICAgICAgICAgICAgPHN0UmVmOmRvY3VtZW50SUQ+eG1wLmRpZDo3YzBkZjYyMi02YmI3LTQyMWMtYTI1Ni02MTVkZWE5OTRhNTk8L3N0UmVmOmRvY3VtZW50SUQ+CiAgICAgICAgIDwveG1wTU06RGVyaXZlZEZyb20+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPnhtcC5kaWQ6RTExQjFEODREODJEMTFFQTkzQTlBMDA0N0EzRkYxOEM8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6RTExQjFEODNEODJEMTFFQTkzQTlBMDA0N0EzRkYxOEM8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDo3YzBkZjYyMi02YmI3LTQyMWMtYTI1Ni02MTVkZWE5OTRhNTk8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+ChqhHncAAAEwSURBVCgVY2TAAortLP9jEWboPXScEV2cBV0ApLkwwxJdGMb/j24IionImu/d/w7TBKaVFDnBdP+M4ygugRtgp274f1m9I1gRSDNMA8wUZLGoxv0Mh26eB+tlgikgl0YJAzY9C4Zfl06AbcflBZAaBob9cPtQXNCZ1c8AUcAANgTkDRgG6QDJgdQgA7A/QP6v8pBn2H3+JViufFohsho4G6bZ1VCcoW3HQ3A4MNp1evyvesYB1wxSffrlDwZTcQ64RmxiYEOkfjCAvQAyDaQJphCmE6QIhGEAWQ1IDwiAvQBigFzCMA/iBRAf5AKYZpDXYJpBcgxJ4gyHyneA9cINAEsACZhB2LyArBGmHiUWQIJgk4E2YAAkW5HlMFwAkwS5xHTrRzD3tDc/3MkweRgNADZ7eZlUpgznAAAAAElFTkSuQmCC";
const mm = 1e3,
	gm = 3,
	eA = ({
		treeIndex: A
	}) => {
		const {
			gameService: t,
			selectedItem: a
		} = i.exports.useContext(G), [n] = M(t), [s, r] = i.exports.useState(!0), [c, m] = i.exports.useState(!1), [u, h] = i.exports.useState(), [w, E] = i.exports.useState(0), [B, Q] = i.exports.useState(!1), p = i.exports.useRef(null), C = i.exports.useRef(), f = i.exports.useRef();
		i.exports.useEffect(() => {
			const L = y => {
				p.current && !p.current.contains(y.target) && E(0)
			};
			return document.addEventListener("click", L, !0), () => {
				document.removeEventListener("click", L, !0)
			}
		}, []);
		const x = n.context.state.trees[A],
			S = !kA(x),
			b = async L => {
				h(L), r(!0), await new Promise(y => setTimeout(y, mm)), r(!1)
			},
			N = bt(n.context.state.inventory),
			V = n.context.state.inventory.Axe || new o(0),
			O = (a === "Axe" || N.eq(0)) && V.gte(N),
			T = async() => {
				var y, F, me;
				if(n.matches("readonly")) {
					(y = C.current) == null || y.goToAndPlay(0);
					return
				}!O || ((F = C.current) == null ? void 0 : F.getInfo("isPlaying")) || (kl.play(), (me = C.current) == null || me.goToAndPlay(0), E(we => we + 1), w > 0 && w === gm - 1 && (H(), Nl.play(), E(0)))
			},
			H = async() => {
				var L;
				E(0);
				try {
					t.send("tree.chopped", {
						index: A,
						item: a
					}), Q(!0), (L = f.current) == null || L.goToAndPlay(0), b(e.createElement("div", {
						className: "flex"
					}, e.createElement("img", {
						src: iA,
						className: "w-5 h-5 mr-2"
					}), e.createElement("span", {
						className: "text-sm text-white text-shadow"
					}, `+${x.wood}`))), await new Promise(y => setTimeout(y, 2e3)), Q(!1)
				} catch(y) {
					if(y.message === Ge.NO_AXES) {
						b(e.createElement("div", {
							className: "flex"
						}, e.createElement("img", {
							src: DA,
							className: "w-4 h-4 mr-2"
						}), e.createElement("span", {
							className: "text-xs text-white text-shadow"
						}, "No axes left")));
						return
					}
					b(e.createElement("span", {
						className: "text-xs text-white text-shadow"
					}, y.message))
				}
			},
			ne = () => {
				var L;
				n.matches("readonly") || O || ((L = p.current) == null || L.classList.add("cursor-not-allowed"), m(!0))
			},
			se = () => {
				var L;
				n.matches("readonly") || O || ((L = p.current) == null || L.classList.remove("cursor-not-allowed"), m(!1))
			},
			re = ze(x.choppedAt, rA),
			$ = 100 - re / rA * 100;
		return e.createElement("div", {
			className: "relative",
			style: {
				height: "106px"
			}
		}, !S && e.createElement("div", {
			onMouseEnter: ne,
			onMouseLeave: se,
			ref: p,
			className: "group cursor-pointer  w-full h-full",
			onClick: T
		}, e.createElement(Se, {
			className: "group-hover:img-highlight pointer-events-none transform",
			style: {
				width: `${l*4}px`,
				transform: `translateX(-${l*2.5}px)`,
				imageRendering: "pixelated"
			},
			getInstance: L => {
				C.current = L
			},
			image: im,
			widthFrame: 266,
			heightFrame: 168,
			fps: 24,
			steps: 11,
			direction: "forward",
			autoplay: !1,
			loop: !0,
			onLoopComplete: L => {
				L.pause()
			}
		}), e.createElement("div", {
			className: `absolute bottom-8 -right-[1rem] transition pointer-events-none w-28 z-20 ${c?"opacity-100":"opacity-0"}`
		}, e.createElement(Ce, null, "Equip an axe first"))), e.createElement(Se, {
			style: {
				width: `${l*4}px`,
				transform: `translateX(-${l*2.5}px)`,
				opacity: B ? 1 : 0,
				transition: "opacity 0.2s ease-in",
				imageRendering: "pixelated"
			},
			className: "absolute bottom-0 pointer-events-none",
			getInstance: L => {
				f.current = L
			},
			image: lm,
			widthFrame: 266,
			heightFrame: 168,
			fps: 20,
			steps: 11,
			direction: "forward",
			autoplay: !1,
			loop: !0,
			onLoopComplete: L => {
				L.pause()
			}
		}), S && e.createElement(e.Fragment, null, e.createElement("img", {
			src: cm,
			className: "absolute",
			style: {
				width: `${l}px`,
				bottom: "9px",
				left: "5px"
			}
		}), e.createElement("div", {
			className: "absolute -bottom-4 left-1.5"
		}, e.createElement(Xe, {
			percentage: $,
			seconds: re
		}))), e.createElement("div", {
			className: Y("transition-opacity pointer-events-none absolute top-4 left-2", {
				"opacity-100": w > 0,
				"opacity-0": w === 0
			})
		}, e.createElement($e, {
			percentage: B ? 0 : 100 - w / 3 * 100
		})), e.createElement("div", {
			className: Y("transition-opacity absolute -bottom-5 w-40 -left-16 z-20 pointer-events-none", {
				"opacity-100": s,
				"opacity-0": !s
			})
		}, u))
	},
	dm = () => {
		const [A, t] = i.exports.useState(!1);
		return e.createElement(e.Fragment, null, e.createElement("img", {
			src: ce,
			className: "absolute z-10 animate-float",
			style: {
				width: `${l*.3}px`,
				right: `${l*5}px`,
				top: `${l*2.8}px`
			}
		}), e.createElement("img", {
			src: HA,
			onClick: () => t(!0),
			className: "absolute cursor-pointer hover:img-highlight",
			style: {
				width: `${l*1}px`,
				right: `${l*4.65}px`,
				top: `${l*3.4}px`
			}
		}), e.createElement(U, {
			centered: !0,
			show: A,
			onHide: () => t(!1)
		}, e.createElement(P, null, e.createElement("div", {
			className: "flex items-start"
		}, e.createElement("img", {
			src: DA,
			className: "w-12 img-highlight mr-2"
		}), e.createElement("div", {
			className: "flex-1"
		}, e.createElement("span", {
			className: "text-shadow block"
		}, "Something looks different about these trees..."), e.createElement("span", {
			className: "text-shadow block mt-4"
		}, "I wonder if I can craft something to chop them down?"))))))
	},
	um = () => e.createElement("div", {
		id: "forest",
		style: {
			height: `${l*9}px`,
			width: `${l*11}px`,
			left: `calc(50% - ${l*-21.4}px)`,
			top: `calc(50% - ${l*4}px)`
		},
		className: "absolute "
	}, e.createElement(dm, null), e.createElement("div", {
		className: "absolute",
		style: {
			height: `${l*1.5}px`,
			width: `${l*1.5}px`,
			right: `${l*0}px`,
			top: `${l*5.5}px`
		}
	}, e.createElement(eA, {
		treeIndex: 0
	})), e.createElement("div", {
		className: "absolute",
		style: {
			height: `${l*1.5}px`,
			width: `${l*1.5}px`,
			left: `${l*.5}px`,
			top: `${l*.5}px`
		}
	}, e.createElement(eA, {
		treeIndex: 1
	})), e.createElement("div", {
		className: "absolute",
		style: {
			height: `${l*1.5}px`,
			width: `${l*1.5}px`,
			right: `${l*1}px`,
			top: `${l*.5}px`
		}
	}, e.createElement(eA, {
		treeIndex: 2
	})), e.createElement("div", {
		className: "absolute",
		style: {
			height: `${l*1.5}px`,
			width: `${l*1.5}px`,
			left: `${l*4.5}px`,
			bottom: `${l*.5}px`
		}
	}, e.createElement(eA, {
		treeIndex: 3
	})), e.createElement("div", {
		className: "absolute",
		style: {
			height: `${l*1.5}px`,
			width: `${l*1.5}px`,
			left: `${l*0}px`,
			bottom: `${l*2}px`
		}
	}, e.createElement(eA, {
		treeIndex: 4
	})));
var pm = "./assets/bank.af356bb9.gif",
	hA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAYAAAD0f5bSAAAA+ElEQVQokWP8//8/w//1pgwgIJX28T8DbsD4/PUtsCTLnwc5DMxQDY9Pu4EFmZ4/gev8JykDpmVNd/3/8yCHUdZ0FwPYJklRtf/PZvEz/DU0x2kN8/mTIINBTEZGCRFVghrQNTKBODANyM7CxoarQzYF5n6wG148RfEXSB5uIEwDMQCmDiUgCAGQfx6fdmNkgambtpyPCLs+gm1jkRRVA3MNdcTAdPDkswxrc43hylD4+x8zMAaeRgQEKQCu6fyVV2D6WXMZin4YHyYPchksIED8/8jOQgcgZy6I1mZ0n7CeAR4QIIHgyWdxJtizs4IZpQLbGRgYGBgAxdJt78Y36NkAAAAASUVORK5CYII=";
const At = A => A ? `${A.slice(0,5)}...${A.slice(-4)}` : "";

function Em(A) {
	return A.lessThan(10) ? 300 : A.lessThan(100) ? 250 : A.lessThan(1e3) ? 200 : A.lessThan(5e3) ? 150 : 100
}
const wm = ({
	onWithdraw: A
}) => {
	const {
		gameService: t
	} = i.exports.useContext(G), [a] = M(t), [n, s] = i.exports.useState(new o(0)), [r, c] = i.exports.useState(new o(0)), [m, u] = i.exports.useState(!0);
	i.exports.useEffect(() => {
		u(!0), (async() => {
			const {
				game: x
			} = await RA({
				id: a.context.state.id,
				farmAddress: a.context.state.farmAddress
			});
			c(x.balance), u(!1)
		})()
	}, []);
	const h = f => typeof f != "string" ? f : new o(0),
		w = () => {
			A(ge.toWei(n.toString()))
		},
		E = f => {
			f.target.value === "" ? s(new o(0)) : s(new o(Number(f.target.value)))
		},
		B = () => {
			s(r)
		},
		Q = () => {
			h(n).plus(.1).toNumber() < r.toDecimalPlaces(2, 1).toNumber() && s(f => h(f).plus(.1))
		},
		p = () => {
			h(n).toNumber() > .01 && h(n).minus(.1).toNumber() >= 0 && s(f => h(f).minus(.1))
		};
	if(m) return e.createElement("span", {
		className: "text-shadow loading"
	}, "Loading");
	const C = Em(typeof n != "string" ? n : new o(0)) / 10;
	return e.createElement(e.Fragment, null, e.createElement("div", {
		className: "flex flex-wrap"
	}, e.createElement("span", {
		className: "text-shadow  underline"
	}, "Choose amount to withdraw")), e.createElement("span", {
		className: "text-xs"
	}, r.toFixed(2), " is available on-chain"), e.createElement("div", {
		className: "h-16"
	}, e.createElement("div", {
		className: "flex items-center mt-2"
	}, e.createElement("div", {
		className: "relative mr-4"
	}, e.createElement("input", {
		type: "number",
		className: "text-shadow shadow-inner shadow-black bg-brown-200 w-32 p-2 text-center",
		step: "0.1",
		min: 0,
		value: typeof n == "string" ? "" : n.toDecimalPlaces(2, o.ROUND_DOWN).toNumber(),
		onChange: E
	}), e.createElement("img", {
		src: jA,
		alt: "increment donation value",
		className: "cursor-pointer w-3 absolute -right-4 top-0",
		onClick: Q
	}), e.createElement("img", {
		src: zA,
		alt: "decrement donation value",
		className: "cursor-pointer w-3 absolute -right-4 bottom-0",
		onClick: p
	})), e.createElement(k, {
		className: "w-24 ml-6",
		onClick: B
	}, "Max")), n.gt(0) && e.createElement(e.Fragment, null, e.createElement("span", {
		className: "text-xs"
	}, e.createElement("span", {
		className: "text-xs"
	}, C, "% fee"), e.createElement("a", {
		className: "underline ml-2",
		href: "https://docs.sunflower-land.com/fundamentals/withdrawing",
		target: "_blank",
		rel: "noreferrer"
	}, "(Read more)")))), e.createElement("div", {
		className: "flex items-center mt-4"
	}, e.createElement("span", {
		className: ""
	}, `You will receive: ${h(n).mul((100-C)/100).toFixed(1)}`), e.createElement("img", {
		src: le,
		className: "w-4 ml-2 img-highlight"
	})), e.createElement("div", {
		className: "flex items-center mt-2 mb-2"
	}, e.createElement("img", {
		src: hA,
		className: "h-8 mr-2"
	}), e.createElement("div", null, e.createElement("p", {
		className: "text-shadow text-sm"
	}, "Sent to your wallet"), e.createElement("p", {
		className: "text-shadow text-sm"
	}, At(J.myAccount || "XXXX")))), e.createElement(k, {
		onClick: w,
		disabled: h(n).gte(r)
	}, "Withdraw"))
};

function za({
	item: A,
	game: t
}) {
	return Object.values(t.fields).some(a => a.name === A)
}

function hm({
	item: A,
	game: t
}) {
	return console.log({
		item: A
	}), sA(A) || A in ie || A in xe() ? !1 : A === "Woody the Beaver" || A === "Apprentice Beaver" || A === "Foreman Beaver" ? Object.values(t.trees).every(kA) : A === "Scarecrow" || A === "Nancy" || A === "Kuebiko" ? Object.values(t.fields).length === 0 : A === "Golden Cauliflower" ? za({
		item: "Parsnip",
		game: t
	}) : A === "Mysterious Parsnip" ? za({
		item: "Parsnip",
		game: t
	}) : !0
}
const Cm = ({
		onWithdraw: A
	}) => {
		const {
			gameService: t
		} = i.exports.useContext(G), [a] = M(t), [n, s] = i.exports.useState(!0), [r, c] = i.exports.useState({}), [m, u] = i.exports.useState({});
		i.exports.useEffect(() => {
			s(!0);
			const p = async() => {
				const {
					game: C
				} = await RA({
					id: a.context.state.id,
					farmAddress: a.context.state.farmAddress
				});
				c(C.inventory), s(!1)
			};
			u({}), p()
		}, []);
		const h = () => {
				const p = Object.keys(m).map(f => ve[f]),
					C = Object.keys(m).map(f => {
						var x;
						return ge.toWei((x = m[f]) == null ? void 0 : x.toString(), Gt(f))
					});
				A(p, C)
			},
			w = p => {
				u(C => d(g({}, C), {
					[p]: (C[p] || new o(0)).add(1)
				})), c(C => {
					var f;
					return d(g({}, C), {
						[p]: (f = C[p]) == null ? void 0 : f.minus(1)
					})
				})
			},
			E = p => {
				c(C => d(g({}, C), {
					[p]: (C[p] || new o(0)).add(1)
				})), u(C => {
					var f;
					return d(g({}, C), {
						[p]: (f = C[p]) == null ? void 0 : f.minus(1)
					})
				})
			};
		if(n) return e.createElement("span", {
			className: "text-shadow loading"
		}, "Loading");
		const B = Object.keys(r).filter(p => {
			var C;
			return(C = r[p]) == null ? void 0 : C.gt(0)
		});
		console.log({
			inventoryItems: B
		});
		const Q = Object.keys(m).filter(p => {
			var C;
			return(C = m[p]) == null ? void 0 : C.gt(0)
		});
		return e.createElement(e.Fragment, null, e.createElement("span", {
			className: "text-shadow text-base"
		}, "Select items to withdraw"), e.createElement("div", {
			className: "flex flex-wrap h-fit"
		}, B.map(p => e.createElement(Ee, {
			count: r[p],
			key: p,
			onClick: () => w(p),
			image: Z[p].image,
			locked: !hm({
				item: p,
				game: a.context.state
			})
		})), B.length < 4 && new Array(4 - B.length).fill(null).map((p, C) => e.createElement(Ee, {
			disabled: !0,
			key: C
		}))), e.createElement("div", {
			className: "mt-2"
		}, e.createElement("span", {
			className: "text-shadow text-base"
		}, "Selected"), e.createElement("div", {
			className: "flex flex-wrap h-fit mt-2"
		}, Q.map(p => e.createElement(Ee, {
			count: m[p],
			key: p,
			onClick: () => E(p),
			image: Z[p].image
		})), Q.length < 4 && new Array(4 - Q.length).fill(null).map((p, C) => e.createElement(Ee, {
			disabled: !0,
			key: C
		})))), e.createElement("div", {
			className: "flex items-center mt-2 mb-2"
		}, e.createElement("img", {
			src: hA,
			className: "h-8 mr-2"
		}), e.createElement("div", null, e.createElement("p", {
			className: "text-shadow text-sm"
		}, "Sent to your wallet"), e.createElement("p", {
			className: "text-shadow text-sm"
		}, At(J.myAccount || "XXXX")))), e.createElement(k, {
			onClick: h,
			disabled: Q.length <= 0
		}, "Withdraw"), e.createElement("span", {
			className: "text-xs underline"
		}, e.createElement("a", {
			href: "https://docs.sunflower-land.com/fundamentals/withdrawing",
			target: "_blank",
			rel: "noreferrer"
		}, "Read more")))
	},
	Im = ({
		onClose: A
	}) => {
		var Q;
		const {
			authService: t
		} = i.exports.useContext(X), [a] = M(t), {
			gameService: n
		} = i.exports.useContext(G), [s, r] = i.exports.useState("warning"), c = i.exports.useRef({
			ids: [],
			amounts: [],
			sfl: "0"
		}), [m, u] = i.exports.useState(!1), h = async p => {
			console.log({
				sfl: p
			}), c.current = {
				ids: [],
				amounts: [],
				sfl: p
			}, u(!0)
		}, w = async(p, C) => {
			c.current = {
				ids: p,
				amounts: C,
				sfl: "0"
			}, u(!0)
		}, E = async p => {
			await new Promise(C => setTimeout(C, 1e3)), n.send("WITHDRAW", d(g({}, c.current), {
				captcha: p
			})), A()
		};
		return((Q = a.context.token) == null ? void 0 : Q.userAccess.withdraw) ? m ? e.createElement(Fe, {
			sitekey: "6Lfqm6MeAAAAAFS5a0vwAfTGUwnlNoHziyIlOl1s",
			onChange: E,
			onExpired: () => u(!1),
			className: "w-full m-4 flex items-center justify-center"
		}) : s === "tokens" ? e.createElement(wm, {
			onWithdraw: h
		}) : s === "items" ? e.createElement(Cm, {
			onWithdraw: w
		}) : e.createElement("div", {
			className: "p-2 flex flex-col justify-center"
		}, e.createElement("span", {
			className: "text-shadow text-sm text-center"
		}, "You can only withdraw items that you have synced to the blockchain."), e.createElement("span", {
			className: "text-shadow text-sm text-center mt-4 block"
		}, "Any progress that has not been synced will be lost."), e.createElement("div", {
			className: "flex mt-4"
		}, e.createElement(k, {
			className: "mr-1",
			onClick: () => r("tokens")
		}, "SFL Tokens"), e.createElement(k, {
			onClick: () => r("items")
		}, "SFL Items"))) : e.createElement("span", null, "Available April 15th")
	},
	ym = () => e.createElement("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "16",
		height: "16",
		fill: "currentColor",
		className: "bi bi-eye-fill",
		viewBox: "0 0 16 16"
	}, e.createElement("path", {
		d: "M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"
	}), e.createElement("path", {
		d: "M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
	})),
	Bm = () => e.createElement("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "16",
		height: "16",
		fill: "currentColor",
		className: "bi bi-eye-slash-fill",
		viewBox: "0 0 16 16"
	}, e.createElement("path", {
		d: "m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"
	}), e.createElement("path", {
		d: "M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"
	})),
	Qm = () => e.createElement("ol", null, e.createElement("li", {
		className: "flex text-xs mb-3"
	}, e.createElement("span", {
		className: "mr-1"
	}, "1."), e.createElement("span", null, 'Go to MetaMask and under "Assets" tab click SFL token')), e.createElement("li", {
		className: "flex text-xs mb-3"
	}, e.createElement("span", {
		className: "mr-1"
	}, "2."), e.createElement("span", null, `Click "Send" on the token's main page`)), e.createElement("li", {
		className: "flex text-xs mb-3"
	}, e.createElement("span", {
		className: "mr-1"
	}, "3."), e.createElement("span", null, 'Copy your farm address from above and paste into the "Add Recipient" field')), e.createElement("li", {
		className: "flex text-xs mb-3"
	}, e.createElement("span", {
		className: "mr-1"
	}, "4."), e.createElement("span", null, 'In the "Amount" field, enter the amount of the token you want to deposit')), e.createElement("li", {
		className: "flex text-xs mb-3"
	}, e.createElement("span", {
		className: "mr-1"
	}, "5."), e.createElement("span", null, 'Review the transaction detail and click "Confirm" to send')), e.createElement("li", {
		className: "flex text-xs mb-3"
	}, e.createElement("span", {
		className: "mr-1"
	}, "6."), e.createElement("span", null, 'Once the transaction has completed successfully, open the menu inside Sunflower Land and click "Sync on Chain"'))),
	fm = () => e.createElement("ol", null, e.createElement("li", {
		className: "flex text-xs mb-3"
	}, e.createElement("span", {
		className: "mr-1"
	}, "1."), e.createElement("span", null, 'Go to Opensea and click the "Transfer" button')), e.createElement("li", {
		className: "flex text-xs mb-3"
	}, e.createElement("span", {
		className: "mr-1"
	}, "2."), e.createElement("span", null, 'Copy your farm address from above and paste into the "Address" field')), e.createElement("li", {
		className: "flex text-xs mb-3"
	}, e.createElement("span", {
		className: "mr-1"
	}, "3."), e.createElement("span", null, "Follow the prompts")), e.createElement("li", {
		className: "flex text-xs mb-3"
	}, e.createElement("span", {
		className: "mr-1"
	}, "4."), e.createElement("span", null, 'Once the transaction has completed successfully, open the menu inside Sunflower Land and click "Sync on Chain"'))),
	qa = "Copy Farm Address";
var Xa;
(function(A) {
	A[A.token = 0] = "token", A[A.item = 1] = "item"
})(Xa || (Xa = {}));
const Sm = () => {
		var p;
		const {
			gameService: A
		} = i.exports.useContext(G), [t] = M(A), [a, n] = i.exports.useState(!1), [s, r] = i.exports.useState(qa), [c, m] = i.exports.useState(!1), [u, h] = i.exports.useState(null), w = (p = t.context.state) == null ? void 0 : p.farmAddress, E = () => {
			navigator.clipboard.writeText(w), r("Copied!"), setTimeout(() => {
				r(qa)
			}, 2e3)
		}, B = u === 0, Q = u === 1;
		return e.createElement("div", null, e.createElement("div", {
			className: "h-14 w-full",
			style: {
				perspective: "1000px"
			}
		}, e.createElement("div", {
			className: "relative"
		}, e.createElement(Ae, {
			className: "w-full transition-transform duration-700 h-14",
			style: {
				transformStyle: "preserve-3d",
				transform: a ? "rotateX(180deg)" : void 0
			}
		}, e.createElement("div", {
			className: "flex items-center absolute w-full h-full px-2 rotate-0",
			style: {
				backfaceVisibility: "hidden"
			}
		}, e.createElement("img", {
			src: fa,
			className: "h-8 mr-2 z-50"
		}), e.createElement("div", {
			className: "flex flex-1 justify-center items-center"
		}, e.createElement("span", null, At(w)), e.createElement("span", {
			className: "cursor-pointer ml-3",
			onMouseEnter: () => m(!0),
			onMouseLeave: () => m(!1),
			onClick: E
		}, e.createElement(Sa, null))), e.createElement("span", {
			className: "cursor-pointer",
			onClick: () => n(!0)
		}, e.createElement(ym, null))), e.createElement("div", {
			className: "flex items-center justify-center absolute w-full h-full px-2",
			style: {
				backfaceVisibility: "hidden",
				transform: "rotateX(180deg)"
			}
		}, e.createElement("span", {
			className: "text-[10px] sm:text-xs mt-2 break-all select-text"
		}, w), e.createElement("span", {
			className: "cursor-pointer ml-3 mt-2",
			onClick: () => n(!1)
		}, e.createElement(Bm, null)))), e.createElement("div", {
			className: `absolute top-12 right-16 mr-5 transition duration-400 pointer-events-none ${c?"opacity-100":"opacity-0"}`
		}, e.createElement(Ce, null, s)))), e.createElement("span", {
			className: "text-sm sm:text-lg text-shadow underline block text-center mb-4 mt-6"
		}, "How to deposit?"), e.createElement("div", {
			className: "flex mb-3"
		}, e.createElement(k, {
			className: Y("mr-1", {
				"bg-brown-300": B
			}),
			onClick: () => h(0)
		}, "SFL Token"), e.createElement(k, {
			className: Y("ml-1", {
				"bg-brown-300": Q
			}),
			onClick: () => h(1)
		}, "SFL Items")), B && e.createElement(Qm, null), Q && e.createElement(fm, null), e.createElement("div", {
			className: "flex items-center border-2 rounded-md border-black p-2 bg-[#e43b44]"
		}, e.createElement("img", {
			src: Te,
			alt: "alert",
			className: "mr-2 w-5 h-5/6"
		}), e.createElement("span", {
			className: "text-xs"
		}, "DO NOT SEND MATIC OR ANY OTHER NON SFL TOKENS TO YOUR FARM ADDRESS")))
	},
	xm = ({
		onClose: A
	}) => {
		const [t, a] = i.exports.useState("deposit");
		return e.createElement(P, {
			className: "pt-5 relative max-w-5xl"
		}, e.createElement("div", {
			className: "flex justify-between absolute top-1.5 left-0.5 right-0 items-center"
		}, e.createElement("div", {
			className: "flex"
		}, e.createElement(oe, {
			isActive: t === "deposit",
			onClick: () => a("deposit")
		}, e.createElement("img", {
			src: le,
			className: "h-5 mr-2"
		}), e.createElement("span", {
			className: "text-sm text-shadow"
		}, "Deposit")), e.createElement(oe, {
			isActive: t === "withdraw",
			onClick: () => a("withdraw")
		}, e.createElement("img", {
			src: le,
			className: "h-5 mr-2"
		}), e.createElement("span", {
			className: "text-sm text-shadow"
		}, "Withdraw"))), e.createElement("img", {
			src: Ie,
			className: "h-6 cursor-pointer mr-2 mb-1",
			onClick: A
		})), e.createElement("div", {
			style: {
				minHeight: "200px"
			}
		}, t === "deposit" && e.createElement(Sm, null), t === "withdraw" && e.createElement(Im, {
			onClose: A
		})))
	},
	bm = () => {
		const {
			gameService: A
		} = i.exports.useContext(G), [t] = M(A), [a, n] = e.useState(!1), s = !t.matches("readonly"), r = () => {
			if(s) n(!0), fl.play();
			else return
		};
		return e.createElement("div", {
			className: "z-10 absolute",
			style: {
				width: `${l*2.7}px`,
				right: `${l*3.8}px`,
				top: `${l*4.65}px`
			}
		}, e.createElement("div", {
			className: Y({
				"cursor-pointer": s,
				"hover:img-highlight": s
			})
		}, e.createElement("img", {
			src: pm,
			alt: "bank",
			onClick: r,
			className: "w-full"
		}), s && e.createElement(Re, {
			className: "absolute -bottom-6 left-2",
			text: "Bank",
			icon: le,
			onClick: r
		})), e.createElement(U, {
			show: a,
			onHide: () => n(!1),
			centered: !0
		}, e.createElement(xm, {
			onClose: () => n(!1)
		})))
	};
var km = "data:image/gif;base64,R0lGODdhDwAlAHcAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAADwAlAIEAAADAy9z///8AAAACNoSPqcutEdyBstqLs968X1EJUNQIJlmeiAkeJ8qKCDW9zkg3o8f3/s9jSWItRoCFWuCSypyhAAAh+QQJCgAAACwCAAEADQAkAIEAAADAy9z///8AAAACOYSPeaHtD6OctNr7RBSBvQ4JnNeIICBqx8ikHHIGJpl09ndi+s73q5hxNWTCWieVM9iWNADzZlwiCgAh+QQJCgAAACwDAAAADAAlAIEAAADAy9z///8AAAACPISPCaHtD6OctFoqoBDshe4Em7dlQHl8Y8mlnciByEeH34XneoPypXz49VywoUHFmiF/xOLtSIvKpE9AAQAh+QQJCgAAACwCAAAADQAlAIEAAADAy9z///8AAAACOYQdp8vtD6OctNopYhAZhq91zyY6icJBHGh+Z3vF8oylDre+KP6VBk/yAVzBFm60aREbRBejyQIUAAAh+QQJCgAAACwBAAkADgAcAIEAAADAy9z///8AAAACM4SPqRabAR2CQkgW6mV761tFEiSOTYem6soelSW9oZOFtUJSL07KdP2hBVuH3IlnXBhLBQAh+QQJCgAAACwBAAkADQAcAIEAAADAy9z///8AAAACN4RvgZsRwpB7Ubp6FN5GQOxd1aSNJYem6qp6X+QK4vLIjkeTcX670RTCTIS2E8I1oxWFJNPQUAAAIfkECQoAAAAsAQAHAA0AHgCBAAAAwMvc////AAAAAjeEj6mbEcKMezDOEGXeRlTmOdaUidyJpqf3KazHUPDihHNTs8oV0hcWe5h2LOBOaDwmVYihz1kAACH5BAkKAAAALAEABgAMAB8AgQAAAMDL3P///wAAAAI3hI95EYrcnIHRUTmxRkILplXbSJae0Dnoqq5pErgKhc5oXHNrLBo3JIF8LLjXgzEk9kzMDdBQAAAh+QQJCgAAACwBAAUADAAgAIEAAADAy9z///8AAAACM4SPeRGK7B6MbNL4MKi66Q+G4iiUVGkmQoAK6sqmB8wlVW3fzs3uDOpjeXI44uiI/FgABQAh+QQJCgAAACwCAAQACgAbAIEAAADAy9z///8AAAACMISPGZG3bR6MDEo7V217+g+GoUAiZECWQIqmBtsKr6BddQfcXMulMhL7OVq4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",
	Nm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAMCAYAAABvEu28AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAAASoAMABAAAAAEAAAAMAAAAAFektagAAAFZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Chle4QcAAAENSURBVCgVjVI9D0FBEJwnj0ZCI6FSIVFIRE+t4Jeo+RN+DonXUqk0Kh+dAolKoaB4bo69nOUlNrnc7s7u3NztBUiwUqESJ0A4XfaBxkKdYEyS2rBioWon7Up2i8fLHyPWZClX9XZ8Eo0JKQ/Rii1R0SiQpe/jVLxZhYyh9NAPGfQmdegGgmJJWL5bRnuQxbSP2CpiYXRp2SXN/+ylRsYJsESn9R3dwiqxdzPeO2zr+ewTC88cZQTzNGU0sQSOZmrmJN8+Zh18ROAh5HBZvhWbmZDR+2TapzI2WCFmd+NnQpK6aT6aYTe52UVfzK93igTkzj+SMxPRV5QaqtEf8ufPfl0Q8B9TSK7R4YuE2BPaN28Op/zpBQAAAABJRU5ErkJggg==";
const Mm = ({
		items: A
	}) => {
		const [t, a] = i.exports.useState(Object.values(A)[0]), {
			setToast: n
		} = i.exports.useContext(Ke), {
			gameService: s,
			shortcutItem: r
		} = i.exports.useContext(G), [{
			context: {
				state: c
			}
		}] = M(s), m = c.inventory, u = (Q = 1) => t.ingredients.some(p => p.amount.mul(Q).greaterThan(m[p.item] || 0)), h = (Q = 1) => c.balance.lessThan(t.price.mul(Q)), w = Object.keys(m).includes(t.name), E = !(h() || u()), B = (Q = 1) => {
			s.send("item.crafted", {
				item: t.name,
				amount: Q
			}), n({
				content: "SFL -$" + t.price.mul(Q)
			}), t.ingredients.map((p, C) => {
				n({
					content: p.item + " -" + p.amount.mul(Q)
				})
			}), r(t.name)
		};
		return e.createElement("div", {
			className: "flex"
		}, e.createElement("div", {
			className: "w-3/5 flex flex-wrap h-fit"
		}, Object.values(A).map(Q => e.createElement(Ee, {
			isSelected: t.name === Q.name,
			key: Q.name,
			onClick: () => a(Q),
			image: Z[Q.name].image,
			count: m[Q.name]
		}))), e.createElement(Ae, {
			className: "flex-1 w-1/3"
		}, e.createElement("div", {
			className: "flex flex-col justify-center items-center p-2 relative"
		}, e.createElement("span", {
			className: "text-shadow text-center"
		}, t.name), e.createElement("img", {
			src: Z[t.name].image,
			className: "h-16 img-highlight mt-1",
			alt: t.name
		}), e.createElement("span", {
			className: "text-shadow text-center mt-2 sm:text-sm"
		}, t.description), !w && e.createElement("div", {
			className: "border-t border-white w-full mt-2 pt-1"
		}, t.ingredients.map((Q, p) => {
			const C = Z[Q.item],
				f = new o(m[Q.item] || 0).lessThan(Q.amount);
			return e.createElement("div", {
				className: "flex justify-center items-end",
				key: p
			}, e.createElement("img", {
				src: C.image,
				className: "h-5 me-2"
			}), e.createElement("span", {
				className: Y("text-xs text-shadow text-center mt-2 ", {
					"text-red-500": f
				})
			}, Q.amount.toNumber()))
		}), e.createElement("div", {
			className: "flex justify-center items-end"
		}, e.createElement("img", {
			src: le,
			className: "h-5 mr-1"
		}), e.createElement("span", {
			className: Y("text-xs text-shadow text-center mt-2 ", {
				"text-red-500": h()
			})
		}, `$${t.price.toNumber()}`))), e.createElement(k, {
			disabled: w ? !1 : !E,
			className: `${w?"pe-none":""} text-xs mt-1`,
			onClick: () => B()
		}, w ? "Already crafted" : "Craft"))))
	},
	Rm = ({
		onClose: A
	}) => {
		const [t, a] = i.exports.useState("foods");
		return e.createElement(P, {
			className: "pt-5 relative"
		}, e.createElement("div", {
			className: "flex justify-between absolute top-1.5 left-0.5 right-0 items-center"
		}, e.createElement("div", {
			className: "flex"
		}, e.createElement(oe, {
			isActive: t === "foods",
			onClick: () => a("foods")
		}, e.createElement("img", {
			src: Lt,
			className: "h-5 mr-2"
		}), e.createElement("span", {
			className: "text-sm text-shadow"
		}, "Food"))), e.createElement("img", {
			src: Ie,
			className: "h-6 cursor-pointer mr-2 mb-1",
			onClick: A
		})), e.createElement("div", {
			style: {
				minHeight: "200px"
			}
		}, t === "foods" && e.createElement(Mm, {
			items: xe()
		})))
	},
	Fm = () => {
		const {
			gameService: A
		} = i.exports.useContext(G), [t] = M(A), [a, n] = e.useState(!1), s = !t.matches("readonly"), r = () => {
			n(!0), yl.play()
		}, c = () => {
			n(!1)
		};
		return e.createElement("div", {
			className: "z-10 absolute",
			style: {
				width: `${l*3}px`,
				right: `${l*7}px`,
				top: `${l*1}px`
			}
		}, e.createElement("img", {
			src: km,
			onClick: s ? r : void 0,
			className: "z-10",
			style: {
				position: "absolute",
				top: `-${l*2.2}px`,
				left: `${l*.5}px`,
				width: `${l*1}px`
			}
		}), e.createElement("div", {
			className: Y({
				"cursor-pointer": s,
				"hover:img-highlight": s
			})
		}, e.createElement("img", {
			src: Na,
			alt: "bakery",
			onClick: s ? r : void 0,
			className: "w-full"
		}), s && e.createElement(Re, {
			className: "absolute bottom-14 left-0",
			text: "Kitchen",
			icon: Nm,
			onClick: r
		})), e.createElement(U, {
			centered: !0,
			show: a,
			onHide: c
		}, e.createElement(Rm, {
			onClose: c
		})))
	};
var vm = "./assets/blacksmith_building.df51adb3.gif",
	$a = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAyklEQVQokWP8//8/AzqQFFUDifx//voWI4YkAwMDEzZBkIYV27eDNINNBNFQjF0TSNIpNJnh9IUbDDCNy8y4GKK1RMCGgQgWdE0gJ0FsSAbzQRojPD0ZorW44GowNOHTyMDAwIjTTzAngsD5c1fgToU5D6ufQH6QvLoRzN+3ei5cY3F7P1geJchhGrZ+gbh/6bU3MCeBbQYZAOKzEKEB7kcozQC2CZ8GqCYULzBKiKiSpAEeEKRoAAGQnxiXXnsDCw2saQ0FMDAwAABDbHouabU5uwAAAABJRU5ErkJggg==";
const Dm = ({
		onClose: A
	}) => {
		var r;
		const [t, a] = i.exports.useState("craft"), {
			authService: n
		} = i.exports.useContext(X), [s] = M(n);
		return e.createElement(P, {
			className: "pt-5 relative"
		}, e.createElement("div", {
			className: "flex justify-between absolute top-1.5 left-0.5 right-0 items-center"
		}, e.createElement("div", {
			className: "flex"
		}, e.createElement(oe, {
			isActive: t === "craft",
			onClick: () => a("craft")
		}, e.createElement("img", {
			src: $a,
			className: "h-5 mr-2"
		}), e.createElement("span", {
			className: "text-sm text-shadow"
		}, "Tools")), e.createElement(oe, {
			isActive: t === "nfts",
			onClick: () => a("nfts")
		}, e.createElement("img", {
			src: oa,
			className: "h-5 mr-2"
		}), e.createElement("span", {
			className: "text-sm text-shadow"
		}, "Rare"))), e.createElement("img", {
			src: Ie,
			className: "h-6 cursor-pointer mr-2 mb-1",
			onClick: A
		})), e.createElement("div", {
			style: {
				minHeight: "200px"
			}
		}, t === "craft" && e.createElement(Za, {
			items: ue,
			isBulk: !0,
			onClose: A
		}), t === "nfts" && e.createElement(wA, {
			items: ae,
			onClose: A,
			hasAccess: !!((r = s.context.token) == null ? void 0 : r.userAccess.mintCollectible)
		})))
	},
	Gm = () => {
		const {
			gameService: A
		} = i.exports.useContext(G), [t] = M(A), [a, n] = e.useState(!1), s = !t.matches("readonly"), r = () => {
			if(s) n(!0), Bl.play();
			else return
		};
		return e.createElement("div", {
			className: "z-10 absolute",
			style: {
				width: `${l*6}px`,
				left: `${l*9}px`,
				top: `${l*6}px`
			}
		}, e.createElement("div", {
			className: Y({
				"cursor-pointer": s,
				"hover:img-highlight": s
			})
		}, e.createElement("img", {
			src: vm,
			alt: "market",
			onClick: r,
			className: "w-full"
		}), s && e.createElement(Re, {
			className: "absolute -bottom-8 left-1",
			text: "Craft",
			icon: $a,
			onClick: r
		})), e.createElement(U, {
			centered: !0,
			show: a,
			onHide: () => n(!1)
		}, e.createElement(Dm, {
			onClose: () => n(!1)
		})))
	};
var CA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAwUlEQVQokWP8//8/g6So2n8GBGAEsZ6/vsWADbCAFHtv1oBLbfW98R+mCRtggondPvQbTEM1/5cUVcOvQdWOlShNjBIiqmBJmLNAmkCat/reYIA6DcV/MA0omg5P/QqmP+14DLMN5j8GJqTQYAQJQE1GdhrcqXA/IGtCdzPMiRiexgaQFcP8BI44GADFyTIzLoYMIWGw0Ix3bxmiTn1DsZ0F3eRtX7kY/L5+h7AZuBgYGMAa4E7FsAGH6yDJ5fUtBgB2N1UusCSqIAAAAABJRU5ErkJggg==";
const Ym = ({
		onClose: A
	}) => {
		const [t, a] = i.exports.useState(Me()["Sunflower Seed"]), {
			setToast: n
		} = i.exports.useContext(Ke), {
			gameService: s,
			shortcutItem: r
		} = i.exports.useContext(G), [{
			context: {
				state: c
			}
		}] = M(s), [m, u] = i.exports.useState(!1), [h, w] = i.exports.useState(!1), E = c.inventory, B = ht(t, E), Q = (O = 1) => {
			s.send("item.crafted", {
				item: t.name,
				amount: O
			}), n({
				content: "SFL -$" + B.mul(O).toString()
			}), r(t.name)
		}, p = () => {
			Q()
		}, C = () => {
			w(!0)
		}, f = async O => {
			await new Promise(T => setTimeout(T, 1e3)), s.send("SYNC", {
				captcha: O
			}), A()
		}, x = (O = 1) => c.balance.lessThan(B.mul(O).toString()), S = t.name.split(" ")[0], b = te()[S], N = c.stock[t.name] || new bn(0);
		if(i.exports.useEffect(() => u(It({
				item: t.name,
				inventory: E
			})), [c.inventory]), h) return e.createElement(Fe, {
			sitekey: "6Lfqm6MeAAAAAFS5a0vwAfTGUwnlNoHziyIlOl1s",
			onChange: f,
			onExpired: () => w(!1),
			className: "w-full m-4 flex items-center justify-center"
		});
		const V = () => {
			var H;
			if(t.requires && !E[t.requires] || t.disabled) return e.createElement("span", {
				className: "text-xs mt-1 text-shadow"
			}, "Locked");
			if(N == null ? void 0 : N.equals(0)) return e.createElement("div", null, e.createElement("p", {
				className: "text-xxs no-wrap text-center my-1 underline"
			}, "Sold out"), e.createElement("p", {
				className: "text-xxs text-center"
			}, "Sync your farm to the Blockchain to restock"), e.createElement(k, {
				className: "text-xs mt-1",
				onClick: C
			}, "Sync"));
			const T = Nt[t.name];
			return T && ((H = E[t.name]) == null ? void 0 : H.gt(T)) ? e.createElement("span", {
				className: "text-xs mt-1 text-shadow text-center"
			}, "No space left") : e.createElement(e.Fragment, null, e.createElement(k, {
				disabled: x() || (N == null ? void 0 : N.lessThan(1)),
				className: "text-xs mt-1",
				onClick: () => p()
			}, "Buy 1"), e.createElement(k, {
				disabled: x(10) || (N == null ? void 0 : N.lessThan(10)),
				className: "text-xs mt-1",
				onClick: () => Q(10)
			}, "Buy 10"))
		};
		return e.createElement("div", {
			className: "flex"
		}, e.createElement("div", {
			className: "w-3/5 flex flex-wrap h-fit"
		}, Object.values(Me()).map(O => e.createElement(Ee, {
			isSelected: t.name === O.name,
			key: O.name,
			onClick: () => a(O),
			image: Z[O.name].image,
			count: E[O.name]
		}))), e.createElement(Ae, {
			className: "flex-1 w-1/3"
		}, e.createElement("div", {
			className: "flex flex-col justify-center items-center p-2 relative"
		}, e.createElement(Ha, {
			item: t
		}), e.createElement("span", {
			className: "text-shadow text-center"
		}, t.name), e.createElement("img", {
			src: Z[t.name].image,
			className: "w-8 sm:w-12 img-highlight mt-1",
			alt: t.name
		}), e.createElement("div", {
			className: "border-t border-white w-full mt-2 pt-1"
		}, e.createElement("div", {
			className: "flex justify-center items-center"
		}, e.createElement("img", {
			src: je,
			className: "h-5 me-2"
		}), m && e.createElement("img", {
			src: KA,
			className: "h-6 me-2"
		}), e.createElement("span", {
			className: "text-xs text-shadow text-center mt-2"
		}, LA(bA(b.name, E)))), e.createElement("div", {
			className: "flex justify-center items-end"
		}, e.createElement("img", {
			src: le,
			className: "h-5 mr-1"
		}), e.createElement("span", {
			className: Y("text-xs text-shadow text-center mt-2", {
				"text-red-500": x()
			})
		}, `$${B}`))), V())))
	},
	Om = () => {
		const [A, t] = i.exports.useState(te().Sunflower), {
			setToast: a
		} = i.exports.useContext(Ke), [n, s] = e.useState(!1), {
			gameService: r
		} = i.exports.useContext(G), [{
			context: {
				state: c
			}
		}] = M(r), [m, u] = i.exports.useState(!1), h = c.inventory, w = (S = 1) => {
			r.send("item.sell", {
				item: A.name,
				amount: S
			}), a({
				content: "SFL +$" + Q(A).mul(S).toString()
			})
		}, E = new o(h[A.name] || 0), B = E.equals(0), Q = S => Ct(S, h), p = () => {
			w(1)
		}, C = () => {
			w(E.toNumber()), s(!1)
		}, f = () => {
			E.equals(1) ? p() : s(!0)
		}, x = () => {
			s(!1)
		};
		return i.exports.useEffect(() => {
			u(Ks(h))
		}, [c.inventory]), e.createElement("div", {
			className: "flex"
		}, e.createElement("div", {
			className: "w-3/5 flex flex-wrap h-fit"
		}, Object.values(te()).map(S => e.createElement(Ee, {
			isSelected: A.name === S.name,
			key: S.name,
			onClick: () => t(S),
			image: Z[S.name].image,
			count: h[S.name]
		}))), e.createElement(Ae, {
			className: "flex-1 w-1/3"
		}, e.createElement("div", {
			className: "flex flex-col justify-center items-center p-2 "
		}, e.createElement("span", {
			className: "text-shadow"
		}, A.name), e.createElement("img", {
			src: Z[A.name].image,
			className: "w-8 sm:w-12",
			alt: A.name
		}), e.createElement("span", {
			className: "text-shadow text-center mt-2 sm:text-sm"
		}, A.description), e.createElement("div", {
			className: "border-t border-white w-full mt-2 pt-1"
		}, e.createElement("div", {
			className: "flex justify-center items-end"
		}, e.createElement("img", {
			src: le,
			className: "h-5 mr-1"
		}), m && e.createElement("img", {
			src: KA,
			className: "h-6 me-2"
		}), e.createElement("span", {
			className: "text-xs text-shadow text-center mt-2 "
		}, `$${Q(A)}`))), e.createElement(k, {
			disabled: E.lessThan(1),
			className: "text-xs mt-1",
			onClick: () => p()
		}, "Sell 1"), e.createElement(k, {
			disabled: B,
			className: "text-xs mt-1 whitespace-nowrap",
			onClick: () => f()
		}, "Sell All"))), e.createElement(U, {
			centered: !0,
			show: n,
			onHide: x
		}, e.createElement(P, {
			className: "md:w-4/5 m-auto"
		}, e.createElement("div", {
			className: "m-auto flex flex-col"
		}, e.createElement("span", {
			className: "text-sm text-center text-shadow"
		}, "Are you sure you want to ", e.createElement("br", {
			className: "hidden md:block"
		}), "sell all your ", A.name, "?"), e.createElement("span", {
			className: "text-sm text-center text-shadow mt-1"
		}, "Total: ", E.toNumber())), e.createElement("div", {
			className: "flex justify-content-around p-1"
		}, e.createElement(k, {
			disabled: B,
			className: "text-xs",
			onClick: () => C()
		}, "Yes"), e.createElement(k, {
			disabled: B,
			className: "text-xs ml-2",
			onClick: x
		}, "No")))))
	},
	Um = ({
		onClose: A
	}) => {
		var c;
		const [t, a] = i.exports.useState("buy"), {
			authService: n
		} = i.exports.useContext(X), [s] = M(n), r = m => {
			a(m)
		};
		return e.createElement(P, {
			className: "pt-5 relative"
		}, e.createElement("div", {
			className: "flex justify-between absolute top-1.5 left-0.5 right-0 items-center"
		}, e.createElement("div", {
			className: "flex"
		}, e.createElement(oe, {
			isActive: t === "buy",
			onClick: () => r("buy")
		}, e.createElement("img", {
			src: Ut,
			className: "h-5 mr-2"
		}), e.createElement("span", {
			className: "text-sm text-shadow"
		}, "Buy")), e.createElement(oe, {
			isActive: t === "sell",
			onClick: () => r("sell")
		}, e.createElement("img", {
			src: We,
			className: "h-5 mr-2"
		}), e.createElement("span", {
			className: "text-sm text-shadow"
		}, "Sell")), e.createElement(oe, {
			isActive: t === "rare",
			onClick: () => r("rare")
		}, e.createElement("img", {
			src: ra,
			className: "h-5 mr-2"
		}), e.createElement("span", {
			className: "text-sm text-shadow"
		}, "Rare"))), e.createElement("img", {
			src: Ie,
			className: "h-6 cursor-pointer mr-2 mb-1",
			onClick: () => A()
		})), t === "buy" && e.createElement(Ym, {
			onClose: A
		}), t === "sell" && e.createElement(Om, null), t === "rare" && e.createElement(wA, {
			items: be,
			onClose: A,
			hasAccess: !!((c = s.context.token) == null ? void 0 : c.userAccess.mintCollectible)
		}))
	},
	Jm = () => {
		const {
			gameService: A
		} = i.exports.useContext(G), [t] = M(A), [a, n] = e.useState(!1), s = !t.matches("readonly"), r = () => {
			n(!0), Ql.play()
		};
		return e.createElement("div", {
			id: I.Shop,
			className: Y("absolute", {
				"cursor-pointer": s,
				"hover:img-highlight": s
			}),
			style: {
				width: `${l*3}px`,
				left: `${l*3}px`,
				top: `${l*5}px`
			}
		}, e.createElement("img", {
			src: ka,
			alt: "market",
			onClick: s ? () => r() : void 0,
			className: "w-full"
		}), s && e.createElement(Re, {
			className: "absolute top-5 left-4",
			text: "Shop",
			icon: CA,
			onClick: () => r()
		}), e.createElement(U, {
			centered: !0,
			show: a,
			onHide: () => n(!1)
		}, e.createElement(Um, {
			onClose: () => n(!1)
		})))
	};
var _a = "./assets/wishing_well.98db24c9.png",
	en = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAAAXNSR0IArs4c6QAAAyRJREFUeJzt3TFrU1EYh/EnkqFkkCJGBBdnC+LkEFBoxy7SqYOLX6Jz6Yfp0ElcOjbgkFFEiHMXQYxI6BAyBHTwHSP8r54Qxec3H25u6cMdXu45t0fo6vBxurSp3b2daN18uvy+4VtZa3dvp5esm0+Xm76VtQ4uP0Trbm34PvSPMAQBhqBiCAIMQcUQBBiCiiEIMASVXjoxHI4G0brZZLGVCd/+64fZwpvP2brb96Nl46Pr7HqNDUeDaKI5myyi6/lEEGAIKoYgwBBUDEGAIagYggBDUDEEAdBPF6YTw3TCt3qTvUsXCyeGq/GXaF1/P/vZZ69usoWh/ots0js+uk4nuNEE0ieCAENQMQQBhqBiCAIMQcUQBBiCiiEI6DBZbP7D4QQtnUAeP/+W/nK27DS73vlZ+Kvh37stPhEEGIKKIQgwBBVDEGAIKoYgwBBUDEEA9N6dPI0Wtj7HMH238fjJx2jdg7t3/uR2ftunr9kE8uL9o2hd693V6TmQPhEEGIKKIQgwBBVDEGAIKoYgwBBUDEHAz3MWm+5yTnclp+8YphPDdMLXWuv7u3gbTkgbnwPpE0GAIagYggBDUDEEAYagYggCDEHFEAR02Q3d+BzDLW7E/qu1Pgcy5RNBgCGoGIIAQ1AxBAGGoGIIAgxBxRAEdBnvhe/IxROv8BzD/01//162MPx/gO8sqgNDEGAIKoYgwBBUDEGAIagYggBDUOmn5/B1+BZxJD130HMWfyVb5zmL6sQQBBiCiiEIMAQVQxBgCCqGIMAQVHpXh/E3i9uexxhKvw398nQ7u6vPz1bRutbfhu7wpRcni8oZggBDUDEEAYagYggCDEHFEAQYgsrWDjtMJ4ap9Msn+TmG2a7k9Hrp39t6ApnyiSDAEFQMQYAhqBiCAENQMQQBhqBiCAI6vLM4HA2idbPJoumu6VTrb1e3/vZya8PRIHoXcTZZRNfziSDAEFQMQYAhqBiCAENQMQQBhqBiCALCnbIAHXZNN7W7txOtm0+XW5lopucYzqfLTd/KWgeX2buSPhEEGIKKIQgwBBVDEGAIKoYgwBBUDEEA/AA3DpcftNjv3QAAAABJRU5ErkJggg==";
const Tm = j.WISHING_WELL_CONTRACT,
	An = 60;
async function Km() {
	const A = J.getWishingWell().getBalance(),
		t = J.getWishingWell().canCollect(),
		a = J.getWishingWell().lastCollected(),
		n = J.getPair().getBalance(),
		s = J.getToken().balanceOf(Tm),
		[r, c, m, u, h] = await Promise.all([A, t, n, a, s]);
	let w;
	const E = new Date().getTime() / 1e3 - u;
	if(E <= An) {
		const B = An - E;
		w = Ia(B)
	}
	return {
		myTokensInWell: r,
		totalTokensInWell: h,
		canCollect: c,
		lpTokens: m,
		lockedTime: w
	}
}
const Lm = j.API_URL;
async function Pm({
	farmId: A,
	sessionId: t,
	token: a,
	amount: n,
	captcha: s
}) {
	const r = await window.fetch(`${Lm}/wishing-well`, {
		method: "POST",
		headers: {
			"content-type": "application/json;charset=UTF-8",
			Authorization: `Bearer ${a}`
		},
		body: JSON.stringify({
			sessionId: t,
			farmId: A,
			tokens: n,
			captcha: s
		})
	});
	if(r.status === 429) throw new Error(W.TOO_MANY_REQUESTS);
	const c = await r.json();
	await J.getWishingWell().collectFromWell(c)
}
const Vm = A => AA({
		id: "wishingWell",
		initial: "loading",
		context: {
			state: {
				canCollect: !1,
				lpTokens: "0",
				myTokensInWell: "0",
				totalTokensInWell: "0",
				lockedTime: ""
			}
		},
		states: {
			loading: {
				invoke: {
					src: async() => ({
						state: await Km()
					}),
					onDone: {
						target: "ready",
						actions: _({
							state: (t, a) => a.data.state
						})
					},
					onError: {
						target: "error"
					}
				}
			},
			ready: {
				on: {
					WISH: {
						target: "wishing"
					},
					SEARCH: {
						target: "captcha"
					}
				}
			},
			captcha: {
				on: {
					VERIFIED: {
						target: "searching"
					}
				}
			},
			wishing: {
				invoke: {
					src: async() => {
						await J.getWishingWell().wish()
					},
					onDone: {
						target: "wished"
					},
					onError: {
						target: "error"
					}
				}
			},
			searching: {
				invoke: {
					src: async(t, a) => {
						console.log({
							contextIs: t.state
						});
						const n = Math.min(Number(t.state.lpTokens), Number(t.state.totalTokensInWell));
						console.log({
							tokensToPull: n
						}), console.log({
							event: a
						}), await Pm({
							farmId: A.farmId,
							sessionId: A.sessionId,
							amount: n.toString(),
							token: A.rawToken,
							captcha: a.captcha
						})
					},
					onDone: {
						target: "searched"
					},
					onError: {
						target: "error"
					}
				}
			},
			wished: {
				type: "final"
			},
			searched: {
				type: "final"
			},
			error: {
				type: "final"
			}
		}
	}),
	tn = A => A ? `${A.slice(0,5)}...${A.slice(-4)}` : "",
	Hm = () => {
		const {
			authService: A
		} = i.exports.useContext(X), [t] = M(A), [a, n] = st(Vm(t.context)), s = () => {
			if(a.matches("error")) return e.createElement("span", null, "Something went wrong!");
			if(a.matches("captcha")) return e.createElement(Fe, {
				sitekey: "6Lfqm6MeAAAAAFS5a0vwAfTGUwnlNoHziyIlOl1s",
				onChange: c => n("VERIFIED", {
					captcha: c
				}),
				className: "w-full m-0 flex items-center justify-center"
			});
			if(a.matches("loading")) return e.createElement("span", {
				className: "loading text-sm mt-3"
			}, "Loading");
			if(a.matches("wishing")) return e.createElement("span", {
				className: "loading text-sm mt-3"
			}, "Making a wish");
			if(a.matches("searching")) return e.createElement("span", {
				className: "loading text-sm mt-3"
			}, "Searching");
			if(a.matches("wished")) return e.createElement("span", {
				className: "text-sm mt-4 text-center"
			}, "Your wish has been made. Come back in 3 days to see how lucky you were.");
			if(a.matches("searched")) return e.createElement("span", null, "WooHoo! You found some tokens in the well. They have been sent to:", " ", tn(J.myAccount));
			const r = a.context.state;
			return console.log({
				wishingWell: r
			}), Number(r.lpTokens) <= 0 ? e.createElement("div", {
				className: "py-2 mt-4 border-white flex flex-col items-center"
			}, e.createElement("span", {
				className: "text-sm text-center"
			}, "To make a wish you need the magic LP tokens in your wallet."), e.createElement("a", {
				className: "text-xxs underline cursor-pointer",
				href: "https://docs.sunflower-land.com/fundamentals/wishing-well-locked-liquidity",
				target: "_blank",
				rel: "noreferrer"
			}, "How do I do get tokens?")) : r.myTokensInWell === "0" ? e.createElement("div", {
				className: "py-2 border-white flex flex-col items-center"
			}, e.createElement("span", {
				className: "text-xs"
			}, "Looks like you have those magic LP tokens in your wallet!"), e.createElement(k, {
				className: "text-sm mt-1",
				onClick: () => n("WISH")
			}, "Make a wish")) : r.lockedTime ? e.createElement("div", {
				className: "flex items-center mt-4"
			}, e.createElement("img", {
				src: je,
				className: "w-6 mr-4 ml-2"
			}), e.createElement("span", {
				className: "text-sm"
			}, r.lockedTime, " left")) : e.createElement("div", null, e.createElement("div", {
				className: "py-2 mt-2 border-t border-white flex flex-col items-center"
			}, e.createElement(k, {
				disabled: !!r.lockedTime,
				className: "text-sm mt-1",
				onClick: () => n("SEARCH")
			}, "Search well for SFL")))
		};
		return e.createElement(P, {
			className: "relative"
		}, e.createElement("div", {
			className: "flex"
		}, e.createElement("div", {
			className: "w-2/3 p-2"
		}, e.createElement("div", {
			className: "flex items-start mb-2"
		}, e.createElement("img", {
			src: le,
			alt: "hat",
			className: "h-8 mr-2"
		}), e.createElement("span", {
			className: "text-sm"
		}, "The well is filled with SFL.")), s()), e.createElement("div", {
			className: "flex-1 p-2 flex flex-col items-center"
		}, e.createElement("span", {
			className: "text-xxs"
		}, tn(J.myAccount)), e.createElement("img", {
			src: _a,
			alt: "wishing well",
			className: "w-full"
		}), a.context.state && e.createElement("div", {
			className: "flex items-center justify-center mt-2"
		}, e.createElement("img", {
			src: en,
			className: "w-4 img-highlight mr-2"
		}), e.createElement("span", {
			className: "text-xxs"
		}, Number(ge.fromWei(a.context.state.totalTokensInWell.toString())).toFixed(2), " ", "SFL")), e.createElement("a", {
			className: "text-xs underline cursor-pointer text-center mt-1",
			href: "https://docs.sunflower-land.com/fundamentals/wishing-well-locked-liquidity",
			target: "_blank",
			rel: "noreferrer"
		}, "Read more"))))
	},
	Zm = () => {
		const {
			gameService: A
		} = i.exports.useContext(G), [t] = M(A), [a, n] = e.useState(!1), s = !t.matches("readonly"), r = () => {
			if(s) xl.play(), n(!0);
			else return
		};
		return e.createElement("div", {
			className: "z-10 absolute",
			style: {
				width: `${l*1.6}px`,
				left: `${l*10.4}px`,
				top: `${l*-3}px`
			}
		}, e.createElement("div", {
			className: Y({
				"cursor-pointer": s,
				"hover:img-highlight": s
			})
		}, e.createElement("img", {
			src: _a,
			alt: "market",
			onClick: r,
			className: "w-full"
		}), s && e.createElement(Re, {
			className: "absolute -bottom-6 -left-3",
			text: "Wish",
			icon: en,
			onClick: r
		})), e.createElement(U, {
			centered: !0,
			show: a,
			onHide: () => n(!1)
		}, e.createElement(Hm, {
			key: a ? "1" : "0",
			onClose: () => n(!1)
		})))
	},
	an = ({
		children: A
	}) => e.createElement(kn, {
		remarkPlugins: [Nn]
	}, A),
	Wm = ({
		inbox: A,
		isLoading: t,
		onRead: a
	}) => e.createElement(Ae, {
		className: "relative"
	}, t ? e.createElement(he, null, "Loading...") : A.length ? e.createElement(tA, null, A.map(({
		title: n,
		body: s,
		unread: r
	}, c) => e.createElement(tA.Item, {
		key: c,
		eventKey: c.toString(),
		className: "flex-grow-1 bg-transparent",
		as: Ae
	}, e.createElement(tA.Button, {
		onClick: () => a(c),
		className: "p-2 text-white text-shadow bg-transparent"
	}, r && e.createElement("img", {
		src: Te,
		className: "w-3 mx-3"
	}), e.createElement(an, null, n || `${s.slice(0,10)}...`)), e.createElement(tA.Body, {
		className: "text-sm mt-2 text-shadow text-break",
		as: he
	}, e.createElement(an, null, s))))) : e.createElement(he, null, "No messages")),
	IA = "readMessages";
var Ye;
(function(A) {
	A.MILESTONE_1 = "5e+6", A.MILESTONE_2 = "10e+6"
})(Ye || (Ye = {}));
async function jm() {
	const A = await J.getToken().totalSupply();
	return new o(ge.fromWei(A))
}

function zm(A) {
	const t = A.filter(a => !a.unread).map(a => a.id);
	t.length ? localStorage.setItem(IA, JSON.stringify(t)) : localStorage.removeItem(IA)
}

function qm(A) {
	if(A.lessThan(new o(Ye.MILESTONE_1))) return new o(Ye.MILESTONE_1);
	if(A.lessThan(new o(Ye.MILESTONE_2))) return new o(Ye.MILESTONE_2);
	const t = A.idiv(Ye.MILESTONE_2).add(1).times(10);
	return new o(`${t}e+6`)
}
async function Xm() {
	const A = await jm(),
		t = qm(A);
	return [{
		id: "sfl-supply",
		title: "SFL Supply",
		body: `Total SFL: ${A.toDecimalPlaces(3,o.ROUND_DOWN).toNumber().toLocaleString()}  
        &nbsp;  
        Next halvening is at ${t.toNumber().toLocaleString()}  
        &nbsp;   
        **Note: this value is read from the Blockchain. Other farmers may not have synced yet.**
      `
	}, {
		id: "2022-03-25",
		title: "Welcome to Beta!",
		body: "Welcome to open beta! The game is still in its early stages and we are so grateful that you are here."
	}]
}

function nn() {
	return JSON.parse(localStorage.getItem(IA) || "[]")
}

function $m(A) {
	const t = [...nn(), A];
	localStorage.setItem(IA, JSON.stringify(t))
}
var _m = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAMAAAC3SZ14AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAS1BMVEUAAAAYFCUXFCQYFSUYFCTChWnot5b2zbL+l5uUVUJzPjnpMkWlHzMkK0KlHzSlHjMkK0M4RWToMUXpMUU3RGQlLEM4RWV1PDn///+Ab6WQAAAAAXRSTlMAQObYZgAAAAFiS0dEGJtphR4AAAAHdElNRQflBx8AFS1CbQEpAAAAAW9yTlQBz6J3mgAAAHZJREFUGNOdju0OgyAMReUCdVDnx8b0/d/UopktWfbHk1LCyS1p1/3DwQHwxoRIvUCw5lDGOaLT0TUK+oJf1aakeQqNCrXawUctTckSKQvJLhZzrscoHp7jNLMaMPMi9Xrr9xFL+axFbo05eZc1qBH8hq0RN9gBJ3QEXjzDBLcAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDctMzFUMDA6MjE6NDMrMDA6MDCudIX0AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA3LTMxVDAwOjIxOjQzKzAwOjAw3yk9SAAAAABJRU5ErkJggg==";
const eg = () => {
		const [A, t] = i.exports.useState(!1), [a, n] = i.exports.useState(!1), [s, r] = i.exports.useState([]), [c, m] = i.exports.useState(!1), u = async() => {
			n(!0);
			const w = nn();
			let E = await Xm();
			E = E.map(B => d(g({}, B), {
				unread: !(w == null ? void 0 : w.includes(B.id))
			})), r(E), zm(E), n(!1)
		}, h = w => {
			if(!s[w].unread) return;
			const E = [...s];
			E[w].unread = !1, r(E), $m(E[w].id)
		};
		return i.exports.useEffect(() => {
			u()
		}, []), i.exports.useEffect(() => {
			A && u()
		}, [A]), i.exports.useEffect(() => {
			const w = s.some(E => E.unread);
			m(w)
		}, [s]), e.createElement("div", {
			className: "z-5 absolute align-items-center w-10",
			style: {
				left: `${l*10.5}px`,
				top: `${l*3.5}px`
			}
		}, c && e.createElement("img", {
			src: Te,
			className: "w-3 mx-3 pb-2 animate-float"
		}), e.createElement("img", {
			src: _m,
			className: "absolute w-10 z-10 hover:cursor-pointer hover:img-highlight npc-shadow",
			onClick: () => t(!0)
		}), e.createElement("span", {
			className: "npc-shadow"
		}), e.createElement(U, {
			centered: !0,
			show: A,
			onHide: () => t(!1)
		}, e.createElement(Wm, {
			inbox: s,
			isLoading: a,
			onRead: h
		})))
	},
	Ag = () => e.createElement("div", {
		id: I.Town,
		className: "z-10 absolute",
		style: {
			width: `${l*25}px`,
			height: `${l*9}px`,
			left: `calc(50% - ${l*-15.8}px)`,
			top: `calc(50% - ${l*18}px)`
		}
	}, e.createElement(Jm, null), e.createElement(bm, null), e.createElement(Fm, null), e.createElement(Gm, null), e.createElement(Zm, null), e.createElement(eg, null)),
	tg = ({
		onTryAgain: A
	}) => e.createElement("div", {
		className: "flex flex-col text-center text-shadow items-center p-1"
	}, e.createElement("div", {
		className: "flex mb-3 items-center"
	}, e.createElement("img", {
		src: Te,
		alt: "Warning",
		className: "w-3 mr-3"
	})), e.createElement("p", {
		className: "text-center mb-3"
	}, "Transaction Rejected!"), e.createElement("p", {
		className: "text-center mb-4 text-xs"
	}, "You need to accept the transaction in the metamask popup to continue", " ", e.createElement("a", {
		className: "underline",
		href: "https://docs.sunflower-land.com/support/terms-of-service"
	}, "Terms of Service"), "."), e.createElement("p", {
		className: "text-center mb-4 text-xs"
	}, "This request will not trigger a blockchain transaction or cost any gas fees."), e.createElement(k, {
		onClick: A,
		className: "overflow-hidden mb-2"
	}, e.createElement("span", null, "Try Again"))),
	ag = () => e.createElement("div", {
		className: "flex flex-col items-center p-2"
	}, e.createElement("span", {
		className: "text-center"
	}, "Something went wrong!"), e.createElement("img", {
		src: fe,
		className: "h-20 my-2"
	}), e.createElement("span", {
		className: "text-xs text-center mt-2 mb-1"
	}, "Looks like we were unable to connect. Please refresh and try again.")),
	ng = () => e.createElement("div", {
		className: "flex flex-col text-center text-shadow items-center p-1"
	}, e.createElement("div", {
		className: "flex mb-3 items-center ml-8"
	}, e.createElement("img", {
		src: fe,
		alt: "Warning",
		className: "w-full"
	})), e.createElement("p", {
		className: "text-center mb-3"
	}, "Already signed up!"), e.createElement("p", {
		className: "text-center mb-4 text-xs"
	}, "It looks like you have already registered for beta testing using a different address. Only one address can be used during beta testing. ")),
	sg = () => e.createElement("div", {
		id: "gameerror",
		className: "flex flex-col items-center p-2"
	}, e.createElement("span", {
		className: "text-shadow text-center"
	}, "Can't connect to Polygon"), e.createElement("img", {
		src: fe,
		className: "w-1/2 -mt-4 ml-8"
	}), e.createElement("span", {
		className: "text-shadow text-xs text-center"
	}, "We are trying our best but looks like Polygon is getting a lot of traffic or you have lost your connection."), e.createElement("span", {
		className: "text-shadow text-xs text-center"
	}, "If this error continues please try changing your Metamask RPC")),
	rg = () => e.createElement("div", {
		className: "flex flex-col text-center text-shadow items-center p-1"
	}, e.createElement("div", {
		className: "flex mb-3 items-center ml-8"
	}, e.createElement("img", {
		src: fe,
		alt: "Warning",
		className: "w-full"
	})), e.createElement("p", {
		className: "text-center mb-3"
	}, "Session expired!"), e.createElement("p", {
		className: "text-center mb-4 text-xs"
	}, "It looks like your session has expired. Please refresh the page to continue playing.")),
	og = () => {
		i.exports.useContext(G);
		const {
			authService: A
		} = i.exports.useContext(X);
		return M(A), e.createElement("div", {
			className: "flex flex-col text-center text-shadow items-center p-1"
		}, e.createElement("div", {
			className: "flex mb-3 items-center ml-8"
		}, e.createElement("img", {
			src: fe,
			alt: "Warning",
			className: "w-full"
		})), e.createElement("p", {
			className: "text-center mb-3"
		}, "Too many requests!"), e.createElement("p", {
			className: "text-center mb-4 text-xs"
		}, "Looks like you have been busy! Please try again later."))
	},
	sn = ({
		errorCode: A
	}) => {
		const {
			authService: t
		} = i.exports.useContext(X), [a, n] = M(t);
		return i.exports.useEffect(() => {
			const s = document.querySelector("body");
			return s && (s.style.pointerEvents = "none"), () => {
				s && (s.style.pointerEvents = "initial")
			}
		}, []), console.log({
			errorCode: A
		}), A === "NO_WEB3" ? e.createElement(hc, null) : A === "WRONG_CHAIN" ? e.createElement(Ic, null) : A === "REJECTED_TRANSACTION" ? e.createElement(tg, {
			onTryAgain: () => n("REFRESH")
		}) : A === "NO_FARM" ? e.createElement(ac, null) : A === "BLOCKED" ? e.createElement(Pa, null) : A === "DISCORD_USER_EXISTS" ? e.createElement(ng, null) : A === "NETWORK_CONGESTED" ? e.createElement(sg, null) : A === "SESSION_EXPIRED" ? e.createElement(rg, null) : A === "TOO_MANY_REQUESTS" ? e.createElement(og, null) : e.createElement(ag, null)
	};
var ig = "data:image/png;base64,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",
	lg = "data:image/gif;base64,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";
const cg = () => {
	const {
		gameService: A
	} = i.exports.useContext(G), [t] = M(A), a = r => {
		A.send("LEVEL_UP", {
			skill: r
		})
	}, n = wa(t.context.state), s = ie[n[0]];
	return e.createElement("div", {
		className: "flex flex-col items-center"
	}, s.profession === "farming" && e.createElement("div", {
		className: "flex justify-between"
	}, e.createElement("img", {
		src: CA,
		alt: "farming",
		className: "w-6 h-6 mx-2"
	}), e.createElement("span", null, "Level ", s.level, " ", s.profession), e.createElement("img", {
		src: CA,
		alt: "farming",
		className: "w-6 h-6 mx-2"
	})), s.profession === "gathering" && e.createElement("div", {
		className: "flex justify-between"
	}, e.createElement("img", {
		src: lA,
		alt: "farming",
		className: "w-6 h-6 mx-2"
	}), e.createElement("span", null, "Level ", s.level, " ", s.profession), e.createElement("img", {
		src: lA,
		alt: "farming",
		className: "w-6 h-6 mx-2"
	})), e.createElement("span", {
		className: "text-center text-sm underline"
	}, "Choose a skill"), e.createElement("div", {
		className: "flex w-full mt-3"
	}, n.map(r => {
		const c = Z[r],
			m = ie[r];
		return e.createElement(k, {
			key: r,
			className: "flex flex-col items-center mx-2",
			onClick: () => a(r)
		}, e.createElement("span", {
			className: "text-sm"
		}, r), e.createElement("img", {
			className: "w-1/3  my-2",
			src: c.image,
			alt: "green thumb"
		}), e.createElement("ul", null, m.perks.map(u => e.createElement("li", {
			key: u,
			className: "text-xs block"
		}, u))))
	})))
};
var mg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAOCAYAAAAbvf3sAAAAAXNSR0IArs4c6QAAAKBJREFUKFNjZEACBqpa/5H5MPaF29cYYWw4A6Q4urwLm3qGpZ1lDDBNYA0wxefPXWa4tnsxiiYt11gGQyNduCYUDcgmwXTBDIPJDUYNsKAEhRDIndgAshwjSMP5g+1YFaILGtpXMoA1nGq6C5czq1NGUYcuB9awI+QGg5AeK4YmZMXvLv1m8FijAbGBJA2wmAZpwgdApoOSB0pawqcBlpYAkOeDhT5Qn+MAAAAASUVORK5CYII=";
const gg = ({
		back: A
	}) => {
		const {
			gameService: t
		} = i.exports.useContext(G), [{
			context: {
				state: a
			}
		}] = M(t);
		return e.createElement(e.Fragment, null, e.createElement("div", {
			className: "flex"
		}, e.createElement("img", {
			className: "h-6 mr-3 cursor-pointer",
			src: gA,
			alt: "back",
			onClick: A
		}), e.createElement("span", {
			className: "text-base"
		}, "Skills")), e.createElement("div", {
			className: "flex flex-wrap justify-around overflow-y-auto scrollable max-h-96 pt-2 pr-1 mt-2"
		}, Object.keys(ie).map(n => {
			var c;
			const s = ie[n],
				r = (c = a.inventory[n]) == null ? void 0 : c.equals(1);
			return e.createElement(Ae, {
				className: "w-full my-2 p-1 relative",
				key: n
			}, e.createElement("span", {
				className: Y("text-shadow border text-xxs absolute left-0 -top-4 p-1 rounded-md capitalize", {
					"bg-green-600": s.profession === "farming",
					"bg-[#7C4700]": s.profession === "gathering"
				})
			}, `${s.profession} lvl ${s.level}`), e.createElement("div", {
				className: "flex justify-between h-12 items-center border-b border-white mb-2"
			}, e.createElement("span", {
				className: "text-sm"
			}, n), e.createElement("img", {
				src: r ? Z[n].image : mg,
				alt: "farming",
				className: "w-6 mx-2"
			})), e.createElement("ul", {
				className: "list-disc"
			}, s.perks.map(m => e.createElement("li", {
				key: m,
				className: "text-xs block capitalize"
			}, m))))
		})))
	},
	dg = () => {
		const {
			gameService: A
		} = i.exports.useContext(G), [t] = M(A), [a, n] = e.useState(!1), [s, r] = e.useState(!1), c = () => {
			r(!0)
		}, m = () => {
			r(!1), n(!0), Rl.play()
		}, u = t.context.state.skills.gathering, h = t.context.state.skills.farming, w = mA(u), E = mA(h), B = w + E, Q = ha(w), p = ha(E), C = () => {
			const S = ["Green Thumb", "Barn Manager", "Seed Specialist", "Wrangler", "Lumberjack", "Prospector", "Logger", "Gold Rush"].map(b => t.context.state.inventory[b] ? e.createElement("img", {
				key: b,
				src: Z[b].image,
				alt: b,
				className: "h-6 mr-2 mb-2 md:mb-0"
			}) : null).filter(Boolean);
			return S.length === 0 ? e.createElement("span", {
				className: "text-xs text-shadow"
			}, "Reach level 5 in a profession to unlock a skill") : e.createElement("div", {
				className: "flex flex-wrap"
			}, S)
		}, f = () => t.matches("levelling") ? e.createElement("span", {
			className: "loading"
		}, "Levelling up") : s ? e.createElement(gg, {
			back: m
		}) : wa(t.context.state).length > 0 ? e.createElement(cg, null) : e.createElement(e.Fragment, null, e.createElement("div", {
			className: "flex flex-col md:flex-row pt-8 md:pt-2"
		}, e.createElement(he, {
			className: "w-full md:w-1/3 p-2 flex flex-col items-center mb-2 md:mb-0"
		}, e.createElement("img", {
			src: ce,
			className: "w-1/4 md:w-1/2 mb-2"
		}), e.createElement("span", {
			className: "text-xxs"
		}, "Farmer NFT"), e.createElement("span", {
			className: "text-sm text-shadow"
		}, "Name: ?"), e.createElement("span", {
			className: "text-sm text-shadow"
		}, `Level: ${B}`)), e.createElement("div", {
			className: "px-2 overflow-hidden"
		}, e.createElement("div", {
			className: "flex items-center -mb-.5 md:-mb-2"
		}, e.createElement("span", {
			className: "text-sm"
		}, "Farming"), e.createElement("img", {
			src: CA,
			className: "w-4 h-4 ml-2"
		})), e.createElement("span", {
			className: "text-xxs"
		}, p ? `${h.toNumber()} XP/${p} XP` : `${h.toNumber()} XP`), e.createElement("div", {
			className: "flex items-center mt-1 flex-wrap"
		}, new Array(10).fill(null).map((S, b) => b < E ? e.createElement(Ce, {
			key: b,
			className: "w-5 h-7 mr-1 flex flex-col items-center"
		}) : e.createElement(Ae, {
			key: b,
			className: "w-5 h-7 mr-1 flex flex-col items-center"
		})), e.createElement("span", null, E)), e.createElement("div", {
			className: "flex items-center mt-2 -mb-.5 md:-mb-2"
		}, e.createElement("span", {
			className: "text-sm"
		}, "Tools"), e.createElement("img", {
			src: lA,
			className: "w-4 h-4 ml-2"
		})), e.createElement("span", {
			className: "text-xxs"
		}, Q ? `${u.toNumber()} XP/${Q} XP` : `${u.toNumber()} XP`), e.createElement("div", {
			className: "flex items-center mt-1 flex-wrap mb-1 md:mb-0"
		}, new Array(10).fill(null).map((S, b) => b < w ? e.createElement(Ce, {
			key: b,
			className: "w-5 h-7 mr-1 flex flex-col items-center"
		}) : e.createElement(Ae, {
			key: b,
			className: "w-5 h-7 mr-1 flex flex-col items-center"
		})), e.createElement("span", null, w)), e.createElement("span", {
			className: "underline text-xs cursor-pointer",
			onClick: c
		}, "View all skills"))), e.createElement(he, {
			className: "flex w-1/2 sm:w-1/3 mt-2"
		}, e.createElement("img", {
			src: hA,
			className: "h-5 mr-2"
		}), e.createElement("span", {
			className: "text-sm text-shadow"
		}, "Skills")), e.createElement(he, {
			className: "relative p-2 mt-1"
		}, C()));
		return e.createElement(e.Fragment, null, e.createElement("div", {
			style: {
				width: `${l*3.2}px`,
				position: "absolute",
				right: `${l*39}px`,
				top: `${l*28.8}px`
			},
			className: "relative cursor-pointer hover:img-highlight",
			onClick: () => m()
		}, e.createElement("img", {
			src: ig,
			alt: "house",
			className: "w-full"
		}), e.createElement("img", {
			src: lg,
			style: {
				width: `${l*.7}px`,
				position: "absolute",
				left: `${l*.12}px`,
				top: `${l*.77}px`
			}
		}), e.createElement(Re, {
			className: "absolute bottom-10 left-5",
			text: "Home",
			icon: hA,
			onClick: () => m()
		})), e.createElement(U, {
			centered: !0,
			show: a,
			onHide: () => n(!1)
		}, e.createElement(P, {
			className: "relative"
		}, e.createElement("img", {
			src: Ie,
			className: "h-6 cursor-pointer top-3 right-4 absolute",
			onClick: () => n(!1)
		}), f())))
	};
var ug = "./assets/tailor.3917066c.gif";
const pg = ({
		onClose: A
	}) => {
		const {
			gameService: t
		} = i.exports.useContext(G), [{
			context: {
				state: a
			}
		}] = M(t), [n, s] = i.exports.useState("flags"), r = Object.keys(R).sort().reduce((m, u) => (m[u] = R[u], m), {}), c = Object.values(R).filter(m => m.name in a.inventory).length === 3;
		return e.createElement(P, {
			className: "pt-5 relative"
		}, e.createElement("div", {
			className: "flex justify-between absolute top-1.5 left-0.5 right-0 items-center"
		}, e.createElement("div", {
			className: "flex"
		}, e.createElement(oe, {
			isActive: n === "flags",
			onClick: () => s("flags")
		}, e.createElement("img", {
			src: UA,
			className: "h-5 mr-2"
		}), e.createElement("span", {
			className: "text-sm text-shadow"
		}, "Flags"))), e.createElement("img", {
			src: Ie,
			className: "h-6 cursor-pointer mr-2 mb-1",
			onClick: A
		})), e.createElement("div", {
			style: {
				minHeight: "200px"
			}
		}, e.createElement(wA, {
			items: r,
			onClose: A,
			hasAccess: !0,
			canCraft: !c
		}), e.createElement("p", {
			className: "text-xxs p-1 m-1 underline text-center"
		}, "Max 3 flags per farm. Crafting flags will sync your farm to the blockchain.")))
	},
	Eg = () => {
		const {
			gameService: A
		} = i.exports.useContext(G), [t] = M(A), [a, n] = e.useState(!1), s = !t.matches("readonly"), r = () => {
			n(!0), Ml.play()
		};
		return e.createElement("div", {
			className: "absolute",
			style: {
				width: `${l*3.5}px`,
				right: `${l*6}px`,
				top: `${l*36}px`
			}
		}, e.createElement("div", {
			className: Y({
				"cursor-pointer": s,
				"hover:img-highlight": s
			})
		}, e.createElement("img", {
			src: ug,
			className: "w-full",
			onClick: s ? r : void 0
		}), s && e.createElement(Re, {
			className: "absolute -bottom-7 -left-2",
			text: "Tailor",
			icon: UA,
			onClick: r
		})), a && e.createElement(U, {
			centered: !0,
			show: a,
			onHide: () => n(!1)
		}, e.createElement(pg, {
			onClose: () => n(!1)
		})))
	};
var rn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAAAHoAMABAAAAAEAAAAHAAAAAMOL8UgAAAFZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Chle4QcAAABUSURBVAgdY2CAArtOj/8gDOODaEYQgS54qHwHWJxJLcYJRTWyYiYQ58XlXyAKBfy8vOs/WDtMt4QuG1jBbq8iBtdtfQjFIAUgDNKB7gawKpAksgQA5iYkJtEzbQYAAAAASUVORK5CYII=",
	on = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHCAYAAADAp4fuAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAAAFoAMABAAAAAEAAAAHAAAAABe3YY8AAAFZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Chle4QcAAAAySURBVAgdY/y3zuQ/AxpgQuODucQLsvw88Q7DBJbjV3gZmBrXMlhy3INLMu7z0sewHQABOAvMvqIY8gAAAABJRU5ErkJggg==",
	ln = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAAAOoAMABAAAAAEAAAAMAAAAANXtRIQAAAFZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Chle4QcAAACwSURBVCgVY2RAA7Yemf/RhMDcwzumMyKLsyBzQJqam4uRheDsWgaG/+iawZIgTd2zt/zHBUByyK4B2wgS8Av2ZihJ8WaIzuqE24LMWDqtHMYF28wE4+HTBFIDMhCkBgbgGnHZBFMIopHVwDWCJB7cvgfG+NggORBA0QgRwk4GhvuhSKBEB0zy/LkrDOhskBgyQNGILImLDdPMZNfpgTWlwBRgo0F6wMmIVM2HyncwAgAdNGhCRTpNjgAAAABJRU5ErkJggg==";
const wg = () => {
		const [A, t] = i.exports.useState(!1), [a, n] = i.exports.useState(!1), [s, r] = i.exports.useState(!1);
		return e.createElement(e.Fragment, null, e.createElement("img", {
			src: rn,
			className: "absolute hover:img-highlight cursor-pointer z-10",
			onClick: () => t(!0),
			style: {
				width: `${l*.5}px`,
				right: `${l*4.25}px`,
				top: `${l*27.2}px`
			}
		}), A && e.createElement(U, {
			centered: !0,
			show: A,
			onHide: () => t(!1)
		}, e.createElement(P, null, e.createElement("div", {
			className: "flex items-start"
		}, e.createElement("img", {
			src: rn,
			className: "w-12 img-highlight mr-2"
		}), e.createElement("div", {
			className: "flex-1"
		}, e.createElement("span", {
			className: "text-shadow  block"
		}, "The battle of 3 trees"), e.createElement("span", {
			className: "text-shadow text-xs block"
		}, "19th March"), e.createElement("span", {
			className: "text-shadow block mt-4"
		}, "The outsiders have stormed the village and forced us to the outskirts. Those that survived have fled to the mountains."))))), e.createElement("img", {
			src: on,
			className: "absolute hover:img-highlight cursor-pointer z-10",
			onClick: () => n(!0),
			style: {
				width: `${l*.3}px`,
				right: `${l*55.3}px`,
				top: `${l*2}px`
			}
		}), a && e.createElement(U, {
			centered: !0,
			show: a,
			onHide: () => n(!1)
		}, e.createElement(P, null, e.createElement("div", {
			className: "flex items-start"
		}, e.createElement("img", {
			src: on,
			className: "w-12 img-highlight mr-2"
		}), e.createElement("div", {
			className: "flex-1"
		}, e.createElement("span", {
			className: "text-shadow  block"
		}, "A young girl's diary"), e.createElement("span", {
			className: "text-shadow text-xs block"
		}, "26th March"), e.createElement("span", {
			className: "text-shadow block mt-4"
		}, "My home, my dolls, my friends. They're all gone....."))))), e.createElement("img", {
			src: ln,
			className: "absolute hover:img-highlight cursor-pointer z-10",
			onClick: () => r(!0),
			style: {
				width: `${l*.88}px`,
				left: `${l*31.05}px`,
				top: `${l*37.05}px`
			}
		}), s && e.createElement(U, {
			centered: !0,
			show: s,
			onHide: () => r(!1)
		}, e.createElement(P, null, e.createElement("div", {
			className: "flex items-start"
		}, e.createElement("img", {
			src: ln,
			className: "w-12 img-highlight mr-2"
		}), e.createElement("div", {
			className: "flex-1"
		}, e.createElement("span", {
			className: "text-shadow  block"
		}, "Bilk Noggin"), e.createElement("span", {
			className: "text-shadow text-xs block"
		}, "Died, 45 years"), e.createElement("span", {
			className: "text-shadow block mt-4"
		}, "A hero of the resistance. Loved by friends, family & followers"))))))
	},
	hg = ({
		show: A
	}) => {
		const [t, a] = i.exports.useState(!1);
		return e.createElement(U, {
			show: A && !t,
			centered: !0
		}, e.createElement(P, null, e.createElement("div", {
			className: "flex flex-col items-center p-2"
		}, e.createElement("span", {
			className: "text-shadow text-center"
		}, "Clock not in sync"), e.createElement("img", {
			src: WA,
			className: "w-12"
		}), e.createElement("span", {
			className: "text-shadow text-xs text-center"
		}, "Uh oh, it looks like your clock is not in sync with the game. Set date and time to automatic to avoid disruptions"), e.createElement(k, {
			className: "mt-2",
			onClick: () => a(!0)
		}, "Continue"))))
	},
	Cg = 1e3 * 30,
	Ig = {
		loading: !0,
		playing: !1,
		readonly: !1,
		autosaving: !1,
		minting: !0,
		success: !0,
		syncing: !0,
		withdrawing: !0,
		error: !0,
		blacklisted: !0,
		levelling: !1
	},
	yg = () => {
		const {
			gameService: A
		} = i.exports.useContext(G), [t, a] = M(A);
		return Nc(() => a("SAVE"), Cg), i.exports.useEffect(() => {
			const n = s => {
				t.context.actions.length !== 0 && (s.preventDefault(), s.returnValue = "")
			};
			return window.addEventListener("beforeunload", n), () => {
				window.removeEventListener("beforeunload", n)
			}
		}, [t]), i.exports.useEffect(() => {
			const n = () => {
				a("SAVE")
			};
			return window.addEventListener("blur", n), nA.start(), () => {
				window.removeEventListener("blur", n), nA.pause()
			}
		}, []), e.createElement(e.Fragment, null, e.createElement(Mc, null), e.createElement(U, {
			show: Ig[t.value],
			centered: !0
		}, e.createElement(P, {
			className: "text-shadow"
		}, t.matches("loading") && e.createElement(_e, null), t.matches("error") && e.createElement(sn, {
			errorCode: t.context.errorCode
		}), t.matches("blacklisted") && e.createElement(Tc, null), t.matches("minting") && e.createElement(Gc, null), t.matches("success") && e.createElement(Yc, null), t.matches("syncing") && e.createElement(Oc, null), t.matches("withdrawing") && e.createElement(Uc, null))), e.createElement(hg, {
			show: t.context.offset > 0
		}), e.createElement(Ii, null), e.createElement(om, null), e.createElement(Zl, null), e.createElement(tc, null), e.createElement(kc, null), e.createElement(Dc, null), e.createElement(um, null), e.createElement(nm, null), e.createElement(Ag, null), e.createElement(dg, null), e.createElement(Eg, null), e.createElement(wg, null))
	};
let ke;
const yA = 3,
	BA = 1,
	q = {},
	cn = [1024, 1214],
	mn = A => {
		const t = A.key.toLowerCase();
		ke && (t === "w" || t === "arrowup" ? q.moveUp === void 0 && (q.moveUp = setInterval(() => {
			ke.scrollTop -= yA
		}, BA)) : t === "a" || t === "arrowleft" ? q.moveLeft === void 0 && (q.moveLeft = setInterval(() => {
			ke.scrollLeft -= yA
		}, BA)) : t === "s" || t === "arrowdown" ? q.moveDown === void 0 && (q.moveDown = setInterval(() => {
			ke.scrollTop += yA
		}, BA)) : t === "d" || t === "arrowright" ? q.moveRight === void 0 && (q.moveRight = setInterval(() => {
			ke.scrollLeft += yA
		}, BA)) : t === " " && (ke.scrollTop = cn[0], ke.scrollLeft = cn[1], A.preventDefault()))
	},
	gn = A => {
		const t = A.key.toLowerCase();
		ke && (t === "w" || t === "arrowup" ? q.moveUp !== void 0 && (clearInterval(q.moveUp), delete q.moveUp) : t === "a" || t === "arrowleft" ? q.moveLeft !== void 0 && (clearInterval(q.moveLeft), delete q.moveLeft) : t === "s" || t === "arrowdown" ? q.moveDown !== void 0 && (clearInterval(q.moveDown), delete q.moveDown) : (t === "d" || t === "arrowright") && q.moveRight !== void 0 && (clearInterval(q.moveRight), delete q.moveRight))
	},
	Bg = A => {
		A != null && (ke = A), window.addEventListener("keydown", mn), window.addEventListener("keyup", gn)
	},
	Qg = () => {
		window.removeEventListener("keydown", mn), window.removeEventListener("keyup", gn)
	};
var dn = {
		addListeners: Bg,
		removeListeners: Qg
	},
	fg = "./assets/cloud-gazer.e5175f4f.gif";
const Sg = () => {
		const [A, t] = i.exports.useState(!1);
		return e.createElement("div", {
			style: {
				width: `${l*2}px`,
				height: `${l*2.2}px`,
				right: `calc(50% - ${l*36.7}px)`,
				bottom: `calc(50% - ${l*40.4}px)`
			},
			className: "absolute"
		}, e.createElement("div", {
			className: "relative h-full"
		}, e.createElement("img", {
			src: ce,
			className: "absolute w-3 left-[50%] z-10 animate-float"
		}), e.createElement("div", {
			style: {
				borderRadius: "50%"
			},
			className: "absolute h-3 w-8 bg-black opacity-20 bottom-1 left-[39%]"
		}), e.createElement("img", {
			src: fg,
			onClick: () => t(!0),
			className: "absolute w-20 bottom-0 left-1/2 -translate-x-1/2 cursor-pointer hover:img-highlight drop-shadow-md"
		})), e.createElement(U, {
			centered: !0,
			show: A,
			onHide: () => t(!1)
		}, e.createElement(P, null, e.createElement("div", {
			className: "flex items-start"
		}, e.createElement("img", {
			src: ce,
			className: "h-10 img-highlight mr-3"
		}), e.createElement("div", {
			className: "flex-1"
		}, e.createElement("span", {
			className: "text-shadow block"
		}, "I can't see anything through these thick clouds!"), e.createElement("span", {
			className: "text-shadow block mt-4"
		}, "I wonder if I will ever get to see what lies beneath them all?"))))))
	},
	xg = () => {
		const A = i.exports.useRef(null);
		return i.exports.useEffect(() => (dn.addListeners(A.current), () => {
			dn.removeListeners()
		}), [A]), e.createElement(Ir, null, e.createElement(fc, null, e.createElement(Mn, {
			className: "bg-green-background overflow-scroll relative w-full h-full",
			innerRef: A
		}, e.createElement("div", {
			id: "gameboard",
			className: "relative h-gameboard w-gameboard"
		}, e.createElement("img", {
			src: dt,
			className: "absolute inset-0 w-full h-full"
		}), e.createElement(Sg, null), e.createElement(yg, null)))))
	};
var bg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAH5QTFRFAAAAFxQkYzUwlFVCYzYxYTQvYjYwYDQvYjUwPikzPigyPicxYjQwPSUvYTUwPygyPycxPiYwYzUxGBUluG9QGBQk+nF6+nF76TJFJCtDpR4zpR80JCtCpR8z6TFF6DFFOEVkN0RkOEVlJSxDJCtCGBQlJSxDJCtDdTw5JCxDw0RERwAAACp0Uk5TAP//////////////////////////////////////////////mf+Zmf+ZDyTbcwAAAN9JREFUeJztkctyAiEQRb22Me30xPjoSchTxxDQ//9Be3BNs0pl4yloFpy6twpmszv/C4Cym96cCETzlokF0cOS6HHhh4JXnXD/JN2K2TFBTLReP9tkZqqa5onIpl/2GzulboKFaNvteNtNkVIvx9TIvCuzWV2wPL/augs3sx5p4l4VqmaKeO8z6KDTUml8I/RF9dVEbfwhSAs0+J6Z4e394/MrtER8H44h2ArNaoynn/GI+mvfiBhOo7m/SL4Xc8QZ531KObtizmYYMV/8SLvPFmui7xkpxWSxLe3OX3MFA9cQRSDXzX4AAAAASUVORK5CYII=";
const kg = () => e.createElement(e.Fragment, null, e.createElement("span", {
		className: "text-shadow loading"
	}, "Signing you in"), e.createElement("span", {
		className: "text-shadow block mt-4 sm:text-sm"
	}, "Accept the signature request in your browser wallet to login.")),
	Ng = () => e.createElement("div", {
		className: "flex flex-col text-center text-shadow items-center p-1"
	}, e.createElement("div", {
		className: "flex mb-3 items-center ml-8"
	}, e.createElement("img", {
		src: fe,
		alt: "Warning",
		className: "w-full"
	})), e.createElement("p", {
		className: "text-center mb-3"
	}, "Supply reached!"), e.createElement("p", {
		className: "text-center mb-4 text-xs"
	}, "100,000 farms have already been minted. More spots will be opened over the coming days.")),
	Mg = () => {
		const [A, t] = i.exports.useState("60secs"), {
			authService: a
		} = i.exports.useContext(X);
		return i.exports.useEffect(() => {
			const n = Date.now(),
				s = setInterval(() => {
					const r = 60 - (Date.now() - n) / 1e3;
					t(Ia(r)), r <= 0 && (a.send("REFRESH"), clearInterval(s))
				}, 1e3);
			return() => clearInterval(s)
		}, []), e.createElement("div", {
			className: "flex flex-col items-center p-2"
		}, e.createElement("span", {
			className: "text-center"
		}, "Your farm has been minted!"), e.createElement("img", {
			src: XA,
			className: "w-1/2 mt-2"
		}), e.createElement("span", {
			className: "text-xs text-center mb-1"
		}, "Your farm will be ready in"), e.createElement("span", {
			className: "text-3xl"
		}, A), e.createElement("span", {
			className: "text-xs text-center mt-4 underline mb-1"
		}, "Do not refresh this browser"))
	},
	Rg = () => e.createElement("div", {
		className: "flex flex-col text-center text-shadow items-center p-1"
	}, e.createElement("p", {
		className: "text-center mb-3"
	}, "Full screen required!"), e.createElement("div", {
		className: "flex mb-3 items-center"
	}, e.createElement("img", {
		src: WA,
		alt: "Warning",
		className: "w-full"
	})), e.createElement("p", {
		className: "text-center mb-4 text-xs"
	}, "Only goblins play the game with the screen minimized. Make sure your browser is full screen to enjoy Sunflower Land to the fullest!")),
	Fg = () => {
		const {
			authService: A
		} = i.exports.useContext(X), [t, a] = M(A);
		return i.exports.useEffect(() => {
			const n = async() => {
				await new Promise(r => setTimeout(r, 2e3));
				const s = window.screenTop === 0 && window.screenY === 0;
				t.matches("minimised") && s && a("REFRESH"), !t.matches("minimised") && !s && a("REFRESH")
			};
			return window.addEventListener("resize", n), () => {
				window.removeEventListener("resize", n)
			}
		}, [t]), e.createElement(U, {
			centered: !0,
			show: !t.matches({
				connected: "authorised"
			}) && !t.matches("visiting"),
			backdrop: !1
		}, e.createElement("div", {
			className: "relative"
		}, e.createElement("img", {
			id: "curly",
			src: bg,
			className: "absolute w-54 -top-11 right-20 -z-10 scale-[4]"
		}), e.createElement("img", {
			src: Oa,
			className: "absolute w-52 -top-[83px] -z-10"
		}), e.createElement(P, null, (t.matches({
			connected: "loadingFarm"
		}) || t.matches("checkFarm") || t.matches({
			connected: "checkingSupply"
		})) && e.createElement(_e, null), t.matches("connecting") && e.createElement(_e, {
			text: "Connecting"
		}), t.matches("signing") && e.createElement(kg, null), t.matches({
			connected: "noFarmLoaded"
		}) && e.createElement(nc, null), t.matches({
			connected: "supplyReached"
		}) && e.createElement(Ng, null), t.matches("oauthorising") && e.createElement(_e, null), t.matches({
			connected: "oauthorised"
		}) && e.createElement(ic, null), t.matches({
			connected: "countdown"
		}) && e.createElement(Mg, null), t.matches({
			connected: "creatingFarm"
		}) && e.createElement(sc, null), t.matches({
			connected: "readyToStart"
		}) && e.createElement(Ec, null), t.matches("exploring") && e.createElement(wc, null), t.matches("minimised") && e.createElement(Rg, null), t.matches("unauthorised") && e.createElement(sn, {
			errorCode: t.context.errorCode
		}))))
	},
	vg = () => {
		const {
			authService: A
		} = i.exports.useContext(X), [t, a] = M(A), [n, s] = i.exports.useState(!1);
		return i.exports.useEffect(() => {
			if(n) {
				const r = document.getElementById("crops");
				r == null || r.scrollIntoView({
					behavior: "auto",
					block: "center",
					inline: "center"
				})
			}
		}, [n]), i.exports.useEffect(() => {
			window.ethereum && (window.ethereum.on("networkChanged", () => {
				a("NETWORK_CHANGED")
			}), window.ethereum.on("accountsChanged", function() {
				a("ACCOUNT_CHANGED")
			}))
		}, [a]), i.exports.useEffect(() => {
			const r = t.matches({
				connected: "authorised"
			}) || t.matches("visiting");
			setTimeout(() => s(r), 20)
		}, [t.value]), e.createElement(e.Fragment, null, e.createElement(Fg, null), n ? e.createElement(xg, null) : e.createElement(gc, null))
	};
const Dg = () => e.createElement(bs, null, e.createElement(vg, null));
Rn.render(e.createElement(e.StrictMode, null, e.createElement(Dg, null)), document.getElementById("root"));
