import { useState } from "react";
import React from "react";
import { ConnectWallet, useAddress, useAuth } from "@thirdweb-dev/react";

import { signInWithCustomToken, signOut } from "firebase/auth";
import initializeFirebaseClient from "../lib/initFirebase";
import {
  getDoc,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import styles from "../styles/Home.module.css";
import firebaseUsers from "../lib/firebaseUsers";
import useFirebaseDocument from "../lib/useFirebaseDocument";
import HomeMarquee from "../components/HomeMarquee";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import HomeBanner from "../components/Home/Homebanner";
import WhyUs from "../components/Home/WhyUs";
import NFTGallery from "../components/Home/NFTGallery";
import WhyStake from "../components/Home/WhyStake";
export default function Home() {
  return (
    <div className=" ">
      <HomeBanner />
      <HomeMarquee />
      <WhyUs />
      <NFTGallery />
      <WhyStake />
    </div>
  );
}
