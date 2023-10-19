import React, { FC, useCallback, useState } from 'react';
import { CollapseButton } from './styles';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useRecoilState, useRecoilValue } from 'recoil';
import { DMDummyAtom } from '@/recoil/atoms/DMUserAtom';
import { FriendsAtom } from '@/recoil/atoms/FriendsAtom';

const DMFriendList = () => {};
