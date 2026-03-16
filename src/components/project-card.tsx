import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  href?: string;
}

export function ProjectCard({ img, title, desc, href = "#" }: ProjectCardProps) {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48">
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="p-0">
        <Link
          href={href}
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography variant="h5" className="mb-2">
            {title}
          </Typography>
        </Link>
        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
        <Link href={href}>
          <Button color="gray" size="sm">
            see details
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
