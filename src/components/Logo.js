import styled from 'styled-components';

const Logo = () => {
  return (
    <LogoSty>
      <div className="logo">
        <svg
          width="41"
          height="41"
          viewBox="0 0 41 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20.5" cy="20.5" r="20.5" fill="#1ABE84" />
          <circle
            cx="20.5"
            cy="20.5"
            r="9"
            fill="#FB8F1D"
            stroke="white"
            strokeWidth="3"
          />
        </svg>
      </div>
    </LogoSty>
  );
};

const LogoSty = styled.div`
  background: green;
  svg {
    width: 100%;
  }
`;

export default Logo;
