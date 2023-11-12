import {
  showConfirmError,
  showConfirmSuccess,
  showDeleteOderModal,
  showError,
  showSuccess,
  showWarning,
} from "@/components/AccountModal/Modal";
import { useEffect } from "react";
import { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useTable = (fetchData, dataFieldName, deleteData) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [tableData, setTableData] = useState({
    data: [],
    total: 0,
  });
  const [loading, setLoading] = useState(false);

  const [params, setParams] = useState({
    page: 1,
    amount: 10,
    search: "",
  });
  const onPageChange = (params) => {
    setParams((pre) => ({
      ...pre,
      page: params.page,
    }));
  };

  const onPageSizeChange = (params) => {
    setParams((pre) => ({
      ...pre,
      amount: params.amount,
      page: params.page,
    }));
  };
  const fetchRows = useCallback(
    async (params) => {
      if (!fetchData) return;
      try {
        setLoading(true);
        const res = await fetchData({
          ...params,
        });
        if (res?.success) {
          setTableData((pre) => ({
            ...pre,
            data: res[dataFieldName] || [],
            total: res?.count,
          }));
        }
      } catch (err) {
        setLoading(false);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [fetchData]
  );

  const onReset = () => {
    fetchRows({
      page: 1,
      amount: 10,
      search: "",
    });
  };

  const onEdit = (id) => {
    navigate(`${location.pathname}/edit/${id}`);
  };

  const onView = (id) => {
    navigate(`${location.pathname}/${id}`);
  };

  const onDelete = async (id, valueSuccess, valueErorr) => {
    try {
      showWarning(valueSuccess, async () => {
        try {
          const res = await deleteData(id);
          if (res?.success) {
            showSuccess();
            if (
              params.page === Math.ceil(tableData.total / params.amount) &&
              tableData.total % params.amount === 1
            ) {
              onPageChange({
                page: params.page > 1 ? params.page - 1 : params.page,
              });
            } else {
              fetchRows(params);
            }
          } else {
            showError(res?.msg);
          }
        } catch (error) {
          showError(valueErorr);
        }
      });
    } catch (error) {
      showError();
    }
  };

  return {
    tableData,
    loading,
    params,
    fetchRows,
    onDelete,
    onView,
    onEdit,
    onReset,
    onPageChange,
    onPageSizeChange,
  };
};

export default useTable;
