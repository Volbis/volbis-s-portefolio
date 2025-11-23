import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

export default function useSupabase(table) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data: result, error } = await supabase.from(table).select('*');
      if (!error) setData(result);
      setLoading(false);
    }
    fetchData();
  }, [table]);

  return { data, loading };
}
