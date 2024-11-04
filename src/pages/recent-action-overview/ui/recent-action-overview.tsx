import { useBackBtn } from "@/shared/hooks";
import { Cell, Section, Typography } from "@/shared/ui";

export const RecentActionOverview = () => {
  useBackBtn();
  return (
    <Section className="h-full">
      <div className="flex flex-col items-center justify-center pt-6 pb-7 gap-y-2">
        <Typography variant="title-lg">Recent Actions</Typography>
        <Typography variant="text" className="text-label-secondary max-w-xxs">
          Here is your action history.
        </Typography>
      </div>
      <div>
        <Cell
          before={
            <div className="flex justify-center items-center rounded-pre-xl size-10 bg-secondary-bg-color">
              <img
                src="https://s3.timeweb.com/2628aad9-67413717-083e-4baa-94e9-20cf6acb1ec4/gift-image.png"
                className="size-8"
              />
            </div>
          }
          subhead={<Typography variant="caption">Sent</Typography>}
        >
          <Typography variant="text-bold">Delicious Cake</Typography>
        </Cell>
        <Cell
          before={
            <div className="flex justify-center items-center rounded-pre-xl size-10 bg-secondary-bg-color">
              <img
                src="https://s3.timeweb.com/2628aad9-67413717-083e-4baa-94e9-20cf6acb1ec4/gift-image.png"
                className="size-8"
              />
            </div>
          }
          subhead={<Typography variant="caption">Sent</Typography>}
        >
          <Typography variant="text-bold">Delicious Cake</Typography>
        </Cell>
        <Cell
          before={
            <div className="flex justify-center items-center rounded-pre-xl size-10 bg-secondary-bg-color">
              <img
                src="https://s3.timeweb.com/2628aad9-67413717-083e-4baa-94e9-20cf6acb1ec4/gift-image.png"
                className="size-8"
              />
            </div>
          }
          subhead={<Typography variant="caption">Sent</Typography>}
        >
          <Typography variant="text-bold">Delicious Cake</Typography>
        </Cell>
        <Cell
          before={
            <div className="flex justify-center items-center rounded-pre-xl size-10 bg-secondary-bg-color">
              <img
                src="https://s3.timeweb.com/2628aad9-67413717-083e-4baa-94e9-20cf6acb1ec4/gift-image.png"
                className="size-8"
              />
            </div>
          }
          subhead={<Typography variant="caption">Sent</Typography>}
        >
          <Typography variant="text-bold">Delicious Cake</Typography>
        </Cell>
      </div>
    </Section>
  );
};
