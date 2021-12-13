import React, { useEffect, useState } from "react";
import { getNews } from "../../service/api";
import Article from "../article/Article";
import InfiniteScroll from "react-infinite-scroll-component";

const Articles = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const dailyNews = async () => {
      const res = await getNews(page);
      setNews([...new Set([...news, ...res.data])]);
    };
    dailyNews();
  }, [page]);

  return (
    <InfiniteScroll
      dataLength={news.length}
      next={() => setPage((page) => page + 1)}
      hasMore={true}
    >
      {news && news.map((article, i) => <Article article={article} key={i} />)}
    </InfiniteScroll>
  );
};

export default Articles;
