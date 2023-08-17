import { useRouter } from "next/router";
import styles from "./index.module.css";

const List = (props: any) => {
  const router = useRouter();
    return (
        <div className={styles.bookListPage}>
            <div className={styles.bookListPageChild} />
            <div className={styles.bookListPageItem} />
            <div className={styles.redGudie02} />
            <div className={styles.redGudie01} />
            <div>
            <b className={styles.books}>Books</b>
            </div>
            <div className={styles.groupParent}>
                {
                    props?.list?.map((item: any) => {
                        return (
                            <div onClick={() => {
                                router.push(`/book/${item.id}`)
                            }}>
                                <img className={styles.frameChild} alt="" src={item.imageUrl} />
                                <div className={styles.parent}>
                                    <div className={styles.div}>{item.title}</div>
                                    <div className={styles.group}>
                                        <b className={styles.b}>10%</b>
                                        <div className={styles.container}>
                                            <b className={styles.b}>{item.price}</b>
                                            <div className={styles.div1}>원</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default List;