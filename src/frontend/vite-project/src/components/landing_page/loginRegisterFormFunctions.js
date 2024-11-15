export const useLoginRegisterForm = (
    isLoggingIn,
    setIsLoggingIn,
    setUsername,
    setPassword,
    setPasswordRepeat,
    password,
    passwordRepeat,
    setShowPasswordRepeat,
    setShowPasswordLabel,
    setKeyboardKey
  ) => {
    const handlePasswordComplete = () => {
      if (!isLoggingIn) {
        setShowPasswordRepeat(true);
        setKeyboardKey(prev => prev + 1);
      } else {
        setShowPasswordLabel(false);
      }
    };
  
    const handleClear = () => {
      if (!isLoggingIn) {
        setPassword('');
        setPasswordRepeat('');
        setShowPasswordRepeat(false);
        setShowPasswordLabel(true);
        setKeyboardKey(prev => prev + 1);
      } else {
        setPassword('');
        setShowPasswordLabel(true);
      }
    };
  
    const handlePasswordChange = (newPassword) => {
      setPassword(newPassword);
      if (isLoggingIn && newPassword.length !== 4) {
        setShowPasswordLabel(true);
      }
    };
  
    const handleRepeatPasswordChange = (newPassword) => {
      setPasswordRepeat(newPassword);
    };
  
    const isButtonDisabled = () => {
      if (isLoggingIn) {
        return password.length !== 4;
      } else {
        return password.length !== 4 || passwordRepeat.length !== 4 || password !== passwordRepeat;
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!isButtonDisabled()) {
        console.log('Submitted:', { password, passwordRepeat });
      }
    };
  
    const toggleForm = () => {
      setIsLoggingIn((prevState) => !prevState);
      setUsername('');
      setPassword('');
      setPasswordRepeat('');
      setShowPasswordRepeat(false);
      setShowPasswordLabel(true);
      setKeyboardKey(prev => prev + 1);
    };
  
    return {
      handlePasswordComplete,
      handleClear,
      handlePasswordChange,
      handleRepeatPasswordChange,
      isButtonDisabled,
      handleSubmit,
      toggleForm
    };
  };
  