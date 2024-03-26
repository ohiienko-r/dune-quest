import { useRouteError, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

//TODO: fix auto lang adjustment

const Error = () => {
  const { t } = useTranslation();
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>{t("errorTitle")}</h1>
      <p>{t("errorText")}</p>
      <p>
        <i>
          {
            //@ts-expect-error Error type unknown to be fixed
            error.statusText || error.message
          }
        </i>
      </p>
      <Link to=".." relative="path">
        {t("errorCallToAction")}
      </Link>
    </div>
  );
};

export default Error;
