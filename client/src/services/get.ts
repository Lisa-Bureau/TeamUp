import { useEffect, useState } from "react";

export type UseDataType = {
  id: number;
  description: string;
  address: string;
  city: string;
  zip_code: number;
  playing_at: number;
  playing_duration: number;
  nb_places: number;
  auto_validation: number;
  price: number;
  visibility: number;
  level: string;
  disabled: number;
  locker: number;
  shower: number;
  air_conditioning: number;
  toilet: number;
  user_id: number;
  sport_id: number;
  status: string;
  created_at: Date;
  updated_at: Date;
  activity_id: number;
};

export function useApiGet(url: string) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<UseDataType[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    new AbortController();
    setLoading(true);
    setError(null);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => handleError(err, setError))
      .finally(() => setLoading(false));
  }, [url]);
  return { loading, data, error };
}

type ApiErrorCode = "ERR_NETWORK" | "ERR_FAILED";

function handleError(error: unknown, setError: (message: string) => void) {
  let message = "Erreur serveur";
  const maybeCode =
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    typeof (error as { code?: unknown }).code === "string"
      ? ((error as { code: string }).code as ApiErrorCode | string)
      : null;
  switch (maybeCode) {
    case "ERR_NETWORK":
    case "ERR_FAILED":
      message = "Erreur réseau";
      break;
    default:
      message = "Erreur serveur";
  }
  setError(message);
}
