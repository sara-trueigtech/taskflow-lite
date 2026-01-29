import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { SEARCH_FILTER_CONTROLLER } from "../../constant";
import CommonFormController from "../../../../common/commonFormController";

const TaskSearchFilter = ({ onChange }) => {
  const { control, watch } = useForm({
    defaultValues: {
      search: "",
      priority: "all",
    },
  });

  const search = watch("search");
  const priority = watch("priority");

  useEffect(() => {
    onChange({ search, priority });
  }, [search, priority]);

  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        marginBottom: "16px",
      }}
    >
      <CommonFormController
        controls={SEARCH_FILTER_CONTROLLER}
        control={control}
      />
    </div>
  );
};

export default TaskSearchFilter;
