import { getNewsList } from "@/app/_libs/microcms";

// コンポーネント
import NewsList from "@/app/_components/NewsList";

export default async function Page() {
  const { contents: news } = await getNewsList();

  return <NewsList news={news} />;
}
