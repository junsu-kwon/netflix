import styles from './TopMenu.module.css';

function TopMenu() {
  return (
    <ul className={styles.menu}>
      <li>홈</li>
      <li>시리즈</li>
      <li>영화</li>
      <li>NEW! 요즘 대세 콘텐츠</li>
      <li>내가 찜한 콘텐츠</li>
      <li>언어별로 찾아보기</li>
    </ul>
  );
}

export default TopMenu;
