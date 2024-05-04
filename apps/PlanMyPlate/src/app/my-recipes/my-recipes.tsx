import styles from './my-recipes.module.css';

/* eslint-disable-next-line */
export interface MyRecipesProps {}

export function MyRecipes(props: MyRecipesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyRecipes!</h1>
    </div>
  );
}

export default MyRecipes;
