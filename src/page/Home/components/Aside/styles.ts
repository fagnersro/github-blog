import { styled } from '../../../../styles'
import GithubBrands from '../../../../assets/GithubBrands.svg'
import InfoCompany from '../../../../assets/InfoCompany.svg'
import Followers from '../../../../assets/InfoFollowers.svg'

export const ContainerAside = styled('aside', {
  backgroundColor: '$baseProfile',
  borderRadius: 16,

  boxShadow: '0px 2px 28px rgba(0, 0, 0, 0.2)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: '13.25rem',

  width: '54rem',
})

export const WrapperAside = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  height: '9.25rem',
  width: '90%',

  img: {
    borderRadius: '8px',
    height: '9.1rem',
    width: '9.1rem',
  },
})

export const ContentAside = styled('div', {
  height: '8.813rem',
  width: '38.25rem',

  display: 'flex',
  flexDirection: 'column',
})

export const TitleContent = styled('div', {
  height: '1.938rem',
  width: '38.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  h1: {
    color: '$baseTitle',

    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '1.5rem',
    lineHeight: '130%',

    width: '14.75rem',
  },

  div: {
    height: '100%',
  },

  span: {
    color: '$blue',

    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'end',
    gap: '0.5rem',

    textTransform: 'uppercase',

    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '0.75rem',
    lineHeight: '160%',

    svg: {
      fontSize: '0.95rem',
    },
  },
})

export const BioContent = styled('div', {
  marginTop: '0.5rem',
  height: '3.25rem',
  width: '38.25rem',

  span: {
    color: '$baseText',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: '160%',
  },
})

export const Info = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  marginTop: '1.625rem',
  height: '1.625rem',
  width: '24.563rem',

  span: {
    color: '$baseSubtitle',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',

    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '160%',
  },
})

export const IconInfoGit = styled('div', {
  backgroundImage: `url(${GithubBrands})`,
  backgroundSize: '1.125rem',

  height: '1.125rem',
  width: '1.125rem',
})

export const IconInfoCompany = styled('div', {
  backgroundImage: `url(${InfoCompany})`,
  backgroundSize: '0.9rem',
  backgroundRepeat: 'no-repeat',

  height: '1.125rem',
  width: '1.125rem',
})

export const IconInfoFollowers = styled('div', {
  backgroundImage: `url(${Followers})`,
  backgroundSize: '1.125rem',
  backgroundRepeat: 'no-repeat',

  height: '1.125rem',
  width: '1.125rem',
})
