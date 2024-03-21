import styles from './Loading.module.scss'

export default function Loading(){

  return(
      <div className={`d-flex flex-row flex-fill justify-content-center align-items-center`}>
          <i className={`fas fa-spinner ${styles.spinner}`}></i>
      </div>
  )

}

