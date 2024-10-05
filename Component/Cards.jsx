import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
const CardData = [
  {
    id: 1,
    heading: 'Engaging Content',
    para: 'Discover articles that captivate and inform.',
  },
  {
    id: 2,
    heading: 'Diverse Topics ',
    para: 'Explore a range of subjects from various viewpoints.',
  },
  {
    id: 3,
    heading: 'Join the Community',
    para: 'Connect with fellow readers and share your thoughts.',
  },
];
const Cards = () => {
  return (
    <div className='py-8 mt-16 border-y border-border dark:border-border grid sm:grid-cols-3 gap-8'>
      {CardData.map((item) => {
        const { id, heading, para } = item;
        return (
          <Card key={id} className='text-center   dark:bg-primary-foreground '>
            <CardHeader>
              <CardTitle className='text-xl font-semibold '>
                {heading}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className='mt-2 text-lg'>{para}</CardDescription>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
export default Cards;
