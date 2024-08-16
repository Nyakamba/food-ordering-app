import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";

const CuisinesSection = () => {
  const { control } = useFormContext();

  return (
    <div>
      <h2 className="text-2xl font-bold">Cuisines</h2>
      <FormDescription>
        Select the cuisines that yuour restaurant serves
      </FormDescription>
      <FormField
        control={control}
        name="cuisines"
        render={({ field }) => <FormItem></FormItem>}
      />
    </div>
  );
};

export default CuisinesSection;
