import { Select } from 'antd';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  
  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };
  
  return (
    <Select 
      defaultValue={i18n.language} 
      style={{ width: 120 }} 
      onChange={changeLanguage}
      options={[
        { value: 'vi', label: 'Tiếng Việt' },
        { value: 'en', label: 'English' }
      ]}
    />
  );
}

export default LanguageSwitcher;