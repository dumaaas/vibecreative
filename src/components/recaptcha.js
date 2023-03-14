import { useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const RECAPTCHA_SITE_KEY = '6LdMZf8kAAAAAL0Z771jpS5bzArxK-Czk-b_6fIR';

export default function Recaptcha({ onVerify }) {
  const handleVerify = (token) => {
    onVerify(token); // pass the reCAPTCHA token to the parent component
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // cleanup script tag on unmount
    };
  }, []);

  return (
    <ReCAPTCHA
      sitekey={RECAPTCHA_SITE_KEY}
      onChange={handleVerify}
    />
  );
}