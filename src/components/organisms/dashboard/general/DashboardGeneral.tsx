import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GeneralPGKWrapper from "@/components/organisms/general/pgk/GeneralPGKWrapper";
import GeneralCAPDWrapper from "@/components/organisms/general/capd/GeneralCAPDWrapper";
import GeneralHemodialisisWrapper from "@/components/organisms/general/hemodialisis/GeneralHemodialisisWrapper";

export default function DashboardGeneral() {
  return (
    <div className="w-full min-h-[calc(100vh-4rem)]"> {/* Opsional, agar content vertical center */}
      <Tabs defaultValue="pgk" className="w-full">
        {/* Tabs Trigger */}
        <TabsList className="mb-4 grid w-fit grid-cols-3 mx-auto">
          <TabsTrigger value="pgk">
            <span className="block md:hidden">PGK</span>
            <span className="hidden md:block">Penyakit Ginjal Kronik</span>
          </TabsTrigger>
          <TabsTrigger value="capd">
            <span className="block md:hidden">CAPD</span>
            <span className="hidden md:block">Penjelasan CAPD</span>
          </TabsTrigger>
          <TabsTrigger value="hd">
            <span className="block md:hidden">HD</span>
            <span className="hidden md:block">Penjelasan HD</span>
          </TabsTrigger>
        </TabsList>

        {/* Tabs Content */}
        <TabsContent
          value="pgk"
          className="flex justify-center items-center min-h-[60vh] p-4"
        >
          <GeneralPGKWrapper />
        </TabsContent>

        <TabsContent
          value="capd"
          className="flex justify-center items-center min-h-[60vh] p-4"
        >
          <GeneralCAPDWrapper />
        </TabsContent>

        <TabsContent
          value="hd"
          className="flex justify-center items-center min-h-[60vh] p-4"
        >
          <GeneralHemodialisisWrapper />
        </TabsContent>
      </Tabs>
    </div>
  );
}
