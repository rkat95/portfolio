import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  return <div>{t("home.page_subtitle")}</div>;
}
