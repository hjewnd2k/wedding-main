import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { DialogNotification, NotificationType } from '@/components/common';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
  typographyVariants,
} from '@/components/ui';
import { useDevices, useIsomorphicLayoutEffect } from '@/hooks';
import { cn } from '@/lib/utils';

import Bg from '/public/images/home/send-wishes/bg.jpg';

const FormSchema = z.object({
  name: z.string().min(1, {
    message: 'Bạn có thể cho tôi xin tên của bạn được không?',
  }),
  relation: z.string().min(1, {
    message:
      'Hãy cho chúng tôi biết bạn là bạn của cô dâu hay chú rể được không?',
  }),
  confirm: z.enum(['yes', 'no']).optional(),
  amount: z.string().optional(),
  content: z.string().optional(),
});

export const SendWishes = () => {
  const { isLarge } = useDevices();
  const [isClient, setClient] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [notification, setNotification] = useState<NotificationType>();

  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      relation: '',
      confirm: 'yes',
      amount: '',
      content: '',
    },
  });

  useIsomorphicLayoutEffect(() => {
    setClient(true);
  }, []);

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setLoading(true);
    await fetch(
      'https://script.google.com/macros/s/AKfycbwcIsJzsj5yBZtSdxOVX67XRZlilzpeLPU22kXHlHeZ1fAr57tRgAZ8rBbBGU6S506D9A/exec',
      {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        redirect: 'follow',
      },
    );
    setLoading(false);
    setOpen(true);
    setNotification({
      succes: true,
      title: 'Gửi lời chúc thành công!',
      description:
        'Cảm ơn bạn đã gửi những lời chúc tốt đẹp đến với chúng tôi!\nChúc bạn có một ngày tràn đầy niềm vui và hạnh phúc?\n\n❤️❤️❤️',
    });

    form.reset();
  };

  useEffect(() => {
    if (form.formState.errors.name) {
      setOpen(true);
      setNotification({
        succes: false,
        title: 'Bạn nhập thiếu thông tin rồi nè!',
        description: form.formState.errors.name.message || '',
      });
    } else if (form.formState.errors.relation) {
      setOpen(true);
      setNotification({
        succes: false,
        title: 'Bạn nhập thiếu thông tin rồi nè!',
        description: form.formState.errors.relation.message || '',
      });
    }
  }, [form.formState.errors]);

  return (
    <section
      id="sendWishes"
      className="relative h-[592px] sm:h-[688px] md:h-[692px]"
    >
      <Image
        src={Bg}
        alt="Background Wedding"
        className="absolute top-0 z-0 h-full object-cover object-bottom"
        priority
      />
      <div className="container-full py-5 sm:py-10">
        {isClient && (
          <motion.div
            initial={{
              opacity: 0,
              scale: isLarge ? 1 : 0.75,
              x: isLarge ? -40 : 0,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.75,
            }}
            viewport={{ once: true }}
            className="will-change-transform-opacity"
          >
            <Card className="mx-auto max-w-[550px] p-2 sm:p-8 lg:mx-0">
              <CardHeader>
                <CardTitle
                  className={cn(
                    'text-center font-normal uppercase text-beige-rose',
                    typographyVariants({ variant: 'h6' }),
                  )}
                >
                  Bạn sẽ tham dự chứ?
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-0">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4 bg-white sm:space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Tên" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="relation"
                      render={({ field }) => (
                        <FormItem>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Quan hệ" {...field} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Bạn chú rể">
                                Bạn chú rể
                              </SelectItem>
                              <SelectItem value="Bạn cô dâu">
                                Bạn cô dâu
                              </SelectItem>
                              <SelectItem value="Bạn cả hai">
                                Bạn cả hai
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="confirm"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col gap-y-4 md:flex-row md:gap-x-8 md:gap-y-0"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="yes" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Đúng, tôi tham gia
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="no" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Xin lỗi, tôi không thể đến
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="amount"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              min={0}
                              type="number"
                              placeholder="Số người tham dự"
                              {...field}
                              max={10}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="content"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              rows={4}
                              placeholder="Lời chúc"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <div className="flex items-center justify-center">
                      <Button
                        name="send-wishes"
                        type="submit"
                        size="lg"
                        loading={loading}
                        className="h-12 w-full"
                      >
                        Gửi lời chúc
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
      <DialogNotification open={open} setOpen={setOpen} data={notification} />
    </section>
  );
};
